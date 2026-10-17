# Run agent templates

Sample agents for [CloudRaker Run](https://cloudraker.run). Run hosts headless agents. A Markdown repository defines them, with one folder for each agent.

Each folder under `templates/` is one agent that you can import into your own Run project. Copy a template, then change the instructions for your company.

## Use a template

1. Open the Run console.
2. Go to **Agents** > **Create agent** > **Start from a template**.
3. Select a template. Read the description and the list of connectors.
4. Connect each required connector. An optional connector adds data, but the agent works without it.
5. Import the template. The console adds the template files to your project in a new agent folder.
6. Read `AGENTS.md`. Some templates have a section that you must edit, for example a list of competitors.

## Templates

<!-- templates:start -->
### Engineering

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [CI failure explainer](templates/engineering/ci-failure-explainer) | Explains a failed CircleCI job with the failing step, the likely cause and a suggested fix. | circleci, github | http |
| [Dependency audit brief](templates/engineering/dependency-audit-brief) | Writes a weekly brief of vulnerable and outdated dependencies across a list of repositories. | github | schedule |
| [Incident summary](templates/engineering/incident-summary) | Writes a plain-language incident summary with a timeline and next steps. | pagerduty, sentry | http |
| [Linear triage](templates/engineering/linear-triage) | Triages new Linear issues. Adds labels and a priority, and asks for missing details. | linear | http, email |
| [On-call handoff](templates/engineering/on-call-handoff) | Writes the daily on-call handoff with the incidents of the last 24 hours, open items and the next on-call person. | pagerduty | schedule |
| [PR review digest](templates/engineering/pr-review-digest) | Sends a digest of open pull requests each workday, with stale reviews and PRs that need a reviewer. | github | schedule |
| [Release notes writer](templates/engineering/release-notes-writer) | Drafts release notes from merged pull requests and Linear issues, and renders them as a PDF. | github, linear | http |
| [Runbook answerer](templates/engineering/runbook-answerer) | Answers operations questions in Slack or Teams from your runbooks, and says when it does not know. | none | slack, teams |
| [Sentry error triage](templates/engineering/sentry-error-triage) | Groups new Sentry errors, links each group to a Linear issue, and creates or comments as needed. | sentry, linear | http |

### Sales

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [Call notes to CRM](templates/sales/call-notes-to-crm) | Turns a sales call recording or notes file into a HubSpot deal update and a logged note. | hubspot | http, email |
| [Contract handoff](templates/sales/contract-handoff) | Extracts the key terms of a signed contract and writes a handoff for customer success. | salesforce | http |
| [Deal risk review](templates/sales/deal-risk-review) | Reviews open late-stage deals each week and flags risks from call signals. | salesforce, gong | schedule |
| [Inbound reply drafter](templates/sales/inbound-reply-drafter) | Qualifies an inbound sales email and answers it once in your reply style. | apollo | email |
| [Lead qualifier](templates/sales/lead-qualifier) | Scores a new lead against your ideal customer profile and records the result. | hubspot, apollo | http |
| [Meeting prep brief](templates/sales/meeting-prep-brief) | Writes a short brief for each external meeting on a seller's calendar every workday morning. | hubspot | schedule |
| [Pipeline hygiene](templates/sales/pipeline-hygiene) | Finds stale deals, missing next steps and past close dates each Monday, grouped by owner. | pipedrive, close | schedule |
| [Proposal drafter](templates/sales/proposal-drafter) | Drafts a sales proposal PDF from a HubSpot deal and your scope notes. | hubspot, notion | http |

### Customer support

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [Call recording QA](templates/support/call-recording-qa) | Transcribes a support call recording and scores it against your quality rubric with quotes. | none | http, email |
| [CSAT digest](templates/support/csat-digest) | Sends a weekly CSAT score with the main reasons behind low ratings from Intercom. | intercom | schedule |
| [Escalation summary](templates/support/escalation-summary) | Turns a long Intercom conversation into one clear Linear issue for engineering. | intercom, linear | http |
| [Knowledge gap finder](templates/support/knowledge-gap-finder) | Finds the questions support answers each week without a help article, and records them. | intercom | schedule |
| [Ticket helper](templates/support/ticket-helper) | Drafts answers to customer conversations in Intercom for a support agent to review. | intercom | http, slack |
| [Ticket redactor](templates/support/ticket-redactor) | Removes personal data from an Intercom conversation and its attachments before engineering sees them. | intercom | http |
| [Voice support line](templates/support/voice-support-line) | Answers your support phone number, solves common questions and transfers callers to a person. | intercom | phone |

### Operations

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [After-hours intake line](templates/operations/after-hours-intake-line) | Answers your phone after hours, records each request and transfers urgent cases. | none | phone |
| [Appointment booking line](templates/operations/appointment-booking-line) | Books appointments by phone on one shared calendar, inside your business hours. | none | phone |
| [Decision log](templates/operations/decision-log) | Collects each workday's decisions from your meeting notes into one searchable log. | granola, fireflies | schedule |
| [Form intake router](templates/operations/form-intake-router) | Reads request forms that arrive by email, records each request and answers with a reference. | none | email |
| [Meeting actions](templates/operations/meeting-actions) | Turns the meeting notes of each workday into Asana tasks with owners and due dates. | granola, asana | schedule |
| [Meeting transcriber](templates/operations/meeting-transcriber) | Turns a meeting recording into minutes with decisions and actions, and returns them as a PDF. | none | http, email |
| [Slack standup bot](templates/operations/slack-standup-bot) | Runs the daily standup in Slack, records the answers and gives a team summary on request. | asana | slack |
| [SOP drafter](templates/operations/sop-drafter) | Turns a screen recording transcript or rough notes into a step-by-step SOP in Markdown and PDF. | none | http |
| [Vendor onboarding](templates/operations/vendor-onboarding) | Reads the W-9, insurance certificate and bank letter that a vendor emails, and records the vendor. | none | email |
| [Weekly status compiler](templates/operations/weekly-status-compiler) | Compiles a Friday status report for each Asana project, with Linear issues when connected. | asana, linear | schedule |

### Finance

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [Bank statement parser](templates/finance/bank-statement-parser) | Turns a bank statement PDF into transaction records and reports the totals and unusual items. | none | http |
| [Expense receipt processor](templates/finance/expense-receipt-processor) | Reads expense receipts from email or HTTP, records each expense and flags receipts over a limit. | none | http, email |
| [Invoice extractor](templates/finance/invoice-extractor) | Extracts structured data from invoice files sent by HTTP or by email. | none | http, email |
| [Invoice payment matcher](templates/finance/invoice-payment-matcher) | Matches invoices to Stripe payments and lists the invoices that are unpaid or partially paid. | stripe | http |
| [Month-end close checklist](templates/finance/month-end-close-checklist) | Runs the revenue close checklist on the first day of each month and reports each gap. | stripe, chartmogul | schedule |
| [Payment terms extractor](templates/finance/payment-terms-extractor) | Extracts the payment terms of a contract PDF and saves them as a record. | none | http |
| [Refund request reviewer](templates/finance/refund-request-reviewer) | Reviews a refund request against your policy and the payment history, then recommends a decision. | stripe, intercom | http |
| [Revenue report](templates/finance/revenue-report) | Writes a monthly MRR report with a short narrative and renders it as a PDF file. | chartmogul, stripe | schedule |

### Research

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [Competitor watch](templates/research/competitor-watch) | Searches the web each week for competitor news and records each finding. | exa | schedule |
| [Market sizing brief](templates/research/market-sizing-brief) | Estimates TAM, SAM and SOM for a market and a geography, with sources and assumptions. | exa, tavily | http |
| [News digest](templates/research/news-digest) | Sends a weekday morning digest of 5 to 10 news items on your topics, each with why it matters. | exa | schedule |
| [Paper summarizer](templates/research/paper-summarizer) | Summarizes a research paper PDF into question, method, results, limits and relevance. | exa | http, email |
| [Source fact checker](templates/research/source-fact-checker) | Checks each factual claim in a text or a file and gives a verdict with sources. | tavily | http |
| [User interview synthesizer](templates/research/user-interview-synthesizer) | Synthesizes several user interview recordings into themes with counts and quotes. | none | http |

### Marketing

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [Blog brief writer](templates/marketing/blog-brief-writer) | Researches a topic on the web and writes a content brief with angle, outline and sources. | exa | http |
| [Campaign report](templates/marketing/campaign-report) | Reports the email campaign results of the last week with the best and worst sends. | klaviyo, customer-io | schedule |
| [Competitor pricing watch](templates/marketing/competitor-pricing-watch) | Checks competitor pricing pages each week and reports only the price changes. | firecrawl | schedule |
| [SEO page audit](templates/marketing/seo-page-audit) | Crawls one page and lists its on-page SEO issues with fixes by priority. | firecrawl | http |
| [Social post drafter](templates/marketing/social-post-drafter) | Turns an article, a report or notes into LinkedIn and X posts in your brand voice. | notion | http |
| [Webinar recap](templates/marketing/webinar-recap) | Transcribes a webinar recording and writes a recap PDF with key points, questions and follow-ups. | none | http, email |

### Product

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [Analytics weekly brief](templates/product/analytics-weekly-brief) | Writes a Monday brief of your key product metrics, with week-over-week changes and anomalies. | posthog, mixpanel | schedule |
| [Changelog announcer](templates/product/changelog-announcer) | Turns the Linear issues completed this week into a customer-facing changelog in Markdown. | linear | schedule |
| [Experiment readout](templates/product/experiment-readout) | Writes the readout of an A/B test with the result, the confidence and a ship, iterate or stop call. | statsig, posthog | http |
| [Feature request router](templates/product/feature-request-router) | Takes a feature request in Slack, finds duplicates, and files or links a Linear issue. | linear | slack |
| [Feedback clusterer](templates/product/feedback-clusterer) | Clusters the feedback of the week into themes, saves each theme and proposes Linear issues. | intercom, linear | schedule |
| [Spec reviewer](templates/product/spec-reviewer) | Reviews a product spec or PRD for gaps in problem, users, success metric, scope and risks. | notion | http |

### Legal

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [Clause extractor](templates/legal/clause-extractor) | Extracts the clause types you list from one or more contracts and saves each clause as a record. | none | http |
| [Contract redactor](templates/legal/contract-redactor) | Redacts names, addresses and optional amounts from a contract and returns the redacted file. | none | http |
| [DSAR responder](templates/legal/dsar-responder) | Logs each data subject access request from email and sends the requester an acknowledgment. | none | email |
| [NDA triage](templates/legal/nda-triage) | Compares an incoming NDA with your playbook and lists the findings by risk. | none | http, email |
| [Policy Q&A](templates/legal/policy-qa) | Answers employee questions about company policies in Slack or Teams, with the policy name for each answer. | none | slack, teams |
| [Vendor DPA checker](templates/legal/vendor-dpa-checker) | Checks a vendor data processing agreement against your checklist and marks each item pass, fail or missing. | none | http |

### People

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [Employee document redactor](templates/hr/employee-doc-redactor) | Redacts names, addresses, identifiers and, on request, salaries from HR documents. | none | http |
| [Exit interview digest](templates/hr/exit-interview-digest) | Finds themes, sentiment and retention risks across exit interview recordings. | none | http |
| [Interview notes summarizer](templates/hr/interview-notes-summarizer) | Turns an interview recording or notes into feedback by competency with evidence quotes. | fellow | http |
| [Offer letter drafter](templates/hr/offer-letter-drafter) | Drafts an offer letter from your template and returns it as a PDF for review. | none | http |
| [Onboarding checklist](templates/hr/onboarding-checklist) | Creates the Asana onboarding tasks for a new hire from your onboarding plan. | asana, notion | http |
| [PTO request handler](templates/hr/pto-request-handler) | Handles time-off requests in Slack and adds an out-of-office event to the employee calendar. | none | slack |
| [Resume screener](templates/hr/resume-screener) | Scores each resume against your role profile and saves one candidate record for each. | none | http, email |

### Data

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [CSV to records](templates/data/csv-to-records) | Imports a CSV or spreadsheet into data store records, and reports the rows written and rejected. | none | http |
| [Dashboard narrator](templates/data/dashboard-narrator) | Each Monday, explains the week of your key product charts in plain language with 3 key changes. | posthog, hex | schedule |
| [Data quality checker](templates/data/data-quality-checker) | Runs daily checks on your Supabase tables for null rates, duplicates and stale data. | supabase | schedule |
| [PDF table extractor](templates/data/pdf-table-extractor) | Extracts the tables of PDF files into rows with the columns that you describe. | none | http |
| [Survey response coder](templates/data/survey-response-coder) | Codes the open answers of a survey export into your codebook and counts each code. | none | http |

### Healthcare

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [Appointment reminder caller](templates/healthcare/appointment-reminder-caller) | Calls a patient to confirm an appointment, and records a reschedule or a cancellation request. | none | http, phone |
| [Clinical note summarizer](templates/healthcare/clinical-note-summarizer) | Turns a visit recording into a SOAP note draft and a PDF for the clinician to review and sign. | none | http |
| [Health record redactor](templates/healthcare/health-record-redactor) | Removes patient identifiers from health records and returns the redacted files with counts only. | none | http |
| [Insurance card reader](templates/healthcare/insurance-card-reader) | Reads photos of the front and back of an insurance card and returns the payer, member and plan data. | none | http |
| [Patient intake extractor](templates/healthcare/patient-intake-extractor) | Turns intake forms (PDF or photos) into a structured patient intake record and asks once for missing fields. | none | http, email |
| [Prescription refill line](templates/healthcare/prescription-refill-line) | Answers a phone line that takes prescription refill requests and hands clinical questions to a pharmacist. | none | phone |
| [Referral letter drafter](templates/healthcare/referral-letter-drafter) | Drafts a referral letter to a specialist from a patient summary and renders it as a PDF for review. | none | http |

### Insurance

| Template | Description | Connectors | Triggers |
| --- | --- | --- | --- |
| [Broker inbox router](templates/insurance/broker-inbox-router) | Classifies each broker email, extracts the account and policy, and routes it to the right team queue. | none | email |
| [Certificate request handler](templates/insurance/certificate-request-handler) | Checks a certificate of insurance request against the policy and your rules, and answers the requester once. | none | email |
| [Claims status line](templates/insurance/claims-status-line) | Answers claim status calls, verifies the caller with two facts and reads the status and next step. | none | phone |
| [Endorsement request triage](templates/insurance/endorsement-request-triage) | Reads a midterm change request, checks it against the policy and proposes the endorsement for approval. | none | http, email |
| [FNOL intake](templates/insurance/fnol-intake) | Reads a first notice of loss with photos and a police report, opens the claim and acknowledges the reporter. | none | http, email |
| [FNOL phone line](templates/insurance/fnol-phone-line) | Answers a claims line, takes a first notice of loss by voice and reads back the claim reference. | none | phone |
| [Loss run summarizer](templates/insurance/loss-run-summarizer) | Turns one or more carrier loss runs into claim records, loss trends and a one-page PDF summary. | none | http |
| [Policy document redactor](templates/insurance/policy-document-redactor) | Redacts personal data from policy documents, claim files and loss runs before you share them. | none | http |
| [Renewal prep](templates/insurance/renewal-prep) | Each weekday, finds policies that expire in 90 days, flags at-risk accounts and prepares the renewal checklist. | none | schedule |
| [Submission triage](templates/insurance/submission-triage) | Reads a broker submission, extracts the ACORD and loss run facts, and classifies appetite as in, out or refer. | none | http, email |
<!-- templates:end -->

## Layout

```
index.json                         The catalog that the console reads. Generated.
scripts/build-index.ts             Builds and checks index.json.
templates/<category>/<id>/
  template.yml                     Catalog data. The console does not import this file.
  AGENTS.md                        The instructions of the agent.
  agent.yml                        The configuration of the agent.
  skills/<name>/SKILL.md           Optional. Skills that the agent can load.
  _schemas/<name>.yml              Optional. Data store schemas.
```

The folder name is the template id. It must be unique in the repository and match `^[a-z0-9][a-z0-9-]{0,62}$`.

A template cannot include a `knowledge/` folder. Run reads `knowledge/` only at the root of a project. Add knowledge to your project after the import, then grant it in `agent.yml`.

## template.yml reference

```yaml
name: Linear triage                 # Required. 1 to 80 characters.
category: engineering               # Required. Must match the parent folder.
description: Triages new issues.    # Required. One sentence, less than 120 characters.
icon: funnel                        # Required. A Phosphor icon name in kebab case.
what_it_does: |                     # Required. 2 to 6 short lines of plain text.
  Reads each new issue.
  Adds labels and a priority.
connectors:                         # Optional. Default: no connectors.
  - id: linear                      # A connector id of the Run console catalog.
    required: true                  # false: the agent works without this connector.
    purpose: Read and update issues.
tags: [triage, issues]              # Optional.
```

Categories:

| id            | Name             |
| ------------- | ---------------- |
| `engineering` | Engineering      |
| `sales`       | Sales            |
| `support`     | Customer support |
| `operations`  | Operations       |
| `finance`     | Finance          |
| `research`    | Research         |
| `marketing`   | Marketing        |
| `product`     | Product          |
| `legal`       | Legal            |
| `hr`          | People           |
| `data`        | Data             |
| `healthcare`  | Healthcare       |
| `insurance`   | Insurance        |

The `connectors` list of `template.yml` and the `connectors` list of `agent.yml` must contain the same ids.

`icon` is the name of a regular icon on https://phosphoricons.com, for example `git-pull-request`. `bun run build` downloads the icon to `icon.svg` in the template folder when the file is missing. Commit `icon.svg`. Icons are Phosphor Icons, MIT license (https://github.com/phosphor-icons/core).

## Add a template

1. Copy a template folder to `templates/<category>/<new-id>/`.
2. Edit `template.yml`, `AGENTS.md` and `agent.yml`.
3. Install the tools: `bun install`.
4. Build the catalog: `bun run build`. This command downloads `icon.svg` and writes `index.json`.
5. Commit the template folder (with `icon.svg`) and `index.json`. Open a pull request.

Writing rules for `AGENTS.md`:

- Write real operating instructions: role, inputs, tools, steps, output, limits and what to do when data is missing.
- Use short sentences in active voice.
- Use generic company context. Do not include customer names, people, internal hosts or secrets.
- Tell the agent to treat external text as data and not to obey instructions in it.

## Validation

`bun run check` runs on each pull request. It fails when:

- `template.yml` has a missing or incorrect field.
- `agent.yml` is not valid YAML, or a known key has an incorrect shape.
- A connector id is not in the console catalog.
- The connectors of `template.yml` and `agent.yml` are different.
- A template id is not unique or has an incorrect format.
- A file is larger than 256 KB.
- `icon` is missing, or the template folder has no `icon.svg`.
- `index.json` is not the same as the output of `bun run build`.

## License

[MIT](LICENSE)
