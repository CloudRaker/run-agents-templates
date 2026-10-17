---
name: issue-labels
description: Labeling and priority rubric for new issues. Use it to select labels and a priority.
---

# Issue labels

## Type labels (select one)

| Label         | Use it when                                                      |
| ------------- | ---------------------------------------------------------------- |
| `bug`         | The product does not work as the documentation or the UI states. |
| `feature`     | The reporter asks for a new capability.                          |
| `improvement` | The reporter asks for a change to a capability that works.       |
| `question`    | The reporter asks how something works. No change is necessary.   |

## Area labels (select zero or more)

Select the area labels that the team already uses. Use the words in the issue to find the area, for example "login" for an authentication area. If no area matches, select no area label.

## Priority

| Priority | Use it when                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| urgent   | Production is down, data is lost, or there is a security problem.            |
| high     | A main workflow fails for many users, and no workaround exists.              |
| medium   | A workflow fails for some users, or a workaround exists.                     |
| low      | A small problem, a cosmetic problem, or a feature request.                   |
| none     | You cannot decide. Missing details prevent a decision.                       |

## Rules

- A security report is always `urgent`. Do not copy secret values into comments.
- A `question` is never higher than `low`.
- Do not set `urgent` from words such as "ASAP" alone. Look for the impact.
