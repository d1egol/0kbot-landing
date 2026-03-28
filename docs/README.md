# docs/ — Documentación del proyecto 0kbot

Este directorio contiene documentación de referencia, templates y guías de operación. **No es código del sitio web.**

---

## Estructura

```
docs/
├── README.md                          ← Este archivo
├── prompts/
│   └── PROMPT-CLAUDE-CODE-BLOG.md    ← Guía técnica del sistema de blog
├── email-templates/
│   ├── README.md                      ← Cómo usar los templates + KPIs
│   ├── retail-comercio.md
│   ├── servicios-profesionales.md
│   ├── construccion-inmobiliaria.md
│   ├── logistica-transporte.md
│   ├── linkedin-dm.md                 ← Mensajes cortos para LinkedIn
│   └── followup-sequences.md          ← Secuencia de seguimiento post-email
├── social-media/
│   ├── posts-redes-sociales.md        ← Posts listos para Metricool (artículos 2026)
│   ├── posts-articulos-2025.md        ← Posts para artículos de 2025
│   └── GUIA-METRICOOL.md             ← Cómo programar en Metricool paso a paso
└── launch/
    ├── README.md                      ← Checklist de lanzamiento
    ├── PRICING.md                     ← Framework de precios
    ├── COBRO.md                       ← Opciones de cobro en Chile
    ├── FORMALIZACION-LEGAL.md         ← Guía para constituir SpA
    ├── CASO-ESTUDIO-TEMPLATE.md       ← Template caso Dos Huertos
    └── PROPUESTA-TEMPLATE.md          ← Template de propuesta comercial
```

---

## Guía rápida por tarea

### Quiero publicar en redes sociales
→ Lee `social-media/posts-redes-sociales.md` (artículos marzo 2026) o `social-media/posts-articulos-2025.md` (artículos 2025)
→ Sigue `social-media/GUIA-METRICOOL.md` para programar en Metricool

### Quiero enviar un email a prospectos
→ Elige el template en `email-templates/` según el rubro
→ Reemplaza `[Nombre]`, `[Empresa]`, `[Ciudad]`
→ El link de Calendly ya está en los templates: `https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot`
→ Lee `email-templates/README.md` para horarios y consejos de personalización

### Quiero hacer seguimiento a prospectos que no respondieron
→ `email-templates/followup-sequences.md`

### Quiero prospectar por LinkedIn
→ `email-templates/linkedin-dm.md`

### Quiero agregar un artículo al blog
→ Crea un archivo `.mdx` en `src/content/blog/`
→ Lee `prompts/PROMPT-CLAUDE-CODE-BLOG.md` para el formato exacto del frontmatter

### Quiero entender cómo funciona el blog técnicamente
→ `prompts/PROMPT-CLAUDE-CODE-BLOG.md`

### Quiero ver qué falta para el lanzamiento
→ `launch/README.md` — Checklist con estados de cada tarea

### Quiero preparar una propuesta comercial
→ `launch/PROPUESTA-TEMPLATE.md` — Template completo con secciones y placeholders

### Quiero definir precios para un cliente
→ `launch/PRICING.md` — Framework de precios por tamaño de empresa y complejidad

---

## Regla de organización

| Tipo de archivo | Va en |
|---|---|
| Artículos del blog | `src/content/blog/*.mdx` |
| Templates de email | `docs/email-templates/` |
| Posts de redes sociales | `docs/social-media/` |
| Guías técnicas / prompts | `docs/prompts/` |
| Documentos de lanzamiento | `docs/launch/` |
| Código del sitio | `src/` |

---

## Stack del proyecto (referencia rápida)

- **Framework:** Next.js 14.2 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS + `@tailwindcss/typography`
- **Animaciones:** Framer Motion
- **Blog:** MDX con `next-mdx-remote`, `gray-matter`, `reading-time`
- **Backend:** Supabase (base de datos PostgreSQL) + Resend (emails transaccionales)
- **Agendamiento:** Calendly (`https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot`)
- **Deploy:** Vercel (auto-deploy en push a `main`)
- **Repositorio:** github.com/d1egol/0kbot-landing

---

## Flujo de conversión actual (actualizado marzo 2026)

1. Usuario hace clic en cualquier CTA → se abre **ContactModal** (2 campos: nombre + email)
2. Al enviar: lead se guarda en Supabase (fire-and-forget) + redirect a Calendly con datos prefilled
3. Usuario agenda directamente en Calendly sin repetir datos
4. Se reciben 3 emails: confirmación de registro, link de Google Meet, confirmación de formulario

**Importante:** El Footer y la página `/contacto` usan link directo a Calendly (son server components, no pueden usar el modal).
