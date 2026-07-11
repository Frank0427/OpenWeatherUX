# Decision Log

Use the template at the end of this file. Accepted decisions remain in place until superseded by a later entry.

## ADR-001 — Separate raw evidence from derived results

- **Status:** Accepted
- **Date:** 2026-07-11
- **Background:** Captures can be large, sensitive, and expensive to reproduce. Analysis is rebuildable and may change.
- **Options:** Store everything together; store only aggregates; separate immutable raw artifacts from versioned metadata and derived outputs.
- **Selected solution:** Raw captures are append-only local artifacts. Sanitized metadata and fixtures may be versioned. Generated results are rebuildable from validated observations.
- **Reason:** This preserves provenance while reducing accidental publication of session data.
- **Tradeoffs:** Publishing a reproduction bundle requires an explicit sanitization and release step.
- **Review when:** A durable object store or public dataset release is introduced.

## ADR-002 — Use explicit schemas as the cross-tool contract

- **Status:** Accepted
- **Date:** 2026-07-11
- **Background:** Collection, analysis, and publication will evolve independently and may eventually use different languages.
- **Options:** TypeScript types only; informal JSON; versioned JSON Schema plus TypeScript runtime validation.
- **Selected solution:** JSON Schema is the portable persisted-data contract. TypeScript/Zod models enforce the same boundary during application development.
- **Reason:** Persisted evidence must remain understandable outside one implementation.
- **Tradeoffs:** Schema and runtime models must be kept in sync and tested with shared fixtures.
- **Review when:** A generated-types workflow can replace manual synchronization without obscuring the contract.

## ADR-003 — Begin with Chromium and adapter boundaries

- **Status:** Accepted
- **Date:** 2026-07-11
- **Background:** The research ultimately includes Apple-native, Safari, and embedded browser behavior, but those environments need different automation capabilities.
- **Options:** Automate every environment immediately; use Chromium results as universal proxies; prove the pipeline with Chromium while preserving explicit collector and navigation adapters.
- **Selected solution:** Build the first end-to-end pilot in Playwright Chromium. Never label it as Safari or native Apple UI evidence. Add other collectors behind the same observation contract later.
- **Reason:** It validates storage, redaction, detection, and reproducibility before expensive device automation.
- **Tradeoffs:** Early results answer website-analysis questions only and cannot answer native navigation questions.
- **Review when:** The Chromium pilot passes M1 or a native-only research question blocks progress.

## ADR-004 — Keep the foundation as one Node.js package

- **Status:** Accepted
- **Date:** 2026-07-11
- **Background:** The project currently has one collector and one analysis pipeline concept, with no independent deployment units.
- **Options:** Monorepo; multiple repositories; one package with internal module boundaries.
- **Selected solution:** Use a single ESM TypeScript package with strict compiler settings. Keep domain, collection, storage, detection, and reporting boundaries in `src/`.
- **Reason:** It minimizes tooling while keeping future extraction possible.
- **Tradeoffs:** Module boundaries rely on review until architectural lint rules are justified.
- **Review when:** A dashboard or independently versioned dataset tool is implemented.

## Decision template

```markdown
## ADR-NNN — Title

- **Status:** Proposed | Accepted | Superseded
- **Date:** YYYY-MM-DD
- **Background:**
- **Options:**
- **Selected solution:**
- **Reason:**
- **Tradeoffs:**
- **Review when:**
```
