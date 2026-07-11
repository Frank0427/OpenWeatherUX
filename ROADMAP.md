# Roadmap

Milestones are gated by evidence quality, not dates.

## M0 — Foundation

- [x] Mission, research questions, and principles
- [x] Research method and evidence protocol
- [x] Phase 1 region registry
- [x] Data contracts and TypeScript module boundaries
- [x] Contributor and AI-builder guidance
- [ ] CI checks on pull requests

Exit gate: a clean checkout installs and passes `npm run check`; schemas and sample fixtures validate.

## M1 — Local pilot collector

- [ ] Manifest creation and validation
- [ ] Chromium capture for one manually supplied URL
- [ ] Redirect, request, response, console, screenshot, HTML, and HAR capture
- [ ] Header and secret redaction before persistence
- [ ] Artifact SHA-256 hashing and atomic writes
- [ ] Unit and integration fixtures

Exit gate: a sanitized pilot run is reproducible locally and every observation points to validated artifacts.

## M2 — Detection and regional runner

- [ ] Versioned tracker/ad rule set
- [ ] Evidence-bearing detection results
- [ ] Region configuration and egress verification adapters
- [ ] Retry policy and explicit partial/failed outcomes
- [ ] Three-region pilot with controlled variables

Exit gate: reviewers can distinguish visible ads, network signals, trackers, and unknown third parties without inspecting implementation internals.

## M3 — Phase 1 collection and analysis

- [ ] Reviewed sampling plan and collection windows
- [ ] Phase 1 regional runs
- [ ] Quality-control and exclusion report
- [ ] Reproducible aggregate tables and charts
- [ ] Devil's Advocate review of every major conclusion

Exit gate: every public claim links to its sample, protocol, analysis code, and limitations.

## M4 — Publication

- [ ] Sanitized evidence release process
- [ ] Public report and dashboard
- [ ] Reproduction guide and dataset versioning
- [ ] Community protocol for new regions and providers

Exit gate: an independent contributor can reproduce one published comparison from a clean checkout.

## Deferred

Safari/iPhone automation, BrowserStack or remote macOS, longitudinal monitoring, and public dashboards begin only after the Chromium pilot proves the data contract.
