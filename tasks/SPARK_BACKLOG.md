# Codex 5.3 Spark Backlog

Implement in order. Each task is deliberately bounded so Spark can code without revisiting architecture.

## S01 — Runtime schema parity

**Goal:** Implement Zod runtime schemas for the persisted run manifest and observation contracts.

**Files:** `src/domain/manifest.ts`, `src/domain/observation.ts`, `tests/unit/schema-parity.test.ts`, sanitized fixtures under `data/fixtures/`.

**Acceptance:** Valid fixtures pass both JSON Schema and Zod; targeted invalid fixtures fail both; the checked-in JSON Schemas do not change.

## S02 — Region registry loader

**Goal:** Load and validate `config/regions.json`, enforce unique codes/slugs, and resolve a region by slug.

**Files:** `src/config/regions.ts`, unit tests.

**Acceptance:** All 20 Phase 1 regions load; duplicates and malformed entries fail with actionable errors; no environment or network access.

## S03 — Atomic evidence store

**Goal:** Create unique run directories, write JSON/artifacts atomically, prevent path traversal and overwrite, and return byte size plus SHA-256.

**Files:** `src/storage/`, tests using temporary directories.

**Acceptance:** Concurrent/duplicate writes fail safely; partial temp files are cleaned; paths remain under the run root; hashes are deterministic.

## S04 — Structured redaction

**Goal:** Redact sensitive request/response headers, cookies, query tokens, and configured key patterns before serialized evidence is written.

**Files:** `src/storage/redaction.ts`, sanitized fixtures, unit tests.

**Acceptance:** Case-insensitive headers and nested structures are covered; values are replaced with stable placeholders; originals never appear in test output.

## S05 — Manifest lifecycle

**Goal:** Implement `planned -> running -> complete|partial|failed` transitions with timestamps and explicit failure/limitations.

**Files:** `src/domain/run-lifecycle.ts`, tests.

**Acceptance:** Invalid transitions fail; terminal manifests cannot be mutated; all written states validate.

## S06 — Minimal Chromium collector

**Goal:** Capture one manually supplied public URL with HTML, screenshot, HAR, console JSONL, response headers, redirect chain, and timing.

**Files:** `src/collectors/chromium/`, one thin CLI in `scripts/`, local integration tests.

**Acceptance:** Collector declares capabilities; missing artifacts become limitations; outputs pass schemas; credentials are not accepted on the CLI; no regional routing or Apple-native inference.

## S07 — Deterministic local integration server

**Goal:** Add a test server with redirects, analytics-like requests, a consent banner, popup, and delayed resource.

**Files:** `tests/integration/fixtures/`, integration setup.

**Acceptance:** No public internet dependency; collector tests assert redirects, artifacts, and explicit unavailable states.

## S08 — Detector rule engine

**Goal:** Evaluate versioned hostname, URL, header, and DOM rules and return matched signals with artifact references.

**Files:** `src/detectors/`, `config/detector-rules.json`, fixtures and tests.

**Acceptance:** Rules distinguish advertising, analytics, tracking, consent, and unknown third party; a hostname match never increments `visibleAdCount`; every match includes rule ID and confidence.

## S09 — Quality gate

**Goal:** Validate manifests, observations, artifact existence/hash, collector capability claims, and target-versus-observed egress consistency.

**Files:** `src/analysis/quality.ts`, CLI, tests.

**Acceptance:** Produces machine-readable errors/warnings; never modifies raw evidence; partial runs can be valid but not silently complete.

## S10 — CI foundation

**Goal:** Run install, formatting, lint, types, unit tests, and build on supported Node versions.

**Files:** `.github/workflows/ci.yml`, optional dependency update config.

**Acceptance:** Uses `npm ci`; does not download Playwright browsers until browser integration tests exist; least-privilege GitHub permissions; dependency caching enabled.

## Architecture review checkpoint

After S10, stop. Review schema parity, redaction, evidence immutability, and the M1 exit gate before adding VPN/region adapters, Apple-specific discovery, Safari, iPhone automation, or public reporting.
