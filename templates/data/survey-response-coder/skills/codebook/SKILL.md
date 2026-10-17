---
name: codebook
description: The codebook for open survey answers. Use it to assign codes to each answer.
---

# Codebook

Edit this codebook for your survey. Keep the code ids the same as the options in `_schemas/survey_code.yml`.

| Code              | Use it when the answer mentions                                  |
| ----------------- | ---------------------------------------------------------------- |
| `pricing`         | Price, cost, value for money, plans, billing.                    |
| `ease_of_use`     | The product is easy or hard to use, confusing, intuitive.        |
| `performance`     | Speed, load time, lag, timeouts.                                 |
| `missing_feature` | A capability that the product does not have.                     |
| `bug`             | Something that does not work as expected.                        |
| `support`         | The support team, response time, documentation.                  |
| `onboarding`      | Setup, the first days, getting started.                          |
| `praise`          | A positive comment with no request.                              |
| `other`           | No code above matches.                                           |

## Rules

- An answer can have 1 to 3 codes.
- Use `other` only alone.
- Empty answers, "n/a" and "no comment" get no code.
- `sentiment`: the tone of the whole answer.
