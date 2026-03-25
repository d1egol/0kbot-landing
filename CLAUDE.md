# CLAUDE.md — 0kbot.com

> Instrucciones y contexto para Claude Code. Leer completo antes de escribir código.

---

## Descripción del negocio

**0kbot.com** es la landing de generación de leads para una **consultora de mejora de procesos** orientada a pymes chilenas (10–200 personas). **No es una empresa de IA. No es un SaaS.**

- **Dueño:** Diego — Ingeniero Civil Industrial PUC, MSc Data Science, Lean Six Sigma Green Belt, 8+ años en operaciones
- **Identidad clave:** Consultora de procesos que usa Lean como metodología principal. La IA y automatización son herramientas, no el producto.
- **Modelo de negocio:** Proyectos de diagnóstico + implementación. Ticket promedio objetivo: $3M–8M CLP por proyecto
- **Objetivo de la web:** Capturar leads calificados → agendar llamada de diagnóstico (30 min)
- **Mercado:** Chile (idioma español, moneda CLP, horario CLT)
- **Cliente ideal:** Dueño o gerente que sospecha que sus procesos están rotos pero no sabe cuánto le cuesta ni por dónde empezar

---

## Stack técnico y justificaciones

| Tecnología | Rol | Justificación |
|------------|-----|---------------|
| **Next.js 14** (App Router) | Framework web | SSR/SSG para SEO, App Router para layouts y server components |
| **TypeScript** | Tipado | Reduce bugs en integraciones con Supabase y Resend |
| **Tailwind CSS** | Estilos | Velocidad de desarrollo, consistencia, sin CSS custom salvo excepciones |
| **shadcn/ui** | Componentes UI base | Componentes accesibles, copiados al repo (no black-box) |
| **Supabase** | Base de datos | PostgreSQL managed, RLS nativo, panel de admin integrado |
| **Vercel** | Deploy | Integración nativa con Next.js, previews automáticas por PR |
| **Resend** | Emails transaccionales | API simple, buena entregabilidad, SDK oficial para Next.js |

**Regla:** No proponer alternativas a este stack sin justificación explícita y aprobación de Diego.

---

## Sistema de diseño (Fase 1)

### Paleta
| Token | Hex | Uso |
|-------|-----|-----|
| `background` | `#F7F5F0` | Fondo general (blanco hueso cálido) |
| `foreground` | `#1A1A1A` | Texto principal |
| `primary` | `#1B4332` | Verde oscuro — confianza, acciones principales |
| `accent` | `#D4A853` | Dorado apagado — métricas, énfasis, CTAs secundarios |
| `muted` | `#E5E2DB` | Bordes, fondos sutiles |
| `muted-foreground` | `#4A4A4A` | Texto secundario |
| `card` | `#FFFFFF` | Fondo de tarjetas |

### Tipografía
- **Display:** Playfair Display (Google Fonts vía `<link>`, fallback Georgia) — headlines, autoridad editorial
- **Body:** Geist/DM Sans (local `GeistVF.woff`, variable `--font-dm-sans`) — legibilidad
- **Mono:** JetBrains Mono (Google Fonts vía `<link>`, fallback monospace) — métricas, datos

> **Nota:** Los fonts de Google Fonts se cargan vía `<link>` en runtime (no `next/font/google`) para compatibilidad con entornos de build sin internet. En producción (Vercel) cargan normalmente.

### Principios
- Max-width contenido: 1100px
- Desktop es prioridad (B2B decide en escritorio), pero fully responsive
- Secciones con `py-20 lg:py-32`
- Server Components en `sections/`, `'use client'` solo en `ui/`

---

## Estructura de carpetas

```
0kbot-landing/
├── CLAUDE.md                    # Este archivo — contexto del proyecto
├── README.md                    # Documentación pública
├── .env.example                 # Variables documentadas (sin valores reales)
├── index.html                   # Landing HTML original — referencia histórica (NO BORRAR)
├── logo.png                     # Logo de marca
├── hero-image.png               # Imagen hero
│
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── page.tsx             # Página principal — compone 9 secciones
│   │   ├── layout.tsx           # Layout raíz: fonts, metadata SEO, GA4
│   │   ├── globals.css          # Estilos globales + variables CSS + utilidades animación
│   │   └── api/
│   │       └── leads/
│   │           └── route.ts     # POST /api/leads — valida, guarda en Supabase, envía emails
│   │
│   ├── components/
│   │   ├── ui/                  # Client Components ('use client')
│   │   │   ├── AnimatedSection.tsx    # IntersectionObserver wrapper
│   │   │   ├── MetricCard.tsx         # Card con count-up animation
│   │   │   ├── ContactModal.tsx       # Modal formulario de contacto
│   │   │   ├── OpenModalButton.tsx    # Botón que abre ContactModal
│   │   │   └── FAQAccordion.tsx       # Accordion para FAQ
│   │   └── sections/            # Server Components (render estático)
│   │       ├── Hero.tsx
│   │       ├── PainPoints.tsx
│   │       ├── Solucion.tsx
│   │       ├── ComoFunciona.tsx
│   │       ├── Casos.tsx
│   │       ├── Credenciales.tsx
│   │       ├── FAQ.tsx
│   │       ├── CTAFinal.tsx
│   │       └── Footer.tsx
│   │
│   ├── lib/
│   │   ├── supabase.ts          # Clientes Supabase (browser + admin)
│   │   ├── resend.ts            # Cliente Resend
│   │   ├── validations.ts       # Zod schemas (leadSchema) — Zod v4
│   │   └── email.ts             # Templates y funciones de email
│   │
│   └── types/
│       └── index.ts             # TypeScript interfaces (Lead, ContactFormData, etc.)
│
├── supabase/
│   └── migrations/
│       ├── 001_initial.sql      # Tabla leads + RLS
│       └── 002_update_leads_schema.sql  # Renombrar columnas + agregar estado
│
└── scripts/
    └── verify-setup.sh          # Script de verificación del entorno
```

---

## Convenciones de código

### Archivos y carpetas
- Componentes React: `PascalCase.tsx` → `Hero.tsx`, `PainPoints.tsx`
- Rutas API: `route.ts` (convención Next.js App Router)
- Librerías/utilities: `camelCase.ts` → `supabase.ts`, `validations.ts`

### Componentes
- Un componente por archivo
- Props tipadas con `interface NombreProps { ... }` o inline cuando es simple
- **Server Components por defecto** en `sections/`
- `'use client'` solo en `ui/` (AnimatedSection, MetricCard, ContactModal, FAQAccordion, OpenModalButton)
- La interactividad se inyecta vía componentes `ui/` dentro de las secciones

### Variables de entorno
- `NEXT_PUBLIC_*` solo para valores seguros en el cliente
- Todo lo demás (service role key, Resend API key, NOTIFICATION_EMAIL) solo en servidor

### Zod v4
- `z.enum([...] as const)` — los arrays deben ser `as const`
- Usar `message:` en lugar de `errorMap:` para mensajes de error en enums
- `.default()` sigue funcionando igual

### Base de datos
- Migraciones numeradas: `001_`, `002_`, etc.
- Siempre habilitar RLS en tablas nuevas
- Usar `gen_random_uuid()` para IDs

---

## Reglas del proyecto

### NO hacer (sin aprobación explícita)
- ❌ Cambiar el stack tecnológico
- ❌ Agregar dependencias npm sin validar con Diego primero
- ❌ Saltar fases o implementar features de fases futuras
- ❌ Borrar `index.html` (referencia histórica)
- ❌ Hacer `git push --force` o modificar historial
- ❌ Guardar valores reales de variables de entorno en el repo
- ❌ Implementar autenticación de clientes (es Fase 3)
- ❌ Crear blog ni contenido (es Fase 2)
- ❌ Mencionar precios en ninguna sección de la landing
- ❌ Usar `'use client'` en `components/sections/`

### SIEMPRE hacer
- ✅ Actualizar este CLAUDE.md al terminar cada fase
- ✅ Mantener `.env.example` actualizado con toda variable nueva
- ✅ Tipar todo con TypeScript (no usar `any`)
- ✅ Verificar build sin errores antes de hacer push
- ✅ Commits descriptivos en español o inglés (consistente)

---

## Estado por fase

| Fase | Descripción | Estado | Fecha |
|------|-------------|--------|-------|
| **Fase 0** | Fundación: repositorio, stack base, Supabase conectado | ✅ Completada | 2026-03-24 |
| **Fase 1** | Landing que convierte: 9 secciones, lead capture, emails, GA4 | ✅ Completada | 2026-03-25 |
| **Fase 2** | Credibilidad: casos reales, metodología documentada, SEO profundo | ✅ Completada | 2026-03-25 |
| **Fase 3** | Herramientas internas: calculadora ROI, diagnóstico guiado | ⏳ Pendiente | — |
| **Fase 4** | Contenido y blog | ⏳ Pendiente | — |

---

## Completado en Fase 2

1. ✅ **Migración DB 002** — aplicada en Supabase Dashboard
2. ✅ **LinkedIn URL** — `https://www.linkedin.com/company/0kbot`
3. ✅ **Google Analytics** — `NEXT_PUBLIC_GA_ID=G-C1DXZ8P1XJ` configurado en Vercel
4. ✅ **Resend** — dominio `0kbot.com` verificado (DNS configurado en Vercel)
5. ✅ **SEO profundo** — JSON-LD (LocalBusiness/Person/WebSite), Open Graph image dinámica (`opengraph-image.tsx`), `sitemap.ts`, `robots.ts`
6. ✅ **6 casos ilustrativos** en `Casos.tsx` (reemplazar por casos reales cuando estén disponibles)

## Próximos pasos — Fase 3

1. **Casos reales** — reemplazar los 6 casos ilustrativos en `Casos.tsx` con casos reales (anonimizados)
2. **Foto real** — reemplazar el placeholder "D" en `Credenciales.tsx` con foto de Diego
3. **Meta Pixel** — agregar si se usa publicidad en Meta
4. **Calculadora ROI** — herramienta interactiva para estimar el costo de los problemas de proceso
5. **Diagnóstico guiado** — flujo de preguntas que cualifica al lead antes de la llamada

---

## Decisiones de diseño Fase 1

| Decisión | Justificación |
|----------|---------------|
| Sin precios en la landing | Primero establecer problema + solución + confianza. Precio en conversación. |
| Estructura Problem-Solution-Proof | Dueño llega con un dolor no articulado → primero validar que lo entendemos |
| MetricCard animada en Hero | Concretar el problema en números antes del scroll |
| Sección "He estado del otro lado" | Diferenciador vs consultoras académicas: operador que ahora consulta |
| Garantía en ComoFunciona | "Si no se ve, no cobramos el último tramo" — reduce riesgo percibido |
| FAQ honesta | Responde objeciones reales incluyendo "¿qué pasa si el problema es mi gente?" |

---

## Variables de entorno necesarias

| Variable | Dónde | Descripción |
|----------|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Cliente | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Cliente | Clave pública anon |
| `SUPABASE_SERVICE_ROLE_KEY` | Servidor | Clave service_role (solo API routes) |
| `RESEND_API_KEY` | Servidor | API key de Resend |
| `RESEND_FROM_EMAIL` | Servidor | Email remitente (verificado en Resend) |
| `NOTIFICATION_EMAIL` | Servidor | Email que recibe notificaciones de leads |
| `NEXT_PUBLIC_GA_ID` | Cliente | Google Analytics 4 ID (opcional) |
| `NEXT_PUBLIC_APP_URL` | Cliente | URL pública del sitio |

---

## Contacto

- **Email:** contacto@0kbot.com
- **Ubicación:** Santiago, Chile
- **Industrias objetivo:** Distribución, logística, servicios profesionales, manufactura (10–200 personas)
