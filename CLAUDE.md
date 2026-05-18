# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A two-layer project:

1. **Mang Guabao marketing site** — a Vite + React app (JSX, no TypeScript) implementing the brand design system. The brand is a Filipino fusion bao concept ("Hawak ang Sarap"), Manila, Est. 2025. Mascot is **Mang G** — a smiling bao in a salakot hat with chopsticks. Source for everything brand-related is `docs/brand-system.md` (a copy of the design-bundle README); design tokens live in `src/styles/colors_and_type.css`; static reference cards/packaging/slides are served from `public/design-system/`.
2. **BMAD Method v6.7.1 scaffold** — the planning + implementation framework that lives in `_bmad/` and `_bmad-output/`. Used for PRDs, architecture, sprint plans, etc.

### App layout (the Vite project)

- `src/main.jsx` — React entry, mounts `<App />` and imports tokens + `global.css`.
- `src/App.jsx` — page shell composing Header → Hero → MenuSection → VoiceStrip → MascotSection → LocationsSection → Footer, with a floating `CartToast`.
- `src/components/` — one file per section + `primitives.jsx` (Eyebrow, SectionTitle, DisplayHeadline, Tagline, Pill, Button, MenuRow, EstBadge).
- `src/hooks/useViewport.js` — single source of truth for responsive breakpoints (`isMobile < 720`, `isTablet 720-1023`, `isDesktop ≥ 1024`). Every section uses it for stacking/sizing; **don't add MediaQuery CSS as a parallel system** — keep it in this hook.
- `src/styles/colors_and_type.css` — design tokens (CSS custom properties + semantic classes). Copied verbatim from the design bundle, do not diverge from it — if the brand changes, update both this and `public/design-system/colors_and_type.css`.
- `public/assets/` — brand SVGs the React app references (`/assets/mascot-mang-g.svg`, `/assets/wordmark-on-dark.svg`).
- `public/design-system/` — standalone reference site (its own `index.html`) with preview cards, packaging mocks, brand-deck slides, and the original source screenshots. Reachable in dev at `/design-system/`.

### Commands

| Command | What it does |
|---|---|
| `npm install` | Install React + Vite deps. |
| `npm run dev` | Vite dev server on http://localhost:5173 with HMR. |
| `npm run build` | Production build to `dist/`. |
| `npm run preview` | Serve the built `dist/` for smoke-testing. |

No tests or linter configured yet — add Vitest + ESLint if/when needed; don't pretend either is in place.

### Styling convention

Inline styles with CSS custom properties are the established pattern (mirrors the design-bundle prototypes). **Do not introduce Tailwind, CSS-in-JS libs, or CSS modules** — they'd fight the existing tokens. If a style genuinely needs a media query (e.g. `@media (prefers-reduced-motion)`), put it in `src/styles/global.css`.

## BMAD workflow phases

Skills are sequenced through four phases (see `_bmad/bmm/module-help.csv` for the full catalog with menu codes, dependencies, and `required` gates):

1. **`1-analysis`** — brainstorming, market/domain/technical research, product brief OR PRFAQ
2. **`2-planning`** — `bmad-prd` (**required**, preceded by product brief), then optional `bmad-create-ux-design`
3. **`3-solutioning`** — `bmad-create-architecture` → `bmad-create-epics-and-stories` → `bmad-check-implementation-readiness` (all **required** gates)
4. **`4-implementation`** — `bmad-sprint-planning` (**required**) → per-story cycle: `bmad-create-story` (create → validate) → `bmad-dev-story` → `bmad-code-review` → loop or `bmad-retrospective`

`anytime` skills (`bmad-document-project`, `bmad-quick-dev`, `bmad-correct-course`, `bmad-investigate`, tech-writer actions) run regardless of phase.

To orient mid-workflow, prefer invoking the `bmad-help` skill — it reads the manifest CSV, scans `_bmad-output/` for existing artifacts to detect completion, and recommends the next step. Don't reinvent that logic.

## Config resolution

BMAD config is a **four-layer TOML deep-merge** resolved by `_bmad/scripts/resolve_config.py` (requires Python 3.11+ for stdlib `tomllib`; no venv/pip needed):

1. `_bmad/config.toml` — installer-owned team
2. `_bmad/config.user.toml` — installer-owned user
3. `_bmad/custom/config.toml` — human team override (committed)
4. `_bmad/custom/config.user.toml` — human user override (gitignored)

Higher numbers win. Merge rules: scalars override, tables deep-merge, arrays-of-tables with shared `code`/`id` merge by that key, other arrays append. Same rules apply to per-skill customization via `resolve_customization.py`.

To add a custom agent or pin a value that survives reinstall, edit `_bmad/custom/config.toml` — example commented in that file. Never edit layers 1–2 directly.

Path placeholder `{project-root}` resolves to the repo root. `output_folder` is `_bmad-output/`; `project_knowledge` is `docs/`.

## Project-specific configuration

From `_bmad/config.toml` + `_bmad/config.user.toml`:

- **Project**: Guabao, English output, intermediate user skill level
- **User**: MrLee
- **Module installed**: `bmm` (the "BMad Method" planning + implementation module) + `core`
- **IDE**: `claude-code`

**Agent personas** (invokable via the `bmad-agent-*` skills) — keep these in mind when collaborating, as each has a distinct working style baked into its descriptor:

- 📊 **Mary** (Analyst) — evidence-grounded, Porter/Minto rigor
- 📋 **John** (PM) — Jobs-to-be-Done, short sharp "why?" questions
- 🎨 **Sally** (UX) — empathy + edge-case rigor, narrative-first
- 🏗️ **Winston** (Architect) — boring-tech bias, always lays out trade-offs
- 💻 **Amelia** (Dev) — strict red/green/refactor TDD, terminal-prompt brevity
- 📚 **Paige** (Tech Writer) — CommonMark/DITA/OpenAPI, diagrams over walls of text

## Conventions

- **Artifact destinations are config-driven**, not hardcoded. When producing BMAD outputs, resolve `planning_artifacts` / `implementation_artifacts` / `project_knowledge` from config rather than assuming paths.
- **Skills live in two places** but are the same content: `_bmad/<module>/<skill>/` is the installed source; `.claude/skills/<skill>/` is the Claude Code surface. The installer keeps them in sync — don't hand-edit either; use `bmad-customize` to author overrides.
- **PowerShell is the default shell** (Windows). Use `$null`, `$env:VAR`, and backticks for continuation; bash is available via the Bash tool when POSIX semantics are needed.
