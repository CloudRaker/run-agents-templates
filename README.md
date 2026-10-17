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

| Template                                                    | Category         | Connectors          | Triggers      |
| ----------------------------------------------------------- | ---------------- | ------------------- | ------------- |
| [Linear triage](templates/engineering/linear-triage)        | Engineering      | linear              | http, email   |
| [Incident summary](templates/engineering/incident-summary)  | Engineering      | pagerduty, sentry   | http          |
| [Lead qualifier](templates/sales/lead-qualifier)            | Sales            | hubspot, apollo     | http          |
| [Ticket helper](templates/support/ticket-helper)            | Customer support | intercom            | http, slack   |
| [Meeting actions](templates/operations/meeting-actions)     | Operations       | granola, asana      | schedule      |
| [Invoice extractor](templates/finance/invoice-extractor)    | Finance          | none                | http, email   |
| [Competitor watch](templates/research/competitor-watch)     | Research         | exa                 | schedule      |

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

The `connectors` list of `template.yml` and the `connectors` list of `agent.yml` must contain the same ids.

## Add a template

1. Copy a template folder to `templates/<category>/<new-id>/`.
2. Edit `template.yml`, `AGENTS.md` and `agent.yml`.
3. Install the tools: `bun install`.
4. Build the catalog: `bun run build`. This command writes `index.json`.
5. Commit the template folder and `index.json`. Open a pull request.

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
- `index.json` is not the same as the output of `bun run build`.

## License

[MIT](LICENSE)
