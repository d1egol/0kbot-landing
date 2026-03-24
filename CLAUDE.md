# CLAUDE.md — 0kbot.com

> Instrucciones y contexto para Claude Code. Leer completo antes de escribir código.

---

## Descripción del negocio

**0kbot.com** es la landing de generación de leads para una consultora de IA y automatización orientada a empresas medianas chilenas (50–200 personas). **No es un SaaS.**

- **Dueño:** Diego — Functional Engineering Lead con MSc en Data Science y Lean Six Sigma Green Belt
- **Modelo de negocio:** Proyectos de diagnóstico + implementación. Ticket promedio objetivo: $3M–8M CLP por proyecto
- **Objetivo de la web:** Capturar leads calificados → agendar llamada de diagnóstico
- **Mercado:** Chile (idioma español, moneda CLP, horario CLT)

---

## Stack técnico y justificaciones

| Tecnología | Rol | Justificación |
|------------|-----|---------------|
| **Next.js 14** (App Router) | Framework web | SSR/SSG para SEO, App Router para layouts y server components |
| **TypeScript** | Tipado | Reduce bugs en integraciones con Supabase y Resend |
| **Tailwind CSS** | Estilos | Velocidad de desarrollo, consistencia, sin CSS custom salvo excepciones |
| **shadcn/ui** | Componentes UI | Componentes accesibles, copiados al repo (no black-box) |
| **Supabase** | Base de datos + Auth | PostgreSQL managed, RLS nativo, panel de admin integrado |
| **Vercel** | Deploy | Integración nativa con Next.js, previews automáticas por PR |
| **Resend** | Emails transaccionales | API simple, buena entregabilidad, SDK oficial para Next.js |

**Regla:** No proponer alternativas a este stack sin justificación explícita y aprobación de Diego.

---

## Estructura de carpetas

```
0kbot-landing/
├── CLAUDE.md                    # Este archivo — contexto del proyecto
├── README.md                    # Documentación pública
├── .env.example                 # Variables documentadas (sin valores reales)
├── index.html                   # Landing HTML original — referencia de diseño/copy (NO BORRAR)
├── logo.png                     # Logo de marca
├── hero-image.png               # Imagen hero
│
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── page.tsx             # Página principal (placeholder Fase 0, landing real Fase 1)
│   │   ├── layout.tsx           # Layout raíz con metadata SEO
│   │   ├── globals.css          # Estilos globales + variables Tailwind
│   │   └── api/
│   │       └── leads/
│   │           └── route.ts     # POST /api/leads — guardar lead en Supabase (Fase 1)
│   │
│   ├── components/
│   │   ├── ui/                  # Componentes shadcn/ui (generados con CLI)
│   │   └── sections/            # Secciones de la landing (Hero, Features, Pricing, etc.)
│   │
│   └── lib/
│       ├── supabase.ts          # Clientes Supabase (browser + admin)
│       ├── resend.ts            # Cliente Resend para emails
│       └── validations.ts       # Zod schemas (leadSchema, etc.)
│
├── supabase/
│   └── migrations/
│       └── 001_initial.sql      # Tabla leads + RLS
│
└── scripts/
    └── verify-setup.sh          # Script de verificación del entorno
```

---

## Convenciones de código

### Archivos y carpetas
- Componentes React: `PascalCase.tsx` → `HeroSection.tsx`
- Rutas API: `route.ts` (convención Next.js App Router)
- Librerías/utilities: `camelCase.ts` → `supabase.ts`, `validations.ts`
- Carpetas de secciones: `kebab-case/` → `hero-section/`

### Componentes
- Un componente por archivo
- Props tipadas con `interface NombreProps { ... }`
- Server Components por defecto; agregar `"use client"` solo cuando necesario (interactividad, hooks)

### Variables de entorno
- `NEXT_PUBLIC_*` solo para valores seguros en el cliente (Supabase URL, Supabase anon key)
- Todo lo demás (service role key, Resend API key) solo en servidor

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
- ❌ Borrar `index.html` (es referencia de diseño para Fase 1)
- ❌ Hacer `git push --force` o modificar historial
- ❌ Guardar valores reales de variables de entorno en el repo
- ❌ Implementar autenticación de clientes (es Fase 3)
- ❌ Crear blog ni contenido (es Fase 2)

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
| **Fase 1** | Landing que convierte: UI completa, lead capture, analytics | ⏳ Pendiente | — |
| **Fase 2** | Credibilidad: casos de uso, metodología, blog/artículos | ⏳ Pendiente | — |
| **Fase 3** | Herramientas internas: diagnóstico, calculadora ROI, propuesta IA | ⏳ Pendiente | — |

---

## Próximos pasos — Fase 1

Al iniciar Fase 1, implementar en este orden:

1. **Layout y estilos base** — colores de marca, tipografía (referencia en `index.html`)
2. **Sección Hero** — headline, subheadline, CTA principal
3. **Sección Features/Servicios** — propuesta de valor
4. **Formulario de contacto** — conectado a `POST /api/leads`
5. **API route `/api/leads`** — validar con Zod, guardar en Supabase, enviar email con Resend
6. **Analytics** — Google Analytics 4, Meta Pixel
7. **SEO** — metadata, Open Graph, structured data
8. **Optimización** — performance, mobile, Core Web Vitals

---

## Contacto y contexto de negocio

- **Email:** hola@0kbot.com
- **Teléfono/WhatsApp:** +56 9 7378 3020
- **Ubicación:** Santiago, Chile
- **Industrias objetivo:** Retail, servicios, manufactura, distribución (50–200 empleados)
- **Pain points del cliente:** Procesos manuales repetitivos, atención al cliente desbordada, falta de datos para decisiones
