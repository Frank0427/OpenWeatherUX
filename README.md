# Apple Weather Global Consistency Study

An open-source, reproducible study of how Apple Weather's providers, navigation, third-party pages, advertising, and tracking behavior vary across countries and regions.

This project starts without a preferred conclusion. Every published claim must be traceable to a controlled experiment and labeled as a **Verified Fact**, **Strong Evidence**, **Hypothesis**, or **Unknown**.

## Current status

Phase 1: project foundation. The research protocol and data contracts are defined; collection automation is intentionally not implemented yet.

## Research questions

1. Which weather, severe weather, air quality, and radar providers appear in each region?
2. Where does a provider link open: Apple UI, Safari, an embedded browser, or a third-party site?
3. What advertisements, trackers, consent dialogs, and monetization mechanisms appear?
4. Is the experience consistent between regions when other variables are controlled?
5. Can an independent researcher reproduce each observation?

See [PROJECT_BRIEF.md](PROJECT_BRIEF.md) for the full mission and [RESEARCH_METHOD.md](RESEARCH_METHOD.md) for the experiment protocol.

## Repository map

| Path                       | Purpose                                                      |
| -------------------------- | ------------------------------------------------------------ |
| `config/`                  | Versioned region and experiment configuration                |
| `schemas/`                 | Machine-readable contracts for manifests and observations    |
| `src/`                     | TypeScript domain and future collection modules              |
| `scripts/`                 | Thin operator entry points; reusable logic belongs in `src/` |
| `data/raw/`                | Local, immutable source captures; ignored by Git             |
| `data/fixtures/`           | Small, sanitized test fixtures                               |
| `screenshots/`, `network/` | Local heavy evidence; ignored by Git                         |
| `results/generated/`       | Rebuildable outputs; ignored by Git                          |
| `analysis/`                | Versioned analysis code and reviewed narrative               |
| `docs/`                    | Architecture and evidence guidance                           |
| `tasks/`                   | Builder-ready implementation backlog                         |

## Local setup

Requirements: Node.js 22 or later and npm.

```bash
npm install
npm run check
```

Browser binaries are not required until browser collection work begins. When needed, install only the required engine with `npx playwright install chromium`.

## Non-goals for the foundation phase

- Drawing conclusions about Apple or any provider
- Automating iPhone or Safari behavior
- Bypassing bot protection, access controls, consent, or regional restrictions
- Committing raw captures that may contain session data or personal information
- Building the public dashboard

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md). Architecture decisions belong in [DECISIONS.md](DECISIONS.md), and evidence-bearing changes must include reproducible steps.

## License

[MIT](LICENSE)
