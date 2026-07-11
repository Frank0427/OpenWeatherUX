# Privacy, Ethics, and Responsible Collection

## Collection boundary

Collect public provider-page behavior and only the minimum technical metadata needed for the research questions. Do not log into third-party providers for collection, defeat paywalls or bot protection, automate acceptance of terms without review, or collect unrelated user content.

## Sensitive values

Redact at minimum: `Cookie`, `Set-Cookie`, `Authorization`, proxy credentials, query tokens, account identifiers, local IP addresses where unnecessary, and persistent device IDs. Redaction must operate on structured data before serialized artifacts are written whenever possible.

## Publication boundary

Git ignore rules are not a privacy control. Before release, generate a new sanitized bundle, scan it for secrets, manually sample HTML/HAR/screenshots, and document removed fields. Publish checksums of the released files, not unredacted originals.

## Site impact

Use conservative concurrency and explicit rate limits. Cache static resources where lawful and compatible with the protocol. Stop on access challenges instead of escalating evasion. Record the challenge as an outcome.

## Corrections

If sensitive data is published, remove public access, rotate affected credentials where applicable, document the incident, and replace the release with a sanitized version. Do not rewrite the meaning of prior conclusions silently.
