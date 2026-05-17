# 0kbot Landing — Contexto del proyecto para Claude

## ¿Qué es este proyecto?

Landing page generalista de **0kbot** — consultora automatizada de mejora de procesos y automatización para pymes chilenas (vertical principal de la home), con **vertical especializada en ciberseguridad y cumplimiento normativo** que vive en el subdominio `seguridad.0kbot.com` (repo `0kbot-seguridad`). El objetivo de cada decisión de código es maximizar conversiones (leads → diagnósticos → clientes) y derivar al subdominio a los visitantes de sectores regulados.

**Foco home `0kbot.com`:** Mejora de procesos + automatización para pymes 20-150 personas, metodología Lean en 12 semanas.
**Vertical seguridad `seguridad.0kbot.com`:** Diagnósticos de seguridad accionables. Centinela (motor regulatorio que mapea NIST CSF ↔ Ley 21.663/21.719/ANCI) es uno de los productos que se venden ahí, no la propuesta de la home.
**Fundador:** Diego López — Ing. Civil Industrial + MSc Data Science + Lead Pentester.
**Audiencia home generalista:** Pymes operativas de 20-150 personas en Chile (distribución, manufactura, retail, servicios, salud, gastronomía, etc.).
**Audiencia vertical seguridad:** OIVs designadas por ANCI, sectores regulados (Ley 21.663/21.719), proveedores de grandes empresas con exigencias contractuales de cumplimiento.

> Este repo es el funnel de intake generalista (landing + form → Supabase leads). El motor regulatorio Centinela, SKUs y modelo de negocio de la vertical seguridad están en `0kbot-seguridad/`. La sección `VerticalesSection` de la home + el panel post-completion del `DiagnosticoWizard` (cuando el sector es regulado) son los puentes hacia el subdominio.

---

## Comandos esenciales

```bash
npm run dev        # desarrollo local
npm run build      # build producción (usa placeholders si no hay .env.local)
npm run lint       # ESLint — debe pasar a 0 errores
npm run typecheck  # tsc --noEmit — debe pasar a 0 errores
```

Siempre ejecutar `npm run lint && npm run typecheck && npm run build` al terminar cambios.
Para build sin `.env.local`: prefija con las vars de entorno del `.env.example`.

---

## Stack técnico

- **Next.js 16** App Router (16.2.6) + React 19, TypeScript 5.8 strict, `src/` directory. Build con `--webpack` flag (ver `package.json`); ver lección `lesson_next16_upgrade_bundle_analyzer` en memoria.
- **Supabase** PostgreSQL — tabla `leads` con campo JSONB `diagnostico_data`
- **Resend** — email transaccional (6 templates en `src/lib/email-templates/`)
- **Zod** — validación servidor + cliente; React Hook Form en forms
- **Tailwind CSS** + Radix UI + shadcn/ui — sistema de componentes
- **Framer Motion** — animaciones `whileInView`
- **next-mdx-remote** — blog MDX en `src/content/blog/`
- **GTM + Google Analytics + Meta Pixel** — inyectados via `<Script>` en `layout.tsx`

---

## Arquitectura de archivos

```
src/app/                   # páginas y API routes (App Router)
src/app/api/               # 3 routes: leads, diagnostico, onboarding
src/components/
  home/                    # 14 secciones de la homepage (13 activas + StatsSection reservada)
  blog/                    # BlogCard, CategoryBadge, ShareButtons, RelatedPosts
  layout/                  # Navbar.tsx, Footer.tsx
  ui/                      # ContactModal, DiagnosticoWizard, OpenModalButton, TrackedLink, etc.
src/lib/
  constants.ts             # ÚNICA fuente de verdad para magic strings
  supabase.ts              # createAdminClient() — usar SIEMPRE esto
  rate-limit.ts            # checkRateLimit() — in-memory, 5 req/min/IP
  validations.ts           # schemas Zod (leadSchema, diagnosticoSchema, onboardingSchema)
  email.ts                 # funciones de envío (importan de email-templates/)
  email-templates/         # 6 archivos *.ts — uno por función de email
  blog.ts                  # getAllPosts(), getPostBySlug(), getFeaturedPost()
  casos.ts                 # datos hardcodeados de 6 escenarios de industria
src/content/blog/          # *.mdx — posts del blog con frontmatter estricto
public/                    # favicon.ico, icon.png (1024×1024, usado en JSON-LD)
public/brand/              # 0kbot-logo.svg (horizontal), 0kbot-logo-dark.svg (footer), 0kbot-mark.svg (isotipo)
```

---

## Convenciones críticas

### Magic strings → siempre usar constants.ts
```ts
import { LEAD_SOURCES, LEAD_ESTADOS, CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";
```
Nunca hardcodear `"hola@0kbot.com"`, la URL de Calendly, ni strings de fuente/estado de leads.

### Supabase admin — siempre createAdminClient()
```ts
import { createAdminClient } from "@/lib/supabase";
const supabase = createAdminClient();
```
Nunca importar directamente de `@supabase/supabase-js` en API routes.

### Patrón de API routes (orden obligatorio)
1. Rate limit (`checkRateLimit`) → return 429 si `!allowed`
2. Parse JSON → return 400 si falla
3. Validar con Zod `safeParse` → return 422 si `!success`
4. Insert Supabase → return 500 si `dbError` (no continuar si falla)
5. Emails con `Promise.allSettled` (no bloquean la respuesta)

### Fonts — self-hosteadas via next/font/google
No agregar `@import` de Google Fonts en CSS. Todos los fonts se cargan en `layout.tsx` con `next/font/google`.

### Blog — featured posts
`regularPosts` filtra por slug, no por el flag `featured`:
```ts
const regularPosts = allPosts.filter((p) => p.slug !== featuredPost?.slug);
```

### Blog — frontmatter MDX obligatorio
```yaml
---
title: "..."        # max ~60 chars para SEO
excerpt: "..."      # max ~155 chars (usado en og:description)
date: YYYY-MM-DD
author: "Diego López"
category: "Automatización" | "IA para Pymes" | "Mejora de Procesos" | "Tutoriales"
tags: ["tag1", "tag2"]
featured: true | false   # máximo 1 post con true a la vez
# coverImage: "/images/..."  # opcional
---
```
`readingTime` se calcula automáticamente — no va en frontmatter.

### Canonical URLs
Hardcodeadas a `https://0kbot.com/[ruta]` en metadata de cada página. En blog usas `NEXT_PUBLIC_APP_URL` para generación dinámica.

### Nueva página — checklist obligatorio
1. `export const metadata` con `title`, `description`, `keywords`, `alternates.canonical`
2. JSON-LD apropiado: `FAQPage` si tiene acordeón, `BreadcrumbList` si es página interna, `Article` si es blog, `HowTo` si es proceso
3. `opengraph-image.tsx` si es página de marketing clave
4. `export const revalidate` si tiene contenido dinámico o ISR
5. `npm run lint && npm run build` antes de declarar terminado
6. **Verificación visual post-deploy**: para cualquier cambio que altere UI visible, usar Chrome DevTools MCP (`take_screenshot` sobre el preview de Vercel) y comparar contra la expectativa antes de marcar la tarea completa. `lint` y `build` verifican que el código compila, no que el cambio se ve bien.

### Commits
- Formato: `tipo: descripción corta en español` (ej: `fix: corregir silent failure en onboarding API`)
- Tipos: `feat` / `fix` / `chore` / `content` (para blog/copy) / `seo`
- Sin emojis. Sin `WIP` al main.

---

## Homepage — secciones activas (orden actual en `page.tsx`)

```
1.  HeroSection             — H1 "No vendemos IA. Vendemos lunes tranquilos." + dashboard típico + CTA #estimador
2.  PainPointsSection       — 6 dolores en bento 2×3 (id="problemas")
3.  SolucionSection         — Qué/Cómo/Resultado en 3 columnas
4.  MetodoSection           — Método 0kbot OS: Detectar/Ordenar/Automatizar/Medir (id="metodo")
5.  ROIEstimatorSection     — 3 inputs → costo mensual + costo anual + alerta tonal (id="estimador")
6.  NoSomosSoftwareSection  — 6 objeciones "lo que NO hacemos" (fondo oscuro)
7.  CasosSection            — 3 escenarios de industria (id="casos")
8.  VerticalesSection       — Puente a vertical seguridad.0kbot.com (fondo oscuro + acento dorado, id="verticales")
9.  CredencialesSection     — Perfil del founder
10. FAQSection              — 6 preguntas (incluye pricing en UF)
11. DiagnosticoSection      — DiagnosticoWizard inline (6 pasos, id="cta-diagnostico")
12. CTAFinalSection         — "Cada mes que esperas, el número crece."
13. BlogPreviewSection      — 3 artículos recientes
+   FloatingCTA             — mobile only, sticky bottom
```

**StatsSection** existe como componente pero NO está en la homepage — solo activar cuando haya datos reales de clientes.

**ComparacionSection y PrincipiosSection** existen como archivos en `src/components/home/` pero ya NO están en `page.tsx` desde el rediseño v2. Conservar archivos por si se rescatan; decisión final pendiente (Diego).

**Anchors del navbar:** `/#problemas`, `/#metodo`, `/#casos`, `/blog`. CTA primario del navbar abre ContactModal.

## Flujo de conversión de leads

```
HomePage CTAs (Hero/CTA Final/Floating)
  → ContactModal (nombre + email)
  → POST /api/leads → Supabase + email → redirect Calendly

HomePage DiagnosticoSection
  → DiagnosticoWizard (6 pasos: tamaño, industria, dolor, intentadoAntes, timeline, contacto)
  → POST /api/diagnostico → Supabase + email → Calendly

/contacto → ContactModal (captura lead) → Calendly
/contacto?dolor=X → muestra dolor en UI + ContactModal → Calendly
/onboarding → POST /api/onboarding (lead calificado con presupuesto y plazo)
```

---

## SEO — reglas estrictas

- Cada página tiene `export const metadata` con `title`, `description`, `keywords`, `alternates.canonical`
- JSON-LD schemas: `FAQPage` en páginas con FAQ, `BreadcrumbList` en páginas internas, `Article` en blog posts, `HowTo` en `/como-trabajamos`
- Schema global en `layout.tsx`: `LocalBusiness` (con `logo`, `geo`, `contactPoint`), `Person` (Diego López), `WebSite` (con `SearchAction`)
- Blog: `revalidate = 3600` (ISR cada hora)
- OG images dinámicas por sección (`opengraph-image.tsx` en cada directorio relevante)

---

## Colores de marca — Brand Brief v1.1 (canónico desde 2026-05-15)

Monocromo + 1 acento. Paleta aplicada en branch `refresh/brand-v1-1`.

| Token CSS | Hex | Tailwind class | Uso |
|---|---|---|---|
| `--primary` | `#1E40AF` | `bg-primary` / `text-primary` | CTAs, links, eyebrows, énfasis (Tailwind blue-800) |
| `--accent` | `#1D4ED8` | `bg-accent` / `text-accent` | Hover/active de primary (blue-700) |
| `--accent-glow` | `#93C5FD` | `bg-accent-glow` / `text-accent-glow` | Destacar texto/iconos sobre `bg-primary` navy (blue-300) |
| `--background` | `#FAFAF7` | `bg-background` | Fondo principal off-white tibio |
| `--foreground` | `#0A0A0A` | `text-foreground` | Texto principal casi negro |
| `--muted-foreground` | `#525252` | `text-muted-foreground` | Texto secundario (neutral-600) |
| `--border` | neutral-200 | `border-border` | Separadores |

**Tipografía v1.1:**
| Clase | Familia | Variable CSS |
|---|---|---|
| `font-heading` | Roboto Slab (slab serif) | `--font-roboto-slab` |
| `font-body` / `font-sans` | Inter | `--font-inter` |
| `font-display` | Playfair Display | `--font-playfair` (citas editoriales) |
| `font-mono` | JetBrains Mono | `--font-jetbrains-mono` |

**Reglas operativas:**
- NO usar gold `#D4AF37` (eliminado en v1.1 — quedó como decisión Fase 2 deprecada).
- NO usar paletas rainbow (emerald/amber/red/purple por sección) — el brief dice monocromo + 1 acento.
- Para destacar sobre `bg-primary` navy, usar `text-accent-glow` (no `text-accent` que es casi el mismo navy).
- Space Grotesk + DM Sans siguen cargados como fallback durante migración; no usar para piezas nuevas.

---

## Voz de marca — guía rápida

- **Honesta:** Mencionar que el sitio está en fase de lanzamiento en casos
- **Práctica:** Enfocada en resultados medibles, sin hype tecnológico
- **Chilena:** Usar "pymes", "plata", "operación", contexto local
- **Lean:** Siempre referenciar metodología de 12 semanas y 4 fases
- Copy auditado y consistente — contradicción "IA" resuelta desde blog/contenido, no desde el hero

---

## Reglas de colaboración con Claude

- **Respuestas cortas y directas.** Sin preambles ni resúmenes al final. Si la respuesta es 1 línea, que sea 1 línea.
- **Honestidad ante todo.** Incluir caveats explícitos y % de confianza cuando la respuesta no es segura. Ej: "esto debería funcionar (85% — no lo he verificado en build)".
- **Mente creativa y proactiva.** Proponer refactors, mejoras y soluciones fuera de la caja aunque no hayan sido pedidas. Pensar en lo práctico y factible para un equipo pequeño.
- **Nunca editar copy sin confirmación explícita.** El copy está auditado. Preguntar siempre antes de cambiar texto visible al usuario.
- **Ante dos enfoques válidos, preguntar.** No asumir. Plantear las opciones con criterio y recomendación clara.

---

## Lo que NO hacer

- No agregar `recharts` u otras dependencias sin justificación (fue eliminada)
- No crear funciones `getAdminClient()` locales en API routes
- No retornar 200 cuando un insert de Supabase falla (`dbError` truthy → 500)
- No usar `allPosts.filter((p) => !p.featured)` en blog — usar filtro por slug
- No hardcodear la URL de Calendly ni el email de contacto fuera de `constants.ts`
- No agregar `@import` de Google Fonts en CSS
- No saltarse `npm run lint` antes de dar trabajo por terminado
- **No duplicar copy de casos**: los escenarios por industria viven en `src/lib/casos.ts` como única fuente de verdad. La homepage (`CasosSection.tsx`) consume de ahí y mantiene sólo `uiMeta` (iconos, colores, métrica destacada) por `slug`. Nunca reintroducir copy inline ahí.
- **No confiar en `npm run build` local en Windows**: `@vercel/og` falla al resolver paths de fonts con `fileURLToPath` (prerender error en rutas `/blog/[slug]/opengraph-image`). El CI en Linux sí pasa y Vercel deploya bien. Verificar con `npm run lint` local + CI de GitHub, no con build local.
- **No commitear sin `eol=lf` en `.gitattributes`**: repo Windows con `autocrlf=true` rompe SRI integrity hash en producción Vercel/Linux (los assets se sirven con CRLF en local pero LF en build remoto, y el hash inline no matchea). Si trabajás con SRI, computar hashes desde el blob git (`git hash-object` + lectura de blob), no desde el archivo en disco.
- **No duplicar la lógica del ROI estimator**: `ROIEstimatorSection.tsx` es la versión simple embebida en home (3 inputs, costo mensual+anual). `src/app/calculadora-roi/CalculadoraROI.tsx` es la versión completa (5 inputs, ROI 12m + payback + inversión). La sección embebida linkea a la página completa al final — no convertir el embebido en duplicado de la calculadora.

---

## Decisiones de copy ya tomadas (no revisitar sin preguntar)

- **`/casos` NO lleva disclaimer** sobre si los escenarios son reales o ilustrativos. Decisión del usuario (2026-04-21).
- **Pregunta FAQ "¿Cuánto cuesta esto?" → "¿Cuánto cuesta un proyecto de mejora de procesos?"** (forma larga, unificada con JSON-LD para evitar discrepancia en structured data).
- **Footer tiene 2 iconos de LinkedIn**: primero empresa (`/company/0kbot`), luego personal (`/in/diego-lopez-dinamarca`). No consolidar.
- **Hero v2 (2026-04-27)**: H1 simplificado a "No vendemos IA. Vendemos lunes tranquilos." con eyebrow "Mejora de procesos para pymes en Chile" encima (conserva keyword SEO). Badge superior cambió a "Consultoría de procesos + automatización para pymes chilenas".
- **CTA primario del Hero**: "Calcular mi pérdida operativa →" → `/#estimador` (sección embebida, no abre modal).
- **CTA secundario del Hero**: "Ver cómo funciona ↓" → `/#metodo`.
- **CTAFinal v2 (2026-04-27)**: "Agendar diagnóstico gratuito →" con microcopy "Si no vemos una oportunidad clara de mejora, te lo diremos directo."
- **Método 0kbot OS**: las 4 fases son Detectar / Ordenar / Automatizar / Medir (ese es el orden y nombramiento canónico del servicio). El archivo es `MetodoSection.tsx` (rename de `ComoFuncionaSection.tsx` el 2026-04-27).

---

## Pendientes conocidos (post rediseño v2, 2026-04-27 + sección puente 2026-05-13)

- **`ComparacionSection` redundante con `PainPointsSection` v2**: ambas tienen estructura "problema → solución" con 6 cards. Ya fue retirada de `page.tsx`; archivo conservado para posible rescate. Decidir si eliminar permanentemente.
- **Páginas /servicios, /como-trabajamos, /nosotros fuera del nav primario**: siguen vivas (SEO + footer) pero el navbar ya no las lista. Si en analítica se ve drop fuerte de tráfico interno hacia ellas, considerar reincorporarlas o consolidar contenido al home.
- **Logo `0kbot-logo-dark.svg` en footer**: derivado del logo principal, con wordmark blanco + acento dorado. Si visualmente se ve flojo sobre `bg-primary`, ajustar variantes.
- **Verificar tracking en GA4 Debug View**: eventos nuevos `mobile_menu_open`, `roi_estimator_started`, `home_estimator_computed`, y `cta_click` con locations nuevas (`hero`, `hero_secondary`, `estimador`, `navbar`).
- **Cross-domain GTM linker pendiente (config manual fuera del repo)**: para que GA4 sticheé sesiones cross-dominio `0kbot.com ↔ seguridad.0kbot.com` los eventos `centinela_cta_click` + `cross_domain_referral` (sección puente + wizard post-completion) necesitan Google tag linker activo en el contenedor GTM-TKKTNXBS. Sin esto el evento se registra pero la sesión se rompe al cruzar el dominio.
- **Schema Supabase `leads`**: si se quiere persistir el flag `regulated_sector_detected` para segmentar leads en CRM, agregar campo opcional `vertical` o derivar desde `diagnostico_data.industria` (ya viene en JSONB). Hoy el evento solo se trackea en GA4.

---

## Memoria persistente

El sistema de memoria automática guarda preferencias y contexto cross-sesión en `~/.claude/projects/<id-del-proyecto>/memory/`. El path absoluto exacto depende del entorno (Codespaces, macOS/Linux, Windows) — Claude lo resuelve automáticamente y no debe hardcodearse aquí.

Índice: `MEMORY.md` — contiene perfil de usuario, contexto del proyecto, feedback acumulado.
