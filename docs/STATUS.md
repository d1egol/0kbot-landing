# STATUS del producto 0kbot

**Snapshot:** 2026-04-29
**Repo:** `main @ aaea3c4`
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

## Última iteración (2026-04-28 → 2026-04-29) — cierre Plan Maestro Consolidado y SEO Pivot

| Commit | Bloque | Resumen |
|---|---|---|
| `2eb47ad` | 1 — Legal | Consent Ley 21.719 en 3 forms; FAQ sin precios UF; casos refactor a "Problemas que resolvemos"; helper `lib/api-handler.ts` y `lib/logger.ts` minimal |
| `34a7d9b` | 2 — Refinamiento UX | Reorden home (Credenciales bajada, Blog al final); `ComparacionSection` movida a `/servicios`; microcopy fixes (MetodoSection, ROIEstimator) |
| `1538756` | 3 — Tests | Vitest + 41 tests (Zod schemas, api-handler, logger, bundle parser); CI runs `npm test` |
| (back-office) | 4 — Catálogo de servicios | `Servicios_0kbot_v1.md` en OneDrive cierra Plan Maestro Fase 2.2 |
| `f567093` | 5.4 — SEO Pivot | 3 landings IA (`/ia-para-pymes`, `/transformacion-digital-pymes`, `/automatizacion-procesos-chile`) + 3 blogs marzo reescritos con copy procesos-first; URLs/slugs/OG/JSON-LD conservados; cifras inventadas eliminadas |
| `7bf406f` | (CI) | Rebaseline `.perf-budget.json`: `/` 141 → 145 kB con changelog explícito en `_meta.history`. Trade-off: +4 kB First Load JS por compliance Ley 21.719 + casos limpios |
| `1c4f5dd` | 6 — HeroVisual | HeroVisual premium + favicon SVG con isotipo de marca |
| `22f2779` | (SEO) | Expandir `areaServed` del LocalBusiness schema con comunas RM |
| `67d6427` | (Blog) | Reframe `cuanto-cuesta-automatizar-pyme-chile.mdx` sin precios UF |

## Camino A — cerrado completo el 2026-04-29

- ✅ **Fase 1.1 — Indexación GSC**: dominio ya verificado (10 páginas indexadas previas). Sitemap reenviado post-Bloque 5.4 para tomar copy nuevo. 5 URLs request indexing OK (`/`, `/servicios`, `/casos`, `/blog`, `/contacto`). `/privacidad` y `/terminos` excluidas correctamente por `robots: { index: false }` intencional en su `metadata` (legales accesibles desde footer pero noindex by design — no incluir en indexación manual).
- ✅ **Fase 1.2 — LinkedIn Company Page**: About largo + Detalles (industria/tamaño/año/ubicación) + 15 Specialties + custom button "Contáctanos" → `/contacto` + banner + perfil personal vinculado como "Fundador y Consultor Principal".
- ✅ **Fase 1.6 — DKIM/DMARC hardening**: DKIM 2048 (selector `google`) publicado en root + Workspace activado. DMARC actualizado de `p=none` a `p=none + rua/ruf` con alias `dmarc-reports@0kbot.com`. Test `hola@0kbot.com → Gmail externo` confirmó SPF=PASS, DKIM=PASS `d=0kbot.com s=google`, DMARC=PASS. Subir a `p=quarantine` cuando reports muestren 100% PASS por 3-4 semanas.

## Backlog activo

### Bloques diferidos del Plan Maestro Consolidado

- **Bloque 7 — Esperar tráfico real** (no hacer ahora): rate limit Upstash distribuido, cola async para reintentos email, logs estructurados con sink externo. Solo cuando outreach Fase 5.3 esté activo y haya ≥50 req/día. Se solapa con Fase 8.0 técnica del MASTER_PLAN_v2.

### Issue abierto

- **[#13](https://github.com/d1egol/0kbot-landing/issues/13)** — Deps audit fix. Cadena `postcss/uuid/svix/resend` original ya cerrada por `npm install` reciente. Quedan **4 vulns high de Next.js 14.2.35** (DoS image optimizer, RSC deserialization, request smuggling, image disk cache, Server Components DoS). Fix vía upgrade Next (breaking change) — diferido a Fase 8.0 del MASTER_PLAN_v2 que ya contempla "upgrade Next".

### Pendiente conocido — fuera de los bloques

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
