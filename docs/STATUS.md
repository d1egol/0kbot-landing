# STATUS del producto 0kbot

**Snapshot:** 2026-04-28
**Repo:** `main @ 1538756`
**Sitio:** [https://0kbot.com](https://0kbot.com) (Vercel auto-deploy en cada push)

> Esta es una vista de alto nivel del estado del sitio. Para el detalle estratégico cruzado con los planes comerciales, ver `0kbot Asistente/STATUS_<fecha>.md` (back-office privado, no en este repo).

---

## Lo que el producto cubre hoy

- Landing pública en Next.js 14 App Router con homepage, blog MDX, calculadora ROI, páginas de servicios e industrias.
- Flujo de captura de leads: ContactModal → `/api/leads` → Supabase + emails Resend → redirect Calendly.
- DiagnosticoWizard de 6 pasos con compliance Ley 21.719 (consentimiento explícito).
- ROI estimator embebido en home + calculadora completa en `/calculadora-roi`.
- Sistema de tracking GA4 + Meta Pixel con eventos: `cta_click`, `mobile_menu_open`, `roi_estimator_started`, `home_estimator_computed`, `generate_lead`, `diagnostico_step`, `diagnostico_completed`.
- CI: lint + typecheck + tests (Vitest) + build + bundle budget + Lighthouse + gitleaks.

## Última iteración (2026-04-28) — Plan Maestro Consolidado, Bloques 1-4

| Commit | Bloque | Resumen |
|---|---|---|
| `2eb47ad` | 1 — Legal | Consent Ley 21.719 en 3 forms; FAQ sin precios UF; casos refactor a "Problemas que resolvemos"; helper `lib/api-handler.ts` y `lib/logger.ts` minimal |
| `34a7d9b` | 2 — Refinamiento UX | Reorden home (Credenciales bajada, Blog al final); `ComparacionSection` movida a `/servicios`; microcopy fixes (MetodoSection, ROIEstimator) |
| `1538756` | 3 — Tests | Vitest + 41 tests (Zod schemas, api-handler, logger, bundle parser); CI runs `npm test` |
| (back-office) | 4 — Catálogo de servicios | `Servicios_0kbot_v1.md` en OneDrive cierra Plan Maestro Fase 2.2 |

## Backlog activo (próxima sesión)

### Camino A — Configuraciones externas (Diego, ~2h en consolas)

- **Plan Maestro Fase 1.1 — Indexación GSC**: verificar dominio en Google Search Console, submit sitemap.xml ([src/app/sitemap.ts](src/app/sitemap.ts)), pedir indexación manual de home + 3 blog posts.
- **Plan Maestro Fase 1.2 — LinkedIn Company Page**: auditar headline / about / banner / vinculación al dominio. Los posts del calendario abril deben taggear `@0kbot`.
- **Plan Maestro Fase 1.6 — DKIM/DMARC hardening**: DNS records en Vercel + Workspace DKIM 2048-bit + DMARC `p=quarantine` con reports a `dmarc-reports@0kbot.com`.

### Camino C — Trabajo de repo pendiente

- **Plan Maestro Fase 1.7 — SEO Pivot URLs IA legacy**: reescribir in-place `/ia-para-pymes`, `/transformacion-digital-pymes`, `/automatizacion-procesos-chile` y 3 blog posts marzo (`ia-para-pymes-lo-que-realmente-sirve`, `ia-para-pymes-chile`, `herramientas-ia-chile`) con copy procesos-first. Conservar URLs por SEO.
- **Bloque 6 — HeroVisual premium** (opcional, baja prioridad): iterar la card del hero a "tablero más rico" con estados de proceso y trazabilidad antes/después más evidente.
- **Bloque 7 — Esperar tráfico real** (no hacer ahora): rate limit Upstash distribuido, cola async para reintentos email, logs estructurados con sink externo. Solo cuando outreach Fase 5.3 esté activo.

### Pendiente conocido — fuera de los bloques

- Blog post `cuanto-cuesta-automatizar-pyme-chile.mdx` aún tiene rangos UF detallados. No es legal-bloqueante (está enmarcado como guía de presupuesto del mercado), pero conviene reframearlo cuando se haga el SEO Pivot.
- Hallazgo #7 auditoría externa (warnings npm `http-proxy`): config local de Diego, no del repo.

## Decisiones operativas vigentes

- Workflow git: **commits directos a `main`**, sin branches, sin PRs. CI es el gate.
- 2 sistemas separados: el repo (front público) y el OneDrive `0kbot Asistente/` (back-office privado para cotizaciones/costos/servicios). Vocabulario compartido pero no archivos compartidos.
- Sin precios públicos: cada propuesta cotiza según alcance.
- Casos `/casos/*` enmarcados como "situaciones típicas del rubro", no "casos reales con clientes".

## Verificación rápida del estado del producto

```bash
# Desde el clon local
npm run lint && npm run typecheck && npm test
# Esperado: lint 0 issues, typecheck 0 errors, 41 tests passed
```

Build local en Windows falla por `@vercel/og` — limitación conocida pre-existente. Validar siempre con CI Linux ([.github/workflows/ci.yml](.github/workflows/ci.yml)).
