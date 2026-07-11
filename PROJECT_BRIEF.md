# Apple Weather Global Consistency Study

Version: v0.2
Status: Project Initialization
License: MIT (Recommended)

---

# Mission

Build an open-source, reproducible research project that objectively studies the consistency of Apple's Weather experience across different countries and regions.

The project does **NOT** assume any conclusion.

The objective is to collect evidence and answer questions through reproducible experiments.

---

# Core Principles

1. Evidence First
2. Reproducibility
3. Transparency
4. No Preset Conclusions
5. Control Variables
6. Public Documentation

---

# Primary Research Questions

## RQ-1

Which data providers does Apple Weather use in each country/region?

---

## RQ-2

When users open provider pages from Apple Weather:

- Does Apple stay inside its own UI?
- Does it open Safari?
- Does it open an embedded browser?
- Does it jump to a third-party website?

---

## RQ-3

Do third-party provider pages contain:

- Advertisements
- Tracking scripts
- Analytics
- Google AdSense
- Google Vignette
- DoubleClick
- Other monetization mechanisms

---

## RQ-4

Are user experiences consistent across countries and regions?

---

## RQ-5

Can every observation be independently reproduced?

---

# Countries / Regions (Phase 1)

## Greater China

- China Mainland
- Hong Kong
- Macau
- Taiwan

## East Asia

- Japan
- South Korea

## Southeast Asia

- Singapore
- Malaysia
- Thailand
- Indonesia
- Vietnam
- Philippines

## South Asia

- India

## Oceania

- Australia
- New Zealand

## North America

- United States
- Canada

## Europe

- United Kingdom
- Germany
- France

Future expansion is allowed after Phase 1.

---

# Data Collection

For every country/region collect:

## Provider Information

- Weather Provider
- Severe Weather Provider
- Air Quality Provider
- Radar Provider
- Other providers

---

## Navigation

- Original Apple entry point
- Destination URL
- Redirect chain
- Browser type
- Embedded WebView
- Safari

---

## Website Analysis

Capture:

- HTML
- Screenshot
- HAR
- Console log
- Network requests
- Response headers

---

## Advertisement Detection

Automatically detect:

- Google AdSense
- Google Vignette
- DoubleClick
- Google Analytics
- Google Tag Manager
- Facebook Pixel
- Other trackers

---

## User Experience Metrics

Record:

- Page Load Time
- Redirect Count
- Number of Ads
- Popups
- Full Screen Ads
- Cookie Banner
- Consent Dialog
- Third-party Scripts

---

# Experimental Design

Always control variables.

Only change ONE variable at a time.

Examples:

Variable:

- Country IP

Keep Constant:

- Device
- Browser
- Screen Resolution
- User-Agent
- Language
- Timezone
- OS Version

Document every changed variable.

---

# Repository Structure

/apple-weather-global-consistency-study

README.md

PROJECT_BRIEF.md

RESEARCH_METHOD.md

COUNTRIES.md

DECISIONS.md

ROADMAP.md

/docs

/scripts

/data

/results

/screenshots

/network

/analysis

---

# Automation

Preferred tools:

- Playwright
- Chromium
- Safari (where possible)
- Node.js
- TypeScript

Possible future:

- BrowserStack
- Remote macOS
- iPhone automation

---

# AI Collaboration Strategy

## Architect (GPT)

Responsibilities

- Research Design
- Architecture
- Methodology
- Standards
- Documentation
- Final Conclusions

Never directly implement repetitive work.

---

## Builder (Codex 5.3 Spark)

Responsibilities

- Coding
- Automation
- Scraping
- Parsing
- Tests
- CI
- Documentation generation

Default implementation model.

---

## Reviewer (GPT / Stronger Model)

Responsibilities

- Code Review
- Architecture Review
- Security Review
- Experimental Review
- Documentation Review

Reject weak evidence.

---

## Devil's Advocate

Purpose

Challenge every important conclusion.

Questions include:

- Is there another explanation?
- Are variables controlled?
- Is the sample size enough?
- Can others reproduce this?
- Is there contradictory evidence?

Every major conclusion should survive this review.

---

# Evidence Levels

Every statement must be labeled.

## Verified Fact

Confirmed by experiments.

---

## Strong Evidence

Highly supported but not directly proven.

---

## Hypothesis

Reasonable explanation requiring future verification.

---

## Unknown

Insufficient evidence.

Never speculate beyond available evidence.

---

# Decision Records

Maintain DECISIONS.md.

Each decision should include:

- Background
- Options
- Selected Solution
- Reason
- Tradeoffs
- Future Review Conditions

---

# Roadmap

Phase 1

- Repository
- Documentation
- Standards
- Country List

Phase 2

- Automation
- Data Collection

Phase 3

- Analysis
- Reports

Phase 4

- Public Dashboard

Phase 5

- Community Contributions

---

# Open Source Guidelines

Repository Visibility:

Public

Recommended License:

MIT

Contributions:

Welcome

Every Pull Request must:

- Include evidence
- Include reproducible steps
- Pass automated checks

---

# Initial Tasks for Codex

1. Create a new public GitHub repository:

apple-weather-global-consistency-study

2. Use the same local workspace convention as my existing repositories.

3. Initialize:

- README
- LICENSE
- .gitignore
- PROJECT_BRIEF.md
- ROADMAP.md
- DECISIONS.md
- RESEARCH_METHOD.md
- CONTRIBUTING.md

4. Build the directory structure.

5. Create the initial Git commit.

6. Push to GitHub.

7. Return the repository URL.

Do not implement research automation yet.

Focus only on creating a clean, maintainable, well-documented project foundation.

---

End of Document
