# 0kbot — Automatización de procesos para pymes en Chile

Sitio web de 0kbot, consultora de mejora y automatización de procesos operativos para pymes chilenas.

**URL producción:** [https://0kbot.com](https://0kbot.com)

---

## Stack técnico

| Tecnología | Uso |
|---|---|
| **Next.js 14.2** | Framework (App Router) |
| **TypeScript** | Lenguaje |
| **Tailwind CSS** | Estilos + `@tailwindcss/typography` |
| **Framer Motion** | Animaciones |
| **Supabase** | Base de datos (PostgreSQL) — tabla `leads` |
| **Resend** | Emails transaccionales |
| **Calendly** | Agendamiento de diagnósticos |
| **Vercel** | Deploy (auto-deploy en push a `main`) |
| **MDX** | Blog (next-mdx-remote, gray-matter, reading-time) |

---

## Estructura del proyecto

```
src/
├── app/                    # Rutas (App Router)
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Layout global + SEO metadata
│   ├── blog/               # Blog listado + [slug]
│   ├── contacto/           # Página de contacto → CTA a Calendly
│   ├── servicios/          # Servicios
│   ├── soluciones/         # Soluciones por desafío
│   ├── casos/              # Casos y resultados
│   ├── como-trabajamos/    # Proceso de 12 semanas
│   ├── nosotros/           # Sobre 0kbot
│   ├── onboarding/         # Formulario pre-reunión
│   ├── recursos/           # Recursos
│   └── api/
│       ├── leads/route.ts  # POST: guarda lead en Supabase + envía email
│       └── onboarding/route.ts  # POST: guarda datos de onboarding
├── components/
│   ├── home/               # Secciones del homepage
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # ContactModal, OpenModalButton, FloatingCTA, FAQAccordion
│   └── blog/               # BlogCard, CategoryBadge, ShareButtons, RelatedPosts
├── content/
│   └── blog/               # Artículos .mdx (10 publicados)
├── lib/
│   ├── blog.ts             # Utilidades para leer posts MDX
│   ├── supabase.ts         # Cliente Supabase
│   ├── resend.ts           # Cliente Resend
│   └── validations.ts      # Schemas Zod (leadSchema, diagnosticoSchema, onboardingSchema)
├── types/
│   └── index.ts            # Tipos TypeScript del proyecto
└── styles/
    └── globals.css          # Estilos globales + Tailwind
docs/                        # Documentación operacional (no es código del sitio)
```

---

## Flujo de conversión principal

1. **Usuario** hace clic en cualquier CTA del sitio → se abre **ContactModal**
2. **ContactModal** pide solo 2 campos: **nombre** y **email** (~5 segundos)
3. Al enviar:
   - Se guarda el lead en Supabase (fire-and-forget, no bloquea)
   - Se envía email de notificación vía Resend
   - Redirect inmediato a **Calendly** con `?name=X&email=Y` prefilled
4. Usuario agenda directamente en Calendly sin repetir datos

**Calendly URL:** `https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot`

---

## Secciones del Homepage (orden)

1. **HeroSection** — H1 + propuesta de valor + tarjeta de resultados de diagnóstico + credenciales bar
2. **PainPointsSection** — Dolores comunes de pymes
3. **CredencialesSection** — Perfil de Diego (Ing. Civil Industrial UDD, MSc Data Science PUC)
4. **ComoFuncionaSection** — Timeline de 12 semanas (4 fases)
5. **CasosSection** — Escenarios con métricas reales
6. **FAQSection** — 6 preguntas frecuentes (incluye precio en UF)
7. **DiagnosticoSection** — DiagnosticoWizard (5 pasos de calificación)
8. **CTAFinalSection** — CTA final de urgencia
9. **FloatingCTA** — Botón flotante en mobile

> Ver `docs/prompts/PROMPT-HOMEPAGE-CRO.md` para decisiones de diseño y razón de cada sección.

---

## CTAs del sitio

| Ubicación | Texto | Acción |
|---|---|---|
| Hero primario | "Agendar diagnóstico gratis →" | Abre ContactModal |
| Hero secundario | "Ver cómo trabajamos ↓" | Scroll a #como-funciona |
| DiagnosticoSection | DiagnosticoWizard (5 pasos) | Calificación → éxito + Calendly |
| CTAFinalSection | "Quiero números, no suposiciones →" | Abre ContactModal |
| FloatingCTA (mobile) | "Ver cuánto estoy perdiendo →" | Abre ContactModal |
| Navbar | "Agendar diagnóstico gratis" | Abre ContactModal |
| Footer strip | "Agendar diagnóstico gratis" | Link directo a Calendly |
| ContactModal submit | "Ir a agendar ahora →" | Guarda lead + redirect Calendly |
| Contacto page | "Agendar ahora →" | Link directo a Calendly |

---

## Base de datos (Supabase)

### Tabla `leads`
| Campo | Tipo | Descripción |
|---|---|---|
| id | UUID | PK auto-generado |
| nombre | text | Nombre del lead |
| email | text | Email del lead |
| empresa | text | Opcional, default "(sin especificar)" |
| cargo | text | Opcional |
| tamano_empresa | enum | `<20`, `20-50`, `50-100`, `100-200`, `>200` — default `<20` |
| problema | text | Opcional |
| fuente | text | Origen: `cta_calendly`, `onboarding_form`, `diagnostico_wizard`, `landing_diagnostico`, etc. |
| estado | enum | `nuevo`, `contactado`, `calificado`, `descartado` — default `nuevo` |
| diagnostico_data | jsonb | Datos extra del diagnóstico (si aplica) |
| created_at | timestamptz | Fecha de creación |

---

## Variables de entorno

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
NEXT_PUBLIC_GA_ID=           # Google Analytics (opcional)
NEXT_PUBLIC_META_PIXEL_ID=   # Meta Pixel (opcional)
```

---

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Verificar build de producción
```

---

## Deploy

Push a `main` → Vercel auto-deploy.

**Vercel Project ID:** `prj_VLTOIj20Ywtv0jh2seiKvxkiSWi8`
**Vercel Team:** `team_tE7eDQKAqF2FCP5D2RJESg1Y`

---

## Documentación adicional

Toda la documentación operacional está en `docs/`:
- `docs/prompts/` — Guías técnicas (sistema de blog)
- `docs/email-templates/` — Templates de cold email por rubro
- `docs/social-media/` — Posts listos para redes sociales + guía Metricool
- `docs/launch/` — Checklist de lanzamiento, pricing, cobro, legal, propuesta template

Ver `docs/README.md` para índice completo.
