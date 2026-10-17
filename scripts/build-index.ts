// Builds index.json from templates/<category>/<id>/.
// `bun run build` writes index.json. `bun run check` validates and fails when index.json is stale.
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { parse } from 'yaml'
import { z } from 'zod'

const ROOT = join(import.meta.dir, '..')
const TEMPLATES = join(ROOT, 'templates')
const INDEX = join(ROOT, 'index.json')
const README = join(ROOT, 'README.md')
const README_START = '<!-- templates:start -->'
const README_END = '<!-- templates:end -->'
const SOURCE = 'https://github.com/CloudRaker/run-agents-templates'
const MAX_FILE_BYTES = 256 * 1024
const ID = /^[a-z0-9][a-z0-9-]{0,62}$/
const ICON = /^[a-z0-9]+(-[a-z0-9]+)*$/
const ICON_URL = (name: string) =>
  `https://raw.githubusercontent.com/phosphor-icons/core/main/assets/regular/${name}.svg`
const CHECK = process.argv.includes('--check')

const CATEGORIES = {
  engineering: 'Engineering',
  sales: 'Sales',
  support: 'Customer support',
  operations: 'Operations',
  finance: 'Finance',
  research: 'Research',
  marketing: 'Marketing',
  product: 'Product',
  legal: 'Legal',
  hr: 'People',
  data: 'Data',
  healthcare: 'Healthcare',
  insurance: 'Insurance',
} as const

// Copy of the connector catalog ids of the Run console (connector-catalog.ts).
// Update this list when the console catalog changes.
const CONNECTOR_IDS = new Set(
  'notion box dropbox asana atlassian linear monday hubspot salesforce intercom canva stripe paypal github sentry airtable clickup todoist smartsheet teamwork wrike miro coda lucid egnyte granola fireflies otter fellow amplitude mixpanel posthog hex attio close clay chartmogul klaviyo customer-io apollo supabase gong motherduck pipedrive netlify cloudflare render circleci gitlab statsig pagerduty webflow sanity zapier make n8n exa tavily firecrawl microsoft-learn'.split(
    ' ',
  ),
)

const TemplateSchema = z.strictObject({
  name: z.string().trim().min(1).max(80),
  category: z.enum(Object.keys(CATEGORIES) as [keyof typeof CATEGORIES]),
  description: z.string().trim().min(1).max(119),
  what_it_does: z.string().trim().min(1),
  connectors: z
    .array(
      z.strictObject({
        id: z.string().refine((id) => CONNECTOR_IDS.has(id), 'not a catalog connector id'),
        required: z.boolean(),
        purpose: z.string().trim().min(1),
      }),
    )
    .default([]),
  icon: z.string().regex(ICON, 'a Phosphor icon name in kebab case'),
  tags: z.array(z.string()).optional(),
})

const TRIGGER_KEYS = ['http', 'email', 'slack', 'teams', 'phone', 'schedule', 'inbound'] as const

// ponytail: light check of the keys templates use. The Run push lint holds the full schema.
const AgentSchema = z.looseObject({
  name: z.string().trim().min(1).max(80).optional(),
  mode: z.enum(['zeroshot', 'turns']).optional(),
  model: z.looseObject({ id: z.string().optional() }).optional(),
  triggers: z
    .strictObject({
      http: z.boolean().optional(),
      email: z.boolean().optional(),
      slack: z.boolean().optional(),
      teams: z.boolean().optional(),
      phone: z.boolean().optional(),
      schedule: z
        .string()
        .refine((s) => s.trim().split(/\s+/).length === 5, 'five-field cron in UTC')
        .optional(),
      inbound: z.record(z.string(), z.unknown()).optional(),
    })
    .optional(),
  connectors: z.array(z.string().regex(ID)).optional(),
  data: z
    .strictObject({
      read: z.array(z.string()).optional(),
      write: z.array(z.string()).optional(),
      create_schemas: z.boolean().optional(),
    })
    .optional(),
  knowledge: z.array(z.string()).optional(),
  limits: z.record(z.string(), z.unknown()).optional(),
})

const listFiles = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? listFiles(join(dir, e.name)) : [join(dir, e.name)],
  )

const dirs = (dir: string) =>
  readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort()

const errors: string[] = []
const fail = (where: string, msg: string) => errors.push(`${where}: ${msg}`)
const issues = (e: z.ZodError) => e.issues.map((i) => `${i.path.join('.') || '(root)'} ${i.message}`).join('; ')

const templates = []
const seen = new Set<string>()

for (const category of dirs(TEMPLATES)) {
  for (const id of dirs(join(TEMPLATES, category))) {
    const dir = join(TEMPLATES, category, id)
    const path = relative(ROOT, dir).split(sep).join('/')
    const before = errors.length
    if (!ID.test(id)) fail(path, `id must match ${ID}`)
    if (seen.has(id)) fail(path, `duplicate id ${id}`)
    seen.add(id)

    const files = listFiles(dir)
      .map((f) => relative(dir, f).split(sep).join('/'))
      .filter((f) => f !== 'template.yml' && f !== 'icon.svg' && !f.endsWith('.DS_Store'))
      .sort()
    for (const f of files) {
      if (statSync(join(dir, f)).size > MAX_FILE_BYTES) fail(`${path}/${f}`, 'over 256 KB')
      if (f.split('/').pop() === 'template.yml') fail(`${path}/${f}`, 'template.yml is only allowed at the template root')
    }
    for (const required of ['AGENTS.md', 'agent.yml', 'template.yml']) {
      try {
        statSync(join(dir, required))
      } catch {
        fail(path, `missing ${required}`)
      }
    }
    if (errors.length > before) continue

    const meta = TemplateSchema.safeParse(parse(readFileSync(join(dir, 'template.yml'), 'utf8')))
    if (!meta.success) {
      fail(`${path}/template.yml`, issues(meta.error))
      continue
    }
    if (meta.data.category !== category) fail(`${path}/template.yml`, `category must be ${category}`)

    // ponytail: build downloads a missing icon.svg once; check stays offline and only wants the file.
    const iconFile = join(dir, 'icon.svg')
    if (!existsSync(iconFile)) {
      if (CHECK) {
        fail(path, 'missing icon.svg. Run `bun run build` to download it.')
      } else {
        const res = await fetch(ICON_URL(meta.data.icon))
        const svg = res.ok ? await res.text() : ''
        if (res.status !== 200 || !svg.trimStart().startsWith('<svg')) {
          fail(`${path}/template.yml`, `icon ${meta.data.icon}: download of ${ICON_URL(meta.data.icon)} failed (HTTP ${res.status})`)
        } else {
          writeFileSync(iconFile, svg)
        }
      }
    }

    let raw: unknown
    try {
      raw = parse(readFileSync(join(dir, 'agent.yml'), 'utf8'))
    } catch (e) {
      fail(`${path}/agent.yml`, `not valid YAML: ${(e as Error).message}`)
      continue
    }
    const agent = AgentSchema.safeParse(raw)
    if (!agent.success) {
      fail(`${path}/agent.yml`, issues(agent.error))
      continue
    }

    const inAgent = new Set(agent.data.connectors ?? [])
    const inMeta = new Set(meta.data.connectors.map((c) => c.id))
    for (const c of inAgent) if (!inMeta.has(c)) fail(path, `agent.yml connector ${c} missing in template.yml`)
    for (const c of inMeta) if (!inAgent.has(c)) fail(path, `template.yml connector ${c} missing in agent.yml`)

    const t = agent.data.triggers
    const triggers = t ? TRIGGER_KEYS.filter((k) => t[k] !== undefined && t[k] !== false) : ['http']

    templates.push({
      id,
      name: meta.data.name,
      category,
      description: meta.data.description,
      icon: meta.data.icon,
      what_it_does: meta.data.what_it_does,
      connectors: meta.data.connectors,
      triggers,
      mode: agent.data.mode ?? 'zeroshot',
      path,
      files,
    })
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}

const used = new Set(templates.map((t) => t.category))
const body = {
  version: 1,
  source: SOURCE,
  categories: Object.entries(CATEGORIES)
    .filter(([id]) => used.has(id))
    .map(([id, name]) => ({ id, name })),
  templates,
}

let previous: { generated_at?: string } | null = null
try {
  previous = JSON.parse(readFileSync(INDEX, 'utf8'))
} catch {}
const strip = (o: object | null) => JSON.stringify(o && { ...o, generated_at: undefined })
const fresh = previous !== null && strip(previous) === strip(body)

// The README template list between the markers is generated from the same data.
const cell = (s: string) => s.replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim()
const section = body.categories
  .map(({ id, name }) => {
    const rows = templates
      .filter((t) => t.category === id)
      .map((t) => {
        const connectors = t.connectors.map((c) => c.id).join(', ') || 'none'
        return `| [${cell(t.name)}](${t.path}) | ${cell(t.description)} | ${connectors} | ${t.triggers.join(', ')} |`
      })
    return [`### ${name}`, '', '| Template | Description | Connectors | Triggers |', '| --- | --- | --- | --- |', ...rows].join('\n')
  })
  .join('\n\n')
const readme = readFileSync(README, 'utf8')
const from = readme.indexOf(README_START)
const to = readme.indexOf(README_END)
if (from < 0 || to < from) {
  console.error(`README.md must contain ${README_START} and ${README_END}.`)
  process.exit(1)
}
const nextReadme = `${readme.slice(0, from + README_START.length)}\n${section}\n${readme.slice(to)}`
const trimEnds = (t: string) => t.replace(/[ \t]+$/gm, '')
const readmeFresh = trimEnds(readme) === trimEnds(nextReadme)

if (CHECK) {
  if (!fresh) {
    console.error('index.json is stale. Run `bun run build` and commit the result.')
    process.exit(1)
  }
  if (!readmeFresh) {
    console.error('The template list in README.md is stale. Run `bun run build` and commit the result.')
    process.exit(1)
  }
  console.log(`ok: ${templates.length} templates, ${body.categories.length} categories`)
} else {
  // Keep generated_at when nothing else changed, so a rebuild makes no diff.
  const generated_at = fresh && previous?.generated_at ? previous.generated_at : new Date().toISOString()
  const index = { version: 1, generated_at, ...body }
  writeFileSync(INDEX, `${JSON.stringify(index, null, 2)}\n`)
  if (!readmeFresh) writeFileSync(README, nextReadme)
  console.log(`wrote index.json and README.md: ${templates.length} templates`)
}
