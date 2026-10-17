---
name: endorsement-rules
description: Routing rules for midterm change requests. Use it to route each change and to set the premium impact.
---

# Endorsement rules

The values below are placeholders. Your underwriting team replaces them before the first run. The route is a proposal. A person approves every change in the policy admin system.

## Routes

| Change                     | `auto_approve` when                                         | `underwriter_review` when                                     | `decline_proposed` when                     |
| -------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------- |
| Add vehicle                | Private passenger or light truck, value below 75,000        | Heavy truck, value 75,000 or more, driver under 21             | Vehicle class excluded on the policy         |
| Remove vehicle             | Always                                                      | Open claim on the vehicle                                     | Never                                       |
| Add location               | Same state, same occupancy, total insured value below 2,000,000 | New state, new occupancy, or value 2,000,000 or more        | State outside the policy territory          |
| Remove location            | Always                                                      | Open claim at the location                                    | Never                                       |
| Change limits              | Decrease                                                    | Increase up to 2 times the current limit                      | Increase above 2 times the current limit    |
| Add additional insured     | Listed in `allowed_endorsements`                            | Not listed                                                    | Never                                       |
| Other                      | Never                                                       | Always                                                        | Never                                       |

## Effective date

- An effective date more than 30 days in the past is `underwriter_review`, whatever the change.
- An effective date after the policy expiration is `decline_proposed`.

## Premium impact

- `none`: remove an additional insured, a name correction.
- `decrease`: remove a vehicle or a location, decrease a limit.
- `increase`: add a vehicle or a location, increase a limit.
- `to_be_rated`: all other changes. Leave the amount empty. The rating step fills it.
