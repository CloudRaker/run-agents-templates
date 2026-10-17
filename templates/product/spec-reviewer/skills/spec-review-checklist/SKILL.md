---
name: spec-review-checklist
description: Checklist and severity rules for a product spec review. Use it to find gaps in each area.
---

# Spec review checklist

## Problem

- The spec states the problem without the solution.
- It gives evidence: data, customer quotes or support volume.
- It says why the team must solve it now.

## Users

- It names the user segment and the job that they do.
- It says who does not get the change.

## Success metric

- It names one primary metric with a baseline and a target.
- It names a time frame and a guardrail metric that must not get worse.

## Scope

- It lists what is in scope and what is out of scope.
- Each requirement is testable. "Fast" or "easy" without a number is not testable.
- It lists open decisions and dependencies on other teams.

## Risks

- It names technical, legal, privacy and launch risks.
- Each risk has a mitigation or an owner.

## Severity

| Severity | Use it when                                                      |
| -------- | ---------------------------------------------------------------- |
| blocker  | The area is missing, or the team cannot start without the answer. |
| major    | The area exists but is vague or has no evidence.                 |
| minor    | Wording, a missing detail or a small inconsistency.              |

## Verdict

- `not_ready`: one or more blockers.
- `needs_work`: no blocker and two or more major findings.
- `ready`: all other cases.
