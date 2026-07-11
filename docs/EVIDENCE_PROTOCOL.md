# Evidence Protocol

## Claim levels

| Level           | Use when                                                                                  | Minimum support                                                                        |
| --------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Verified Fact   | The statement directly describes controlled observations                                  | Validated records, reproducible artifacts, declared scope, no unresolved contradiction |
| Strong Evidence | Multiple independent observations converge but direct proof or full control is incomplete | Repetition, corroborating evidence types, limitations disclosed                        |
| Hypothesis      | A plausible explanation remains to be tested                                              | Named supporting signals and a falsifiable next experiment                             |
| Unknown         | Available evidence cannot decide                                                          | Missing or conflicting evidence is stated explicitly                                   |

The level applies to a precisely scoped claim, not to a provider, country, or report as a whole.

## Required claim record

Every material claim should contain:

- exact wording and scope;
- evidence level;
- research question;
- included and excluded observation IDs;
- protocol, schema, and detector rule-set versions;
- analysis commit SHA;
- counterevidence and plausible alternatives;
- limitations and conditions that would change the level.

## Review questions

1. Does the evidence show the claim, or only a correlated signal?
2. Could an uncontrolled variable explain the difference?
3. Were failures and contradictory runs retained?
4. Is an absence based on a capable observation method?
5. Is the sample broad enough for the stated scope?
6. Can another researcher repeat the transformation from observations to claim?

Major conclusions require a separate Devil's Advocate review. The reviewer should attempt to lower the evidence level before accepting it.
