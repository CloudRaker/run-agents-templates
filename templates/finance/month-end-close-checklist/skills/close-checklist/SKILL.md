---
name: close-checklist
description: Revenue close checklist for one month. Use it to check each item and to decide if it is done or a gap.
---

# Close checklist

Check each item for the closed month. All dates are UTC.

| Id                    | Check                                                                         | Gap when                                                                  |
| --------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `revenue_recognized`  | Paid invoices of the month. Sum by currency.                                  | A paid invoice has no service period, or the period is outside the month. |
| `open_invoices`       | Invoices issued in the month that are still open.                             | An invoice is open more than 30 days after its due date.                  |
| `refunds`             | Refunds created in the month. Sum by currency.                                | A refund has no reason, or it is larger than 1000 in its currency.        |
| `disputes`            | Disputes opened or still open in the month.                                   | A dispute needs a response, or the evidence due date is in 7 days or less. |
| `failed_payments`     | Charges and invoice payments that failed in the month.                        | A customer has a failed payment and no successful retry.                  |
| `payouts`             | Payouts of the month and the balance transactions in each payout.             | A payout failed, or a payout is still pending after 5 days.               |
| `chartmogul_variance` | Optional. Stripe revenue compared with ChartMogul revenue for the month.      | The difference is more than 1 percent.                                    |

## Rules

- An item is `done` when you checked it and found no gap.
- An item is `gap` when one record or more matches the gap rule. List the record ids.
- An item is `not_checked` when the data is not available, for example ChartMogul is not connected.
- Do not change the thresholds in a run. Edit this file to change them for your company.
