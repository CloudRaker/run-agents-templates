---
name: refund-policy
description: Refund policy rules. Use them to recommend approve, partial, decline or needs_human for a refund request.
---

# Refund policy

These rules are placeholders. Replace them with the policy of your company before you use the agent.

## Rules

| Id       | Rule                                                                                         | Result      |
| -------- | -------------------------------------------------------------------------------------------- | ----------- |
| `R1`     | The charge is 14 days old or less, and it is the first charge of the customer.               | approve     |
| `R2`     | The customer was charged two times for the same period.                                      | approve the duplicate charge |
| `R3`     | An annual plan is cancelled 15 to 60 days after the charge.                                  | partial: the unused full months |
| `R4`     | The charge is more than 60 days old.                                                         | decline     |
| `R5`     | The customer received a refund in the last 12 months.                                        | decline, unless R2 applies |
| `R6`     | The charge has an open dispute or a chargeback.                                              | needs_human |
| `R7`     | The request is above 2000 in the charge currency.                                            | needs_human |
| `R8`     | The customer reports a service outage or a product defect.                                   | needs_human |

## Order

1. Check R6, R7 and R8 first. If one applies, the result is `needs_human`.
2. Then check R2.
3. Then check R1, R3, R4 and R5 in order. The first rule that applies gives the result.
4. If no rule applies, the result is `needs_human`.

## Partial amount

Unused full months = 12 minus the number of started months since the charge. Partial amount = charge amount / 12 x unused full months. Round down to two decimals.
