# Architecture

## Data flow

```text
versioned config
      |
      v
run planner ---> run manifest
      |                |
      v                v
collector ------> raw artifacts
      |                |
      v                v
normalizer ---> observations + hashes
      |
      v
detectors ---> evidence-bearing signals
      |
      v
quality gate ---> analysis ---> publishable bundle
```

Raw artifacts are append-only inputs. Normalized observations and detector output reference them by relative path and SHA-256 hash. Analysis reads validated normalized data, never ad hoc collector internals.

## Module boundaries

| Module       | Owns                                           | Must not own                       |
| ------------ | ---------------------------------------------- | ---------------------------------- |
| `domain`     | IDs, schemas, shared types, statuses           | Browser or filesystem side effects |
| `config`     | Parsing and validating versioned inputs        | Environment-specific secrets       |
| `collectors` | Browser/native adapters and raw capture        | Conclusions or aggregate analysis  |
| `storage`    | Atomic writes, hashing, layout, redaction gate | Collection decisions               |
| `detectors`  | Versioned rules and matched signals            | Unsupported intent claims          |
| `analysis`   | Quality checks and reproducible derivation     | Mutation of raw evidence           |
| `reporting`  | Sanitized exports and presentation             | Access to unredacted secrets       |

Dependencies point inward toward `domain`. A collector may use storage and domain contracts; domain code never imports a collector.

## Run layout

```text
data/raw/<run-id>/
  manifest.json
  observations/
    <observation-id>.json
  artifacts/
    <observation-id>/
      page.html
      screenshot.png
      network.har
      console.jsonl
      headers.json
```

The implementation may omit unavailable artifacts but must record why. Never reuse a run directory. Partial and failed runs still write a manifest and explicit status.

## Adapter contracts

Future collectors implement a capability-oriented interface. Capabilities such as network capture, screenshots, native navigation classification, and console access must be declared per collector; missing capabilities remain `unknown`, not `false`.

Regional egress is also an adapter. The runner asks for a target region and separately verifies the observed egress. A VPN configuration request is not proof of actual region.

## Trust boundaries

- Web pages, redirects, headers, console messages, and HAR entries are untrusted.
- Environment variables may contain secrets and must never be copied wholesale into manifests.
- Raw artifacts require redaction before publication, not merely before Git commit.
- Detector rules return matched evidence and confidence; analysis decides whether a claim is supportable.

## Versioning

Protocol, schema, detector rule set, region registry, and software commit are separate versions in the manifest. A breaking persisted-data change increments `schemaVersion`; protocol changes do not rewrite historical observations.
