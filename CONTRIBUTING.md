# Contributing

## Before opening a change

Read the project brief, research method, architecture, and relevant decision records. Use an issue or proposed decision record for changes that alter research questions, controls, persisted schemas, evidence levels, or artifact retention.

## Development workflow

```bash
npm install
npm run check
```

Keep pull requests small and single-purpose. Reusable behavior belongs in `src/`; `scripts/` should only parse operator input and call library code.

## Evidence-bearing changes

A pull request that adds or changes collected evidence must state:

- the research question and protocol version;
- the exact reproduction command;
- the intentionally changed variable and frozen controls;
- the environment and tool versions;
- artifact and redaction handling;
- expected and actual outcome;
- limitations, failures, and exclusions.

Never commit credentials, cookies, authorization headers, account identifiers, raw browser profiles, unredacted HAR files, or unrelated personal data.

## Code quality

- Parse untrusted or persisted input at module boundaries.
- Represent failures explicitly; do not silently drop partial runs.
- Use dependency injection for clocks, IDs, networking, and file destinations where determinism matters.
- Write atomic artifacts, then compute and verify their hashes.
- Add unit tests for rules and redaction, integration tests for capture boundaries, and sanitized fixtures for regressions.
- Avoid selectors or detector rules without a cited fixture and a versioned rule ID.

## Pull request checklist

- [ ] Scope is tied to one roadmap task.
- [ ] `npm run check` passes.
- [ ] Persisted format changes update schemas, runtime validation, fixtures, and documentation.
- [ ] No generated or sensitive artifacts are committed.
- [ ] Reproduction steps and limitations are documented.
- [ ] Architecture changes include or update a decision record.
