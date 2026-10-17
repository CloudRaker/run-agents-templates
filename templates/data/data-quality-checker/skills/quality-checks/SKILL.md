---
name: quality-checks
description: The data quality checklist. Use it to select the tables, the checks and the thresholds.
---

# Quality checks

Edit this checklist for your database. The table and column names below are placeholders.

## Null rates

| Table     | Column        | warn above | fail above |
| --------- | ------------- | ---------- | ---------- |
| customers | email         | 1%         | 5%         |
| orders    | customer_id   | 0%         | 1%         |
| orders    | total_amount  | 0%         | 1%         |

Query: `select count(*) filter (where <column> is null)::float / nullif(count(*), 0) from <table>`.

## Duplicates

| Table     | Key columns       | fail above |
| --------- | ----------------- | ---------- |
| customers | email             | 0          |
| orders    | external_id       | 0          |

Query: `select count(*) from (select <keys> from <table> group by <keys> having count(*) > 1) d`.

## Stale tables

| Table    | Timestamp column | warn after | fail after |
| -------- | ---------------- | ---------- | ---------- |
| orders   | created_at       | 24 hours   | 48 hours   |
| events   | occurred_at      | 2 hours    | 6 hours    |

Query: `select max(<column>) from <table>`. Compare with the run time.

## Row count drop

| Table  | Window            | fail when the count drops by more than |
| ------ | ----------------- | -------------------------------------- |
| orders | yesterday vs the same day last week | 50% |

## Rules

- Run only `select` queries. Add a `limit` to each query that returns rows.
- A check with an error is not a pass. Report it in `errors`.
