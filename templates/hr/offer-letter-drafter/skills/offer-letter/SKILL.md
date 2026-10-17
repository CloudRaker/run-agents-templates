---
name: offer-letter
description: The offer letter template. Use it as the text of each offer letter.
---

# Offer letter template

Edit this template for your company. Keep the `{{placeholders}}`. Ask your legal team to approve the text.

---

**Example Company Inc.**
100 Example Street, Example City

{{today}}

{{candidate_name}}
{{candidate_address}}

Dear {{candidate_first_name}},

We are pleased to offer you the position of **{{role}}** at Example Company Inc. You will report to {{manager}}.

**Start date.** Your first day is {{start_date}}.

**Type of employment.** {{employment_type}}.

**Compensation.** Your base salary is {{salary}} per {{period}}, paid on the regular payroll schedule.

{{extras}}

**Benefits.** You can join the company benefit plans, subject to the terms of each plan.

**Conditions.** This offer depends on a satisfactory background check and proof of the right to work.

**Acceptance.** To accept, sign this letter and return it by {{expires_on}}.

We look forward to working with you.

Sincerely,

{{signer_name}}, {{signer_title}}

Accepted: ______________________  Date: __________

---

## Default values

- `signer_name`: Head of People. Edit this.
- `signer_title`: Head of People. Edit this.
- `expires_on`: 7 days after today when the input does not give it.
- Omit the `{{extras}}` paragraph when the input has no extras.
