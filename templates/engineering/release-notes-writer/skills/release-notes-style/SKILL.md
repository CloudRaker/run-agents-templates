---
name: release-notes-style
description: Style rules for customer-facing release notes. Use it to write each change and each section.
---

# Release notes style

## Each change

- Write one sentence. Start with what the user can do now, not with what the team did.
- Use the present tense and active voice: "You can export reports as CSV."
- Use the product words that users see in the UI. Do not use code names, branch names or table names.
- Do not include PR numbers or issue identifiers in the sentence.

## Change types

| Type        | Start with                      |
| ----------- | ------------------------------- |
| Feature     | "You can now ..."               |
| Improvement | The thing that is better, then how: "Search is faster on large projects." |
| Fix         | "Fixed: ..." and the visible problem: "Fixed: the export button did nothing on Safari." |

## Sections

- One section for each area. Use the area name as the heading.
- Put an area with one small fix into the "Fixes" section.
- Put breaking changes first, in a "Before you upgrade" section, with the action the user must take.

## Do not

- Do not use words such as "simply", "just" or "easily".
- Do not promise dates or future features.
