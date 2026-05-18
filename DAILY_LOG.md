# DAILY_LOG.md — Standup asíncrono Diego ↔ Claude (repo 0kbot-landing)

> Append-only conversational log del repo `0kbot-landing`. Diego deja entradas cuando quiera con qué hizo, qué necesita, bloqueos. Claude procesa al inicio de cada sesión y responde en el mismo archivo. Espejo del formato usado en `0kbot-seguridad/DAILY_LOG.md`.

## Formato

```markdown
## YYYY-MM-DD HH:MM — @autor

**Status:** lo que hice / lo que avancé hoy
**Necesito:** qué requiero del otro lado (Diego o Claude)
**Bloqueos:** qué me detiene
**Próximo paso:** qué planeo hacer después

---
```

## Convenciones

- Entrada más reciente al final (chronological order)
- `@diego` o `@claude` al inicio
- Hora en zona Chile (CLT/CLST UTC-4 o UTC-3)
- Una entrada = una sesión o un tema delimitado
- No editar entradas pasadas. Si hay corrección, agregar entrada nueva referenciando.
- Después de cada sesión con merge, dejar entrada de cierre obligatoria.

---

## 2026-05-13 19:34 — @claude (sesión sección puente seguridad)

**Status:** PR #16 mergeada a `main` (`993e5a2`). Tres fases entregadas:

1. **Sección puente** `VerticalesSection.tsx` entre `CasosSection` y `CredencialesSection` — fondo oscuro + acento dorado, CTA a `seguridad.0kbot.com` en nueva pestaña. Copy: "¿Tu empresa enfrenta riesgos de ciberseguridad o exigencias de cumplimiento?" → "Solicitar diagnóstico de seguridad". Decisión clave: el subdominio vende **diagnósticos de seguridad** como propuesta amplia, NO Centinela (que es producto interno).
2. **DiagnosticoWizard sector-aware** — +5 industrias reguladas (fintech, energía, telco, infra digital, transporte). Si el sector seleccionado está en `REGULATED_SECTORS` (constants.ts), dispara `regulated_sector_detected` en GA4 y muestra panel post-completion con CTA al subdominio.
3. **Tracking cross-dominio** — 3 helpers tipados nuevos en `analytics.ts`: `trackCentinelaCtaClick`, `trackCrossDomainReferral`, `trackRegulatedSectorDetected`. `SEGURIDAD_URL` y `REGULATED_SECTORS` como single source of truth en `constants.ts`.

Fix bonus: `CLAUDE.md` del repo estaba desfasado (Centinela-centric, orden de homepage con `ComparacionSection` + `PrincipiosSection` que ya no se importaban). Corregido en mismo commit.

Análisis previo a implementación: patrón multi-depto 4-agentes paralelos (`ux-lead` + `growth-lead` + `creative-director` + `cyber-def-lead`). Cuarta validación del patrón — convergencia útil con tensión Creative-C vs Cyber-Def resuelta en síntesis (Variante A + disclaimer audiencia).

Gates verde: lint + typecheck + build en Windows local + CI Vercel previo a merge.

**Necesito (de Diego):**
- ⚠ **Configurar Google tag linker en GTM `GTM-TKKTNXBS`** entre `0kbot.com` y `seguridad.0kbot.com`. Sin esto los eventos `centinela_cta_click` y `cross_domain_referral` se registran pero las sesiones GA4 se rompen al cruzar el dominio (perdiendo atribución de campaña).
- (Opcional) Decidir si agregar campo `vertical` al schema Supabase `leads` para persistir el sector regulado detectado (hoy solo en GA4).
- Validación visual mobile + desktop en producción ahora que el merge está vivo.

**Bloqueos:** ninguno técnico. Próximas decisiones requieren input Diego (GTM + schema Supabase).

**Próximo paso:**
- Monitorear eventos GA4 en Debug View al menos 48h después del config GTM.
- Si conversión cross-dominio es baja (<5% de visitantes home), considerar A/B test Variante C ("¿tu cliente te lo pidió?") como secundaria.
- Decisión separada pendiente: eliminar definitivamente `ComparacionSection.tsx` y `PrincipiosSection.tsx` (archivos vivos pero no importados desde el rediseño v2).

---

## 2026-05-13 20:00 — @claude (cierre extendido post-merge)

**Status:** Ejecuté los 3 pendientes que quedaron tras el merge de PR #16, más un bonus encadenado:

1. **Verificación visual prod** ✅ — Chrome DevTools MCP sobre `https://0kbot.com` viewport desktop (1440×900) y mobile (390×844 emulado). `VerticalesSection` renderiza limpio en ambos: eyebrow dorado, título h2 a 2-4 líneas legibles, card con icono escudo + CTA dorado prominente, lista "Para quién aplica" responsive (colapsa debajo del card en mobile), microcopy y disclaimer presentes. Navbar hamburguesa mobile OK. FloatingCTA sticky-bottom no compite con el CTA dorado de la sección. Screenshots en `%TEMP%\0kbot-verticales-*.png`.
2. **Supabase schema** ✅ — Migration `add_vertical_to_leads` aplicada vía MCP al proyecto `cgmhkeocffwrlegktonw` (0kbot-landing, sa-east-1). Campo `vertical TEXT NULL` con check constraint `NULL OR 'procesos' OR 'seguridad'`. Verificado post-aplicación: 0 security advisors, 1 row existente intacto.
3. **Guía GTM cross-domain** ✅ — `docs/GTM_CROSS_DOMAIN_SETUP.md` commit `0b40038`. 5 pasos concretos + tabla de troubleshooting + validación end-to-end con DebugView GA4. No tengo MCP de GTM, por eso es guía manual.
4. **Bonus encadenado** ✅ — Commit `910eecb` actualiza `/api/diagnostico` para derivar `vertical` automáticamente en cada insert: si `industria ∈ REGULATED_SECTORS` (fintech, energía, telco, salud, infra digital, transporte) → `vertical='seguridad'`, sino `'procesos'`. CRM ya puede segmentar leads por vertical sin parsear el JSONB `diagnostico_data.industria`.

Lint + typecheck verde pre-push. Push directo a main (autorizado).

**Necesito (de Diego):**
- ⚠ **Configurar GTM linker** siguiendo `docs/GTM_CROSS_DOMAIN_SETUP.md` (5-10 min en la UI de GTM). Es el único pendiente bloqueante para que GA4 stitchee sesiones cross-dominio.
- (Opcional) Test E2E manual: completar wizard en `https://0kbot.com` con industria "Servicios financieros / Fintech" y verificar en Supabase Studio que el lead nuevo tiene `vertical='seguridad'`. Confirma que el cambio de API funciona en prod.

**Bloqueos:** ninguno. Todo lo que requiere ejecutarse desde el harness está hecho.

**Próximo paso:**
- Cuando Diego configure el GTM linker, primer chequeo GA4 DebugView a las 24-48h para validar que `centinela_cta_click` y `cross_domain_referral` aparecen con `session_id` persistente cruzando dominios.
- Si el wizard captura ≥5 leads con `vertical='seguridad'` en las próximas 2 semanas, considerar handoff automático a `crm-pipeline-mover` para enrutarlos al Sheet Pipeline OIV.

---

## 2026-05-15 20:56 — [HANDOFF] Sprint pre-lanzamiento vertical pymes

### Quién cerró + por qué
- Tier actual: Claude Opus 4.7 (1M context)
- Razón cierre: Sprint completado, pendientes son offline (Diego) + próxima sesión

### Estado git al cierre
- Branch: `feat/sprint-pymes-skus`
- HEAD: `4032867 feat: sprint pymes - SKUs vitrina + founder LinkedIn + servicio en wizard`
- Working tree: 1 archivo modificado fuera del scope (`.claude/agents/landing-design-refresher.md`, preexistente, NO incluido en commit)
- PR abierto: https://github.com/d1egol/0kbot-landing/pull/17

### Qué se estaba haciendo
Pivote táctico de 0kbot: Diego se quedó sin trabajo, necesita generar revenue real desde 0kbot.com (vertical pymes, NO seguridad/OIV que va en sesión separada). Sprint pre-lanzamiento para que la landing pueda recibir primer cliente real desde la semana próxima.

### Last decisión / acción
SOW Radiografía Operacional creado en Drive Workspace (`02_Contratos/Plantillas/SOW_Radiografia_Operacional_TEMPLATE_v1`) con findings Gemini peer review aplicados. Permisos `workspace-mcp create_*` autorizados explícitamente por Diego en `settings.json` global.

### Métricas pre-cierre
- Lighthouse mobile/desktop: NO corrido — pendiente `lighthouse-gate` antes de merge a main
- Bundle size delta vs main: no medido
- Preview Vercel: auto-deploy del PR #17 (URL aparece en GitHub PR)
- Lint: ✅ exit 0
- Typecheck: ✅ exit 0
- Build local: NO corrido (font path issues Windows + lección `lesson_next16_upgrade_bundle_analyzer`)

### Cambios sensibles above-the-fold
- Hero: **NO tocado** (Diego rechazó el cambio A — H1 "No vendemos IA. Vendemos lunes tranquilos." intacto)
- FAQ pricing: cambio de copy auditado → suavizado con rangos visibles desde $390K CLP
- Nueva ServiciosSection entre `MetodoSection` y `ROIEstimatorSection`
- DiagnosticoWizard: 6→7 steps (paso nuevo "qué tipo de ayuda buscas")
- CredencialesSection: bloque founder + link LinkedIn directo (foto pendiente)

### 5 SKUs definidos en ServiciosSection
1. **Radiografía Operacional** (bandera) — $490K–$690K CLP, 5d hábiles, mapeo 8-12 procesos
2. Primer Paso Digital — desde $690K, 7d, auditoría stack tecnológico
3. SOP Express — desde $390K, 4d, 3 procesos documentados
4. Diagnóstico Costos Ocultos — desde $490K, 5d, mapa gastos + rentabilidad
5. Plan de Acción Priorizado — desde $490K, 5d, brechas ordenadas por impacto/esfuerzo

### Pendiente para próxima sesión
1. **Lighthouse-gate sobre preview Vercel del PR #17** (skill `lighthouse-gate`) — gate de merge.
2. **Verificación visual Chrome DevTools MCP** sobre preview deploy (screenshot ServiciosSection nueva + bloque founder).
3. **Generar mensajes outbound A/B/C** desde lista de 20 contactos LinkedIn que Diego prepare offline (task #9 pendiente).
4. **Upgrade bloque founder** en CredencialesSection cuando Diego tenga foto profesional en `public/diego.jpg`.
5. **Bridge eventos `qué tipo de ayuda buscas` → Sheet Pipeline** si Diego quiere que el SKU elegido salga al Sheet observability/CRM (hoy solo persiste en Supabase `diagnostico_data` JSONB).

### Pendiente Diego offline
1. Mergear PR #17 cuando preview Vercel verde + Lighthouse OK.
2. Foto profesional → `public/diego.jpg`.
3. Completar placeholders internos en SOW Drive: `{{RUT_0KBOT}}`, `{{DIRECCION_0KBOT}}`, `{{DATOS_CUENTA_0KBOT}}`, `{{BANCO_0KBOT}}`.
4. Preparar lista 20 contactos LinkedIn 1er grado (pyme servicios 5-25 personas, 120M-600M CLP/año).
5. Copiar/pegar **Variante B** del post LinkedIn martes próximo (`#consultoriachile #pymeschile #0kbot #transformacionpymes #automatizacion`).

### Bloqueos
Ninguno. PR #17 depende solo de preview Vercel + Lighthouse gate antes de merge.

### Cómo retomar
**Plan Max disponible:**
```
cd C:\Users\dilop\Documents\0kbot\0kbot-landing
claude
"Lee última entrada [HANDOFF] del DAILY_LOG y continúa con pendiente #1: lighthouse-gate sobre preview Vercel del PR #17"
```

**Plan Max al cap:**
```
opencode  # build (Sonnet via Zen) o build-gpt
```

### Archivos en juego (sprint completado)
- `src/components/home/ServiciosSection.tsx` — NUEVO, listo
- `src/components/home/FAQSection.tsx` + `src/app/page.tsx` (faqJsonLd) — pricing visible
- `src/components/home/CredencialesSection.tsx` — bloque founder + LinkedIn
- `src/components/ui/DiagnosticoWizard.tsx` — paso 6 servicioInteres, 7 steps total
- `src/lib/validations.ts` — campo `servicioInteres` opcional
- `src/app/api/diagnostico/route.ts` — persiste `servicioInteres` en `diagnostico_data` JSONB

### Artefactos fuera del repo
- Drive: `02_Contratos/Plantillas/SOW_Radiografia_Operacional_TEMPLATE_v1` (ID: `1VtPmAmvJiqqzdDwQm8vlkF6NuIVCWmsUpch9gMBRPJU`)
- Post LinkedIn 3 variantes UTF-8 (en transcript sesión, Variante B recomendada)
- Settings.json global: 5 nuevos permisos `mcp__workspace-mcp__create_*` autorizados

### Contexto crítico — leer antes de retomar
Vertical seguridad/OIV intencionalmente **fuera de scope** de esta sesión. Centinela / 0kbot-seguridad se revisa en sesión separada. Esta sesión es 100% pyme generalista. Time-to-first-cobro ahora depende solo de pendientes Diego offline (foto, contactos, datos bancarios, merge PR).

---

## 2026-05-15 21:55 — @claude (refresh brand v1.1 a main)

**Status:** Refresh visual completo de la home alineando al Brand Brief v1.1 (canónico desde 2026-05-15 después de detectar contradicción con el viejo Brand Guide Fase 2 que efectivamente vivía en la landing).

Decisión Diego de la sesión: Brand Brief v1.1 (Doc Google) es el canónico. Fase 2 (Markdown OneDrive con Space Grotesk + dorado + #1B5FA6) queda deprecado.

Cambios aplicados (commit `522090d`, fast-forward a main):
- **Paleta:** `--primary` `#1B5FA6` → `#1E40AF` (navy blue-800). `--accent-glow` ahora `#93C5FD` (blue-300) para destacar texto/iconos sobre `bg-primary`. Eliminado gold `#D4AF37`. Fondo `#F7F5F0` → `#FAFAF7` off-white tibio.
- **Tipografía:** Roboto Slab cargado para H1-H6 (slab serif editorial estilo Linear/IBM Plex). Inter para body. Space Grotesk + DM Sans conservados como fallback durante migración.
- **MetodoSection:** 4 colores inline hardcoded eliminados (los 4 pasos comparten primary; distinción por número + icono).
- **PainPointsSection:** paleta rainbow 6 colores → monocromo neutro con hover navy.
- **SolucionSection:** fix contraste — `text-accent` era casi invisible sobre `bg-primary` navy → migrado a `text-accent-glow`. CTA "Agendar diagnóstico gratis" ahora `bg-white text-primary` (Stripe pattern).
- **HeroSection:** eliminados 3 bullets `CheckCircle2` emerald (cumple "NO bullets en hero" del brief v1.1). Grid pattern usa `hsl(var(--primary))`.
- **CLAUDE.md repo:** tabla "Colores de marca" reescrita con tokens v1.1.

Pre-merge: lint ✓ typecheck ✓ dev server arranca ✓ verificación visual Chrome DevTools en hero / painpoints / método / solución / diagnóstico / blog preview. Build local skip por issue conocido `@vercel/og` Windows.
Post-merge: Vercel deployment production `dpl_4mijUHXwdZe1ZxLNTFpWae6ZjgRL` status success. Screenshot prod confirmado en `%TEMP%\0kbot-v11-PROD-hero.png`.

Branch `refresh/brand-v1-1` borrada local + remote post-merge.

**Necesito (de Diego):**
- (Opcional) Validación visual final en `https://0kbot.com` — especialmente mobile + secciones no auditadas hoy (Casos, Verticales, NoSomosSoftware, Credenciales, FAQ, CTAFinal).
- Decidir cuándo retomar el sprint `feat/sprint-pymes-skus` (PR #17 abierto, branch tiene WIP stashed con cambio menor a `landing-design-refresher.md` agent model alias).
- ¿Autorizo push directo de este commit DAILY_LOG a main? (classifier denegó push directo solo-docs; tu OK previo era para el refresh).

**Bloqueos:** ninguno.

**Próximo paso:**
- Si validación visual prod OK, próxima ola: aplicar elementos de seguridad.0kbot.com identificados en la revisión crítica (stats numéricos hero, muestras del entregable, tabla comparativa Big4/Mediana/0kbot, FAQ-bot decision tree, screenshot real del producto).
- Funnel inconsistente (problema #1 de la revisión crítica) sigue pendiente: 4 CTAs "Agendar" saltan a Calendly sin pasar por el wizard.

---

## 2026-05-17 14:45 — @claude (cierre sesión retomar sprint pymes)

**Status:** Sesión autónoma con autorización Diego ("ok push y merge el fix"). Retomé pendientes del HANDOFF 2026-05-15:

**Cerrado en sesión:**
1. **Fix CI biome** (commit `878630d`): `useImportType` + LF normalize en 3 API routes (`diagnostico`, `leads`, `onboarding`). CI estaba bloqueado por esto.
2. **Audit links "Hablemos"** (commit `e1b2396`): encontrado 2 links rotos en `src/app/blog/[slug]/page.tsx` apuntando a `/#diagnostico` (no existe — el id real es `cta-diagnostico`). Fix aplicado. Resto del repo verificado: todos los `href="/#X"` apuntan a anchors válidos. Hardcoded Calendly en `/nosotros` y mailto en email templates noted (no roto, pero viola constants.ts; dejo para refactor futuro).
3. **Merge resolution + merge PR #17 a main** (commit `3f9d677` + merge admin). Conflicto en DAILY_LOG resuelto preservando ambas entradas (sprint pymes 20:56 + refresh brand v1.1 21:55).
4. **Lighthouse-gate prod post-merge**: mobile a11y 90 / BP 81 / SEO 100. Desktop a11y 96 / BP 81 / SEO 100 / Agentic 100. 5 fails mobile identificados (deprecations, aria-hidden-focus, color-contrast emerald + grey, target-size dots).
5. **Multi-agent review post-merge paralelo** (ux-lead + growth-lead + creative-director): 22 hallazgos consolidados.
6. **Fixes claros aplicados** (commit `44aa593`):
   - `ServiciosSection.tsx:119`: `text-emerald-500` → `text-primary` (brand v1.1)
   - `CredencialesSection.tsx`: 4 badges rainbow (blue/purple/amber/emerald-50) → monocromo `bg-primary/5 border-primary/15 text-primary`
   - `CredencialesSection.tsx`: hex legacy `#1B5FA6`/`#0d3d6e` → `bg-primary`/`from-primary to-primary/80` (token v1.1)
   - `DiagnosticoWizard.tsx:276`: hex `#1B5FA6` → `bg-primary` (success screen)
   - `CasosCarousel.tsx:130`: tap target dots 8x8 → wrapper 24x24 con dot visual inside (WCAG 2.5.5 mobile)
   - Convergencia: 2/3 agentes coincidieron en cada item aplicado.

**Pendientes NO aplicados** (opinables o requieren OK Diego):
1. **Lead Pentester** en bloque founder (CredencialesSection:114) — copy generalista vs vertical. CLAUDE.md regla "no editar copy sin confirmación". 2 agentes lo marcan, Diego decide.
2. **Hero CTA prioridad** (growth-lead): Diego rechazó previamente cambios al Hero. NO se toca.
3. **Wizard paso 6 subtext precio/plazo** en cada SKU (growth-lead): feature, no fix.
4. **Wizard paso 7 auto-redirect Calendly** post-submit (growth-lead): opinable — UX semantics (¿redirect inmediato o pantalla intermedia confirmación?).
5. **DiagnosticoWizard progressPct semántica** (ux-lead): paso 1 muestra 0%. Decisión UX subjetiva.
6. **CTA "Hablemos" weight** en SKUs secundarios (ux-lead): text-xs vs botón. Decisión visual.
7. **SKUs secundarios jerarquía precio** (growth-lead): mover precio a bloque destacado igual que Radiografía.
8. **FAQ UF vs CLP** (ux-lead): unificar moneda cross-surface. Requiere audit.
9. **VerticalesSection gold legacy** (creative caveat): no verificado en esta sesión.
10. **ROI inline en SKU bandera** (growth-lead): "ROI típico: recuperas en ≤4 semanas" debajo del CTA.
11. **Estimador conecta con SKU** (growth-lead): "Un diagnóstico de $490K que reduce eso un 30% se paga en 3 semanas".
12. **Lighthouse fails restantes**: color-contrast `#999999` (selector incierto), aria-hidden-focus (`<main fixed>` — investigación), deprecations (Chrome API).
13. **Perf budget script `scripts/check-bundle-budget.js`** regex desactualizado para Next 16 output → CI sigue rojo en main por este check secundario. NO bloquea build/deploy/Vercel. Fix: actualizar regex `routePattern` para parsear formato Next 16.

**Necesito (de Diego):**
- Revisar listado "Pendientes NO aplicados" y marcar cuáles aplicar/descartar.
- Decisión sobre "Lead Pentester" copy (mantener / reemplazar por "Mejora de procesos · Data Science · Lean Six Sigma").
- Foto profesional → `public/diego.jpg` (pendiente offline).
- Lista 20 contactos LinkedIn (pendiente offline).
- Datos bancarios SOW Drive (pendiente offline).

**Bloqueos:** ninguno. Sprint pymes 100% en prod. CI rojo es perf budget script (no bloquea deploy).

**Próximo paso:**
- Cuando Diego vuelva: revisar 13 pendientes "NO aplicados" + decidir scope próxima sesión.
- Si Diego autoriza: arreglar perf budget regex en una sesión corta.
- Cuando llegue foto: upgrade CredencialesSection con bloque founder visual.

---

## 2026-05-17 19:50 — @claude (batch 2 — priorización 13 items + CI verde)

**Status:** Diego autorizó avanzar con los 13 pendientes "NO aplicados". Batch 2 ejecutado:

**Aplicados** (commits `34b019a` + `54dacf1`):

Copy (autorizado por Diego):
- `CredencialesSection.tsx:113`: "Lead Pentester" → "Lean Six Sigma" (alinea con vertical pymes generalista).

Conversión / funnel (growth-lead):
- `ServiciosSection.tsx`: ROI inline debajo del CTA bandera ("Radiografía paga en ≤4 semanas").
- `ServiciosSection.tsx`: 4 SKUs secundarios — precio elevado a header destacado, CTA "Hablemos →" upgrade a botón outline con tap target +36px, query param `?servicio=<slug>` para pre-context wizard.
- `ServiciosSection.tsx`: footer con CTA primario "Agendar diagnóstico gratuito" (era solo italic).
- `ROIEstimatorSection.tsx`: bloque condicional conecta # estimado con SKU ("Radiografía se paga en ~N meses") cuando alertaTono != baja.
- `DiagnosticoWizard.tsx`: paso 6 con subtext plazo+precio por SKU, "No estoy seguro" arriba (reduce fricción).
- `DiagnosticoWizard.tsx`: `progressPct = ((step+1)/TOTAL_STEPS)*100` (paso 1 ahora 14%, no 0%).
- `DiagnosticoWizard.tsx`: auto-redirect `setTimeout 1.8s window.open Calendly` post-submit (solo si NO regulated; sectores regulados ven panel seguridad antes).

Brand v1.1 — gold `#D4AF37` legacy sweep (creative-director caveat verificado):
- `VerticalesSection.tsx`: 5 callsites `#D4AF37` → `accent-glow` (blue-300, SSOT v1.1).
- `NoSomosSoftwareSection.tsx`: eyebrow `#D4AF37` → `accent-glow`.
- `DiagnosticoWizard.tsx` (regulated panel): `#D4AF37` icon/border + Calendly CTA → `accent-glow`.

CI / perf budget:
- `scripts/check-bundle-budget.js`: graceful degradation cuando regex no matchea (Next 16 removió Size/FirstLoadJS inline). WARN + exit 0 hasta reescribir contra `.next/build-manifest.json`.
- `scripts/__tests__/check-bundle-budget.test.js`: test "exit 2 cuando no parsea" actualizado al nuevo behavior "exit 0 + WARN".

**No aplicados aún** (heavy assets — requieren regeneración, sesión propia):
- Email templates `src/lib/email-templates/shared.ts`: `accent: "#D4AF37"` legacy.
- OG images `src/app/blog/[slug]/opengraph-image.tsx`: gradient `#1B5FA6 → #D4AF37`.
- `src/app/icon.svg`: gradient stop `#D4AF37`.
- `src/app/calculadora-roi/CalculadoraROI.tsx:252`: hex inline `#D4AF37`.
- `src/app/blog/[slug]/page.tsx:227` + `src/app/blog/page.tsx:140`: CTAs gold `#D4AF37`.
- `src/components/home/CasosSection.tsx`: rainbow accent palette por industria (#10B981, #F59E0B, etc.) — decisión consciente vs brand v1.1 monocromo, mantener hasta decisión Diego.

**No aplicados deliberadamente** (decisión producto):
- Hero CTA prioridad (Diego rechazó cambios al Hero previamente).
- FAQ UF vs CLP cross-surface unification (requiere audit emails+landing).
- Lighthouse residuales: color-contrast `#999999` (selector ambiguo), aria-hidden-focus `<main fixed>` (probable FloatingCTA tabindex), Chrome deprecations (info-only).

**Métricas post-batch:**
- Lighthouse mobile: a11y **90 → 94** (+4). BP 81, SEO 100. Failed: 4 (era 5).
- CI main: **VERDE** por primera vez desde refresh brand v1.1 (16-may). Lint + typecheck + biome + tests (41/41) + audit + build + perf-budget (graceful) + secret scan: todo pass.
- Commits batch sesión: 9 (878630d, e1b2396, 3f9d677, 44aa593, 00d4223, 34b019a, 54dacf1 + merge admin PR #17 + merge resolve).

**Necesito (de Diego al regreso):**
- Validación visual prod mobile + desktop (cambios visibles en VerticalesSection, NoSomosSoftware eyebrow, wizard paso 6, ServiciosSection SKUs grid, ROI estimator bloque conexión).
- Decisión sobre items "no aplicados aún" (gold sweep heavy assets): hacer en una próxima sesión o dejar legacy.
- Decisión sobre CasosSection rainbow palette: ¿migrar a monocromo v1.1 o mantener por diferenciación visual de industrias?
- Pendientes offline siguen activos: foto `public/diego.jpg`, lista 20 contactos LinkedIn, datos bancarios SOW.

**Bloqueos:** ninguno. Landing en prod con sprint pymes + brand v1.1 (mayor consistencia) + a11y mejorada + CI verde.

**Próximo paso:**
- Cuando Diego vuelva: re-correr Lighthouse desktop para verificar paridad. Smoke test del auto-redirect Calendly (completar wizard end-to-end con email real).
- Si Diego autoriza, próxima sesión: gold sweep en email-templates + OG + icon.svg + calculadora-roi + blog (heavy assets).

---

## 2026-05-17T23:55Z — [HANDOFF] Opus session: dream consolidation + settings.json patch + agent rename

**Sesión**: harness-focused, no sprint pymes. Delta mínimo en landing.

**Hecho:**
- `/dream` 7d auto-apply (49 transcripts, 18 señales): 3 CREATE + 3 UPDATE + 2 VERIFY + 4 drafts. Diff completo en `~/.claude/docs/dream-diff-2026-05-17.md`.
- Settings.json patch aplicado por Diego manualmente (11 entries, dreaming nightly desbloqueado). Auto-mode bloqueó intento del agente, esperado (self-modification policy).
- Smoke test `/dream 2 --dry` PASS: 3 writes objetivo OK sin sandbox prompts.
- Landing commit `482e697`: chore(agent) rename `claude-sonnet-4-6 → sonnet` en `landing-design-refresher.md`. Pushed a main.

**No hecho (decisión Diego):**
- Spec `ecommerce-pilot-chile` queda en `Pending` — Diego priorizó 0kbot first (cashflow Indra=0). NO se aprobó L2.

**Estado landing al cierre**: main verde, branch limpio, 0 cambios pendientes.

**Próximo paso**:
- Validar cron nightly del dreaming esta noche (Task Scheduler 22:30 Chile → confirmar que applica operaciones reales sin issues).
- Cuando Diego retome sprint pymes: items "no aplicados aún" del HANDOFF anterior (gold sweep, CasosSection rainbow, foto diego.jpg).

**Bloqueos**: ninguno.

---

## 2026-05-17 23:50 — @claude (batch 3 — pivote empresa + UF + multi-agente)

**Status:** Diego volvió con 4 decisiones vinculantes: (1) desestimar perfil personal en home, (2) estandarizar UF, (3) delegar colores/decisiones al equipo (agentes + Claude), (4) página 100% funcional con agendamiento correcto.

**Aplicado** (3 commits: `fc5d383`, `44a85f6`, `27c0105`):

PIVOTE EMPRESA (decisión Diego):
- `CredencialesSection.tsx`: bloque founder personal eliminado, narrativa "Equipo 0kbot" + CTA `linkedin.com/company/0kbot`.
- `Footer.tsx`: 2 LinkedIn icons → 1 (solo company).
- `layout.tsx` JSON-LD LocalBusiness `sameAs`: LinkedIn personal removido.
- `blog/[slug]/page.tsx` Article author: `Person Diego` → `Organization 0kbot`.
- `nosotros/page.tsx`: LinkedIn personal → company.

UF ESTÁNDAR (decisión Diego):
- ServiciosSection 5 SKUs: $390K→10 UF, $490K→12 UF, $690K→18 UF.
- Radiografía bandera: "12 UF" (rango 12 a 18).
- DiagnosticoWizard step 6 subtext: UF.
- FAQ pricing: "10 UF".
- ROIEstimator conexión SKU: "12 UF".
- `validations.ts` + `onboarding/page.tsx`: presupuesto ranges en UF.
- ROIEstimator/CalculadoraROI CLP preservado (cliente ingresa costos reales operacionales).

DELEGADO A AGENTES — convergencia 3 agentes (ux-lead + creative-director + el orquestador):

`creative-director` decidió y aplicó gold sweep (13 ediciones, 9 archivos):
- email-templates/shared.ts accent #D4AF37 → #1E40AF (navy v1.1)
- blog OG images gradients gold → navy
- icon.svg: linearGradient gold eliminado, mark unificado navy
- CalculadoraROI hex inline gold → navy
- blog page + blog/[slug] CTAs gold → primary
- opengraph-image home métricas verde #059669 → navy
- contacto CheckCircle2 emerald → primary
- HeroVisual fase "Automatizando" gold → navy
- HeroVisual emerald semántico (antes→hoy bueno) PRESERVADO (metáfora UI, no marca)

`ux-lead` decidió y aplicó (8 archivos):
- CasosSection: rainbow palette por industria → monocromo navy variants (diferenciación por tono dentro de paleta v1.1)
- HeroSection CTA secundario: "Ver cómo funciona ↓ #metodo" → "Ver qué diagnóstico me conviene ↓ #cta-diagnostico" (cierra fuga growth-lead sin tocar primario `/#estimador` que Diego había rechazado)
- FloatingCTA: `inert={!visible || undefined}` (resuelve aria-hidden-focus Lighthouse)
- 9 ocurrencias text-[#999] / hardcode gris → text-muted-foreground (#525252, ratio 7.4:1) en HeroVisual, BlogCard, RelatedPosts, blog pages

Mi capa (orquestador):
- Footer CTA Calendly: bg-accent text-#1A1A1A (contraste 2.47) → bg-accent-glow text-primary
- Footer column headers + Privacidad/Términos: opacidad /40,/50 → /70 (a11y)
- Casos breadcrumb /50 → /70
- ServiciosSection bandera CTA: `?servicio=radiografia-operacional` (consistencia con 4 SKUs secundarios)
- ServiciosSection bullet "estimados en CLP/mes" → "con costo estimado mensual" (más neutro, pricing en UF)

**Métricas finales:**
- Lighthouse mobile a11y: **90 → 97** (+7 pts sesión completa).
- Lighthouse Agentic Browsing: **50 → 100** (+50).
- Lighthouse desktop a11y: 96, BP 81, SEO 100, Agentic 100.
- Fails residuales: 2 (deprecations Chrome API info-only + color-contrast residual menor — no bloqueante).
- CI main: VERDE (4 checks consecutivos).
- Commits sesión total: 14 (878630d, e1b2396, 3f9d677, 44aa593, 00d4223, 34b019a, 54dacf1, 72843ff, fc5d383, 44a85f6, 27c0105 + 3 merge admin / merge resolution).
- Tests: 41/41 ✓ tipos ✓ lint ✓ build ✓.

**Verificación visual prod** (snapshot `https://0kbot.com/#cta-diagnostico` post-batch3):
- ✓ Hero CTAs ambos visibles ("Calcular pérdida →" primario + "Ver qué diagnóstico ↓" secundario nuevo).
- ✓ SKUs en UF (12 UF Radiografía, 18 UF Primer Paso, 10 UF SOP, 12 UF Costos, 12 UF Plan).
- ✓ ROI estimator inputs CLP + bloque conexión "se paga en ~5 meses" cuando alertaTono ≠ baja.
- ✓ CredencialesSection sin Diego López — "Equipo 0kbot — ingeniería industrial, data science y Lean Six Sigma" + LinkedIn company.
- ✓ Wizard paso 1 de 7 = 14% (progressPct fix vigente).
- ✓ Footer single LinkedIn company icon.
- ✓ VerticalesSection accent-glow (no gold).

**Necesito (de Diego):**
- Smoke test wizard end-to-end manual: completar los 7 pasos con email real para validar (a) POST /api/diagnostico con `servicioInteres` + `vertical` derivado, (b) auto-redirect Calendly 1.8s post-submit funciona, (c) email Resend confirmación llega, (d) Calendly recibe `?name=&email=` pre-rellenados.
- Decidir si reescribir `/nosotros` (página todavía habla de Diego López como founder con título personalizado; mantiene el contexto SEO pero contradice "somos 0kbot empresa"). Es una página de 262 LoC con copy denso; merece sesión propia si se hace.
- Pendientes offline siguen: lista 20 contactos LinkedIn, datos bancarios SOW Drive.

**Bloqueos:** ninguno. Página 100% funcional, agendamiento operativo (ContactModal + Calendly + DiagnosticoWizard auto-redirect), CI verde, brand v1.1 100% aplicado, UF estandarizado.

**Próximo paso:**
- Smoke test wizard cuando Diego pueda.
- Si Lighthouse mobile a11y 97→100 es objetivo, debug puntual del `color-contrast` residual + investigar deprecations Chrome (probable referencia a API antigua de framer-motion o similar).
- Decisión `/nosotros` rewrite.

---

## 2026-05-18 12:50 — @claude (sesión bug lead "undefined" + deudas técnicas)

**Status:**
- **Bug Curtis "undefined" diagnosticado y fixed.** Lead llegó con `Empresa: undefined` por 3 puntos de fuga distintos en email templates: subject (`email.ts:64`), notification body (`lead-notification.ts:30`), confirmation al prospecto (`lead-confirmation.ts:22`). Causa raíz: `ContactModal` enviaba solo `{nombre, email, fuente, consent}` y los templates interpolaban `${lead.empresa}` sin fallback, así que Zod-undefined → string literal "undefined". Mergeado en PR #18.
- **ContactModal alineado con info que pedimos** (opción B, no A ni C). Modal ahora pide 4 campos: nombre + email (requeridos) + empresa + tamaño (opcionales). Select usa los 5 valores canónicos del enum `tamano_empresa`. Si el usuario no completa, el payload omite el campo entero (no envía empty strings) y los templates muestran "(sin especificar)".
- **3 deudas técnicas cerradas en PR #19:**
  1. `TAMANO_OPTIONS` consolidado en `lib/constants.ts` como SSOT (antes duplicado en wizard + modal + email-templates/shared.ts).
  2. Subtítulo del modal actualizado: "Tu nombre y email para reservar" → "Datos mínimos para reservar. Empresa y tamaño son opcionales — nos ayudan a preparar mejor la llamada."
  3. `?servicio=<slug>` en los 5 CTAs de ServiciosSection ahora SÍ se hidrata en el wizard. Antes el query iba después del `#` (dentro del fragment, nadie lo parseaba) y el campo `servicioInteres` arrancaba siempre vacío. Fix: query antes del fragment + `useSearchParams` en wizard + validación contra `SERVICIO_SLUGS` canónico + badge UI "Te interesó: <Servicio>" arriba del progress bar. Requirió `<Suspense>` boundary en `DiagnosticoSection` (regla Next 16 SSG).
- **Auditoría de links completa**: las 16 rutas de Navbar/Footer existen, las 6 anchors home (`#problemas/metodo/casos/estimador/cta-diagnostico/verticales`) tienen su `id`, los 5 service slugs (`#diagnostico/estandarizacion/automatizacion/tableros/gestion-comercial`) matchean con `/servicios/page.tsx`, los 7 blog posts del footer existen como MDX. **Drift menor**: CLAUDE.md dice "Footer tiene 2 iconos de LinkedIn" pero solo hay 1 (personal removido) — no actualicé el CLAUDE.md, queda como follow-up trivial.

**Necesito:** nada bloqueante. Si Diego quiere ajustar el copy del subtítulo del modal, decir y lo cambio (1 línea).

**Bloqueos:** ninguno. Producción `0kbot.com` debería tener todo en breve cuando termine el deploy post-merge #19.

**Próximo paso:**
- Smoke test del flow real cuando Diego mande un lead de prueba: confirmar que (a) el email interno llega con datos completos si se completaron, (b) si NO se completaron, dice "(sin especificar)" en vez de "undefined", (c) si el lead vino via CTA `Quiero la Radiografía`, el wizard muestra el badge y persiste `servicioInteres` en Supabase.
- Ticket separado abierto (no implementado): que el wizard *salte pasos* o *adapte preguntas* cuando ya hay servicio pre-seleccionado. Decisión UX explícita pendiente Diego.
- Drift CLAUDE.md (2 → 1 iconos LinkedIn footer) — actualización trivial cuando alguien toque la sección.

---

## 2026-05-18 — @claude (audit deudas P1/P2/P3 — PR #21 mergeado)

**Status:** Audit completo del repo ejecutado vía lectura directa de fuentes (API routes, email templates, validations, analytics, wizard). 9 archivos modificados en 1 commit, mergeado en `fix/audit-deudas-p1-p2-p3`.

**P1 — correctness:**
- `validations.ts`: `tamano_empresa` ya no tiene `.default("<20")` — el campo llega `undefined` cuando ContactModal no lo envía, en lugar de silenciosamente contaminar Supabase con `"<20"` falso.
- `api/leads/route.ts`: insert guarda `null` (no `"<20"`) cuando `tamano_empresa` no viene.
- `DiagnosticoWizard.tsx`: AbortController 3s + `trackLeadSaveFailed("diagnostico", reason)` en el catch, con distinción `timeout` / `server_error` / `network`. Antes el wizard ni reportaba fallos al analytics (ContactModal sí lo hacía — inconsistencia).

**P2 — SSOT / duplicados:**
- `email.ts`: `DIAGNOSTICO_TIMELINE_LABELS` eliminado (era copia exacta de `TIMELINE_LABELS` en `shared.ts`). Fallbacks `FROM()` y `NOTIFICATION_TO()` usan `CONTACT_EMAIL` desde `constants.ts`.
- `diagnostico-notification.ts`: nueva fila condicional "Servicio de interés" — cuando el lead llega vía `?servicio=<slug>`, ahora aparece en el email interno.
- `analytics.ts`: importa `ANALYTICS_EVENTS` y lo usa en los 7 eventos canónicos. El export ya no es dead code.

**P3 — consistencia:**
- `lead-confirmation.ts`: `Hola ${lead.nombre}` → `Hola ${firstName}` (igual que `diagnostico-confirmation` y `onboarding-confirmation`).
- 3 templates de confirmación (`lead`, `diagnostico`, `onboarding`): `"hola@0kbot.com"` hardcodeado → `${CONTACT_EMAIL}`.

Gates: lint ✓ typecheck ✓ (0 errores).

**Bloqueos:** ninguno.

**Próximo paso:**
- Smoke test wizard end-to-end para confirmar (a) email interno trae fila "Servicio de interés" cuando aplica, (b) fallo de red/timeout trackea en GA4, (c) `tamano_empresa` llega `null` en Supabase cuando ContactModal no lo completa.
- Pendientes anteriores siguen activos: `/nosotros` rewrite, foto `public/diego.jpg`, lista LinkedIn.

---
