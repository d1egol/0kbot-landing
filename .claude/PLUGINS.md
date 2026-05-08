# 0kbot Landing — Catálogo de plugins Claude Code

**Última actualización**: 2026-05-08 (Fase 2 cosecha plan v3)

> **Cómo usar**: cuando una tarea concreta aparece en una sesión Claude Code, busca aquí primero el agent/skill/command que ya está disponible vía plugin. Reutilizar antes que construir.

---

## Vercel plugin (P0 — cosecha prioritaria)

3 agents + 25 skills + 5 commands. Aplicable directamente a este repo Next.js.

### Agents disponibles

| Agent | Cuándo usar |
|---|---|
| `ai-architect` | Diseñar features que integran LLM en la landing (chat, asistentes, rec engines). Tier 1-2 para diseño |
| `deployment-expert` | **Cuando algo falla en Vercel deploy**. Tiene árbol de decisión completo: build phase failures, OOM, TypeScript discrepancies, monorepo, env vars, runtime errors. Primer agent a invocar ante cualquier deploy rojo |
| `performance-optimizer` | Optimización Web Vitals, bundle size, hidratación, Streaming. Combinar con chrome-devtools para auditoría real |

### Skills clave para esta landing

| Skill | Trigger | Caso de uso |
|---|---|---|
| `next-upgrade` | Diego pide upgrade a Next 16/17, o `package.json` muestra `next@<x>` desactualizado | Sigue migration guides oficiales y ejecuta codemods. Contexto: Master Plan v2 dice Fase 8 = upgrade Next 16 cierra Issue #13 |
| `runtime-cache` | Implementar cache key-value en API routes | Detecta automáticamente uso directo de Redis/ioredis y sugiere `@upstash/redis` (compatible serverless) |
| `nextjs` | Cualquier pregunta sobre App Router, Server Components, Server Actions | Best practices oficiales |
| `next-cache-components` | `unstable_cache`, `revalidatePath`, `revalidateTag`, fetch cache | Patrones de cache framework-level |
| `react-best-practices` | Refactor de componentes, hidratación, hooks | Guías oficiales React |
| `routing-middleware` | Middleware Edge, redirects, rewrites, A/B testing | Pattern matching avanzado |
| `auth` | Implementar login/signup en landing (si se requiere área cliente) | Patrones serverless-first |
| `env-vars` | Diego pregunta por env vars no expuestas, o `next build` falla por env faltante | Setup correcto Vercel + local |
| `deployments-cicd` | Configurar GitHub → Vercel CI, preview branches, production gates | Pipeline best practices |
| `shadcn` | Agregar componentes UI shadcn/ui | Catálogo + install commands |
| `turbopack` | Build dev rápido, troubleshooting Turbopack | Diagnóstico problemas dev mode |
| `verification` | Pre-commit checks, build validation | Gates antes de push |

### Skills aplicación selectiva

Estas skills aplican si el caso de uso aparece, pero hoy el repo no las usa:
- `ai-gateway`, `ai-sdk`, `chat-sdk`: solo si la landing integra LLM/chat
- `vercel-storage`: solo si se necesita Postgres/KV serverless (hoy usamos Supabase)
- `vercel-functions`, `vercel-sandbox`: API routes serverless avanzadas
- `marketplace`: integraciones del Vercel Marketplace
- `bootstrap`: setup proyecto desde cero (no aplica a repo existente)
- `next-forge`: starter premium opinionated (no aplica)

### Commands disponibles

| Command | Función |
|---|---|
| `/vercel:deploy` | Deploy desde CLI con guardrails |
| `/vercel:env` | Gestión env vars Vercel |
| `/vercel:status` | Status deployments actuales |
| `/vercel:bootstrap` | Setup proyecto Vercel-ready |
| `/vercel:marketplace` | Búsqueda en marketplace |

---

## chrome-devtools-mcp plugin (P0 — cosecha prioritaria)

6 skills + MCP server con tools de browser automation.

| Skill | Trigger | Caso de uso |
|---|---|---|
| `a11y-debugging` | Pre-release, audit accesibilidad | **Lighthouse a11y + accessibility tree analysis**. Workflow: snapshot → audit → fix por prioridad WCAG. Combinar con `lighthouse-gate` skill propio |
| `debug-optimize-lcp` | Web Vitals reportes con LCP > 2.5s | Identifica recurso bloqueante, sugiere preload/priority hints, defer scripts |
| `memory-leak-debugging` | Browser cuelga después de uso prolongado | Heap snapshots, retained DOM nodes, listeners no removidos |
| `chrome-devtools` | Diagnóstico general performance/network | Network throttling, JS coverage, layout thrashing |
| `chrome-devtools-cli` | Automatización chrome-devtools por CLI | Para integración CI |
| `troubleshooting` | Issues genéricos no clasificados | Triage inicial |

**MCP tools disponibles** (vía plugin server): `browser_click`, `browser_navigate`, `browser_snapshot`, `browser_take_screenshot`, `browser_console_messages`, `browser_network_requests`, `browser_evaluate`, etc. Útiles para Playwright-style automation desde Claude Code directo.

---

## Otros plugins (uso ocasional)

| Plugin | Cuándo aplica |
|---|---|
| **github** (MCP) | Issue/PR/repo management vía Claude Code natural. Útil cuando Diego pide "crea issue X" o "lista PRs abiertos" |
| **commit-commands** (4 commands) | `/commit`, `/commit-push-pr`, `/clean_gone`, `/bootstrap`. Útil para flujo git diario |
| **supabase** (2 skills + MCP) | Si tocamos backend Supabase de leads (RLS, postgres-best-practices) |
| **playwright** (MCP) | Browser automation E2E si se requiere testing |
| **figma** (9 skills) | NO aplicable hoy (landing no usa Figma como source of truth). P3 |

---

## Plugins descartados (no aplicables al landing)

- **data** (30 skills Airflow/dbt/Astronomer): requiere data warehouse + INFORMATION_SCHEMA. Overkill para nuestro stack Supabase/CSV. Útil solo si futuro: Airflow + warehouse
- **agent-sdk-dev**, **skill-creator**, **claude-code-setup**: meta-tools, uso ocasional global
- **autofix-bot**: bajo uso documentado
- **zapier**: si se automatiza algún flujo no-code (lead → CRM, etc.)
- **asana**: Diego no usa Asana

---

## Flujo recomendado

1. **Antes de implementar**: buscar aquí si ya existe skill/agent/command
2. **Trigger automático**: muchas skills Vercel tienen `pathPatterns` y `bashPatterns` que las activan automáticamente cuando coincide el contexto (ej: editar `next.config.*` activa `next-upgrade`)
3. **Cuando algo falla en deploy**: invocar `deployment-expert` agent vía Task tool
4. **Pre-release**: ejecutar `a11y-debugging` skill como check de calidad

---

## Mantenimiento

Este archivo se actualiza cuando:
- Plugin nuevo se habilita
- Skill se demuestra valiosa en uso real
- Skill se descarta tras intentar usarla y no aportar
- Vercel actualiza versión mayor del plugin (hoy v0.40.0)
