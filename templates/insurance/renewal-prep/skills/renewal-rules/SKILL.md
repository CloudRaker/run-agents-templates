---
name: renewal-rules
description: At-risk rules and the renewal packet checklist with due dates. Use it for each policy in the 90-day window.
---

# Renewal rules

The values below are placeholders. Your account management team replaces them before the first run.

## At-risk rules

Flag the account as at risk when one or more rules match. Record each matched rule as a reason.

| Rule             | Placeholder value                                                    |
| ---------------- | -------------------------------------------------------------------- |
| Open claims      | 2 or more open claims                                                 |
| Loss activity    | Current-term incurred losses above 50 percent of the premium          |
| Rate change      | Expected rate change of plus 10 percent or more                       |
| Large premium    | Premium above 250,000                                                 |
| Late start       | Fewer than 60 days to expiration and stage is still `not_started`     |
| Missing data     | No account manager, no premium or no line in the policy record        |

## Renewal packet checklist

Due dates count back from the expiration date. Mark an item `overdue` when its due date is before today.

| Item                                   | Due           |
| -------------------------------------- | ------------- |
| Renewal application or no-change form  | 75 days before |
| Current loss runs (valued in 90 days)  | 75 days before |
| Updated schedule of locations or vehicles | 60 days before |
| Payroll or revenue update              | 60 days before |
| Marketing submission to carriers       | 45 days before |
| Renewal proposal to the insured        | 20 days before |
| Signed proposal and bind request       | 7 days before  |

## Format

Write the checklist as one line per item: `[ ] item, due YYYY-MM-DD` or `[ ] item, due YYYY-MM-DD, overdue`.
