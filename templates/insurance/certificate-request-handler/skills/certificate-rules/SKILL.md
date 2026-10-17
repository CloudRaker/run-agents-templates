---
name: certificate-rules
description: Rules for certificate of insurance requests. Use it to check each requested item and to select the decision.
---

# Certificate rules

The values below are placeholders. Your service team replaces them before the first run.

## Endorsements

A requested endorsement is `ok` only when the policy record lists it in `allowed_endorsements`.

| Endorsement               | Not on the policy             |
| ------------------------- | ----------------------------- |
| Additional insured        | `needs_approval` (blanket AI may need a form review) |
| Waiver of subrogation     | `needs_approval`              |
| Primary and noncontributory | `needs_approval`            |
| Per project aggregate     | `fails`: needs an endorsement first |
| Loss payee                | `needs_approval`              |

## Limits

- A requested limit at or below the policy limit is `ok`.
- A requested limit above the policy limit, when an umbrella policy covers the gap, is `ok`. Name the umbrella.
- A requested limit above the policy limit and the umbrella together is `fails`.
- A requested limit above 5,000,000 on any line is `needs_approval` (underwriter approval).

## Coverage lines

- A requested line with no active policy for the named insured is `fails`.
- A policy that expires in fewer than 15 days is `needs_approval`.

## Other rules

- Wording that changes policy terms, for example "notice of cancellation 30 days" or "insurer guarantees", is `needs_approval`.
- A holder in a country outside the policy territory is `needs_approval`.

## Decision

- `cannot_issue` when one item `fails`.
- `needs_approval` when no item fails and one item needs approval.
- `can_issue` when all items are `ok`.
