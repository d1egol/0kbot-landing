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
