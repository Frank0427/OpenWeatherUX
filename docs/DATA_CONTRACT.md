# Data Contract

The authoritative persisted contracts are the JSON Schemas in `schemas/`. TypeScript runtime models must accept and reject the same shared fixtures.

## Identifiers

- Experiment ID: human-readable stable slug, such as `provider-link-pilot`.
- Run ID: UTC basic timestamp plus random suffix, such as `20260711T083000Z-a1b2c3d4`.
- Observation ID: run ID plus a sequence, such as `20260711T083000Z-a1b2c3d4-001`.
- Rule ID: stable namespace and name, such as `tracker.google-analytics.request-host`.

IDs are opaque once persisted. They must not encode account data, IP addresses, or precise physical device identifiers.

## Null, false, unknown, and unavailable

These states are not interchangeable:

- `false`: the collector had the capability and observed absence according to a named method.
- `unknown`: evidence was insufficient to decide.
- unavailable artifact: the manifest omits the artifact and records a limitation or failure.
- optional field absent: the field does not apply to this observation type.

## Timestamps and durations

Use UTC RFC 3339 timestamps. Store durations as non-negative integer milliseconds. Preserve the original timezone separately only when it is an experimental control.

## Artifact references

Artifact paths are relative to the run directory and must not contain `..` or absolute paths. Each finalized artifact includes its media type, byte size, and lowercase SHA-256 digest. Sensitive headers and cookies must be redacted before an artifact becomes publishable.

## Compatibility

Readers reject unsupported major schema versions and unknown enum values unless a schema explicitly permits extension. Historical data is migrated into a new derived dataset; raw evidence is never rewritten in place.
