# Research Method

## 1. Study design

The study compares one independent variable at a time. The primary independent variable is the test region, represented by network egress location. Device, OS, browser, viewport, user agent, language, timezone, account state, consent state, test steps, and collection window must otherwise remain fixed or be recorded as a deviation.

A single run consists of one run manifest and one or more observations. Repeated runs are required before making comparative claims.

## 2. Unit of observation

An observation records one provider entry point and its resulting experience for one region, place, timestamp, and controlled environment. It must have:

- a stable observation ID;
- a parent run ID;
- the exact entry point and final destination, when observable;
- the environment and changed variable;
- typed measurements rather than prose-only notes;
- hashes and relative paths for supporting artifacts;
- limitations and protocol deviations.

## 3. Controls

Before a comparative run, freeze these values in the manifest:

| Control         | Requirement                                                       |
| --------------- | ----------------------------------------------------------------- |
| Hardware/device | Same device class and model where practical                       |
| OS/browser      | Exact versions recorded                                           |
| Viewport        | Identical width, height, and scale factor                         |
| User agent      | Identical unless the experiment changes it                        |
| Locale/language | Identical across region comparisons                               |
| Timezone        | Identical across region comparisons                               |
| Account         | Same signed-in/out state; do not record account identifiers       |
| Consent/cookies | Start from a documented clean or preserved state                  |
| Weather place   | Use the same predefined reference location where the UI allows it |
| Test steps      | Follow the same versioned procedure                               |
| Timing          | Run comparable regions in a bounded collection window             |

If a control cannot be held constant, record it as a protocol deviation. Do not silently merge observations from materially different protocols.

## 4. Run protocol

1. Select a protocol version and experiment ID.
2. Confirm network egress region using a recorded, non-secret verification method.
3. Record environment versions and all controlled variables.
4. Reset or preserve browser state exactly as specified by the experiment.
5. Open the documented Apple Weather entry point.
6. Record provider labels before navigating away.
7. Follow one provider link and record the navigation mode and redirect chain.
8. Capture permitted HTML, screenshot, HAR, console output, response headers, and request metadata.
9. Detect ads and trackers using versioned rules; preserve the raw signals behind every detection.
10. Hash each artifact, validate the observation, and make the run directory read-only by convention.
11. Repeat the procedure according to the sampling plan.

## 5. Sampling and repetition

The initial automation milestone should support pilot runs, not global conclusions. A regional comparison becomes eligible for analysis only when:

- every compared region has at least three successful runs;
- runs span at least two collection windows;
- the same protocol version and compatible environment were used;
- failures and exclusions remain visible in the dataset.

These thresholds permit exploratory reporting only. Stronger causal or temporal claims require a documented power and sampling review.

## 6. Detection rules

Ad and tracker detections are observations, not intent claims. Each detection must include a rule ID, rule-set version, matched signal, request or DOM evidence, and confidence. Hostname matches alone must not be presented as proof that a visible ad was shown.

Visible ads, network advertising signals, analytics, consent tooling, and unknown third-party scripts are separate measures.

## 7. Evidence and claims

Use the claim levels defined in [docs/EVIDENCE_PROTOCOL.md](docs/EVIDENCE_PROTOCOL.md). A result row is not automatically a verified fact: the published statement must name its scope, protocol version, sample, and limitations.

## 8. Failures and exclusions

Timeouts, bot challenges, unavailable pages, denied consent, VPN failures, and incomplete captures are first-class outcomes. Keep them with an explicit status and reason. Never delete an inconvenient observation or replace raw evidence in place.

## 9. Ethics and privacy

Collect only what is necessary to answer the research questions. Do not bypass access controls or bot protection. Redact cookies, authorization headers, account identifiers, precise device identifiers, and unrelated personal data before publication. Follow site terms and applicable law. See [docs/PRIVACY_AND_ETHICS.md](docs/PRIVACY_AND_ETHICS.md).

## 10. Reproduction package

A reproducible published result includes the commit SHA, protocol and rule-set versions, configuration, sanitized manifest and observations, checksums for publishable artifacts, exact commands, tool versions, analysis code, and known limitations.
