# 0kbot Landing — Contexto del proyecto para Claude

## ¿Qué es este proyecto?

Landing page de generación de leads para **0kbot**, consultora chilena de mejora de procesos y automatización para pymes. El objetivo de cada decisión de código es maximizar conversiones (leads → diagnósticos → clientes).

**Fundador:** Diego López — Ing. Civil Industrial (UDD), MSc Data Science (PUC), Lean Six Sigma Green Belt.
**Audiencia:** Pymes chilenas de 10–200 personas con operaciones desordenadas.
**Propuesta de valor:** Metodología Lean de 12 semanas, resultados medibles, sin cobro si no hay ROI.

---

## Comandos esenciales

```bash
npm run dev       # desarrollo local
npm run build     # build producción (usa placeholders si no hay .env.local)
npm run lint      # ESLint — debe pasar a 0 errores
```

Siempre ejecutar `npm run lint && npm run build` al terminar cambios.
Para build sin `.env.local`: prefija con las vars de entorno del `.env.example`.

---

## Stack técnico

- **Next.js 14** App Router, TypeScript 5.8 strict, `src/` directory
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
  home/                    # 13 secciones de la homepage (12 activas + StatsSection reservada)
  blog/                    # BlogCard, CategoryBadge, ShareButtons, RelatedPosts
  layout/                  # Navbar.tsx, Footer.tsx
  ui/                      # ContactModal, DiagnosticoWizard, etc.
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

### Commits
- Formato: `tipo: descripción corta en español` (ej: `fix: corregir silent failure en onboarding API`)
- Tipos: `feat` / `fix` / `chore` / `content` (para blog/copy) / `seo`
- Sin emojis. Sin `WIP` al main.

---

## Homepage — secciones activas (orden actual en `page.tsx`)

```
1.  HeroSection          — H1 + card diagnóstico típico + CTA modal
2.  PainPointsSection    — 4 dolores operativos
3.  SolucionSection      — Qué/Cómo/Resultado en 3 columnas
4.  CredencialesSection  — Perfil del founder
5.  ComoFuncionaSection  — Timeline 4 etapas, 12 semanas
6.  ComparacionSection   — 6 problemas + soluciones concretas
7.  CasosSection         — 3 escenarios de industria (con disclaimer)
8.  PrincipiosSection    — 3 principios de trabajo
9.  FAQSection           — 6 preguntas (incluye pricing en UF)
10. BlogPreviewSection   — 3 artículos recientes
11. DiagnosticoSection   — DiagnosticoWizard inline (6 pasos)
12. CTAFinalSection      — "Cada mes que esperas, el número crece"
+   FloatingCTA          — mobile only, sticky bottom
```

**StatsSection** existe como componente pero NO está en la homepage — solo activar cuando haya datos reales de clientes.

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

## Colores de marca (Tailwind hardcoded — no cambiar sin motivo)

| Token | Hex | Uso |
|-------|-----|-----|
| Primary blue | `#1B5FA6` | CTAs, links, accents |
| Gold accent | `#D4AF37` | Botón final CTA |
| Background | `#F7F5F0` | Fondo warm |
| Text dark | `#1A1A1A` | Headings |
| Border | `#E5E2DB` | Separadores |

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

---

## Decisiones de copy ya tomadas (no revisitar sin preguntar)

- **`/casos` NO lleva disclaimer** sobre si los escenarios son reales o ilustrativos. Decisión del usuario (2026-04-21).
- **Pregunta FAQ "¿Cuánto cuesta esto?" → "¿Cuánto cuesta un proyecto de mejora de procesos?"** (forma larga, unificada con JSON-LD para evitar discrepancia en structured data).
- **Footer tiene 2 iconos de LinkedIn**: primero empresa (`/company/0kbot`), luego personal (`/in/diego-lopez-dinamarca`). No consolidar.

---

## Memoria persistente

El sistema de memoria automática guarda preferencias y contexto cross-sesión en `~/.claude/projects/<id-del-proyecto>/memory/`. El path absoluto exacto depende del entorno (Codespaces, macOS/Linux, Windows) — Claude lo resuelve automáticamente y no debe hardcodearse aquí.

Índice: `MEMORY.md` — contiene perfil de usuario, contexto del proyecto, feedback acumulado.
