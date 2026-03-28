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
└── social-media/
    ├── posts-redes-sociales.md        ← Posts listos para Metricool (artículos 2026)
    ├── posts-articulos-2025.md        ← Posts para artículos de 2025
    └── GUIA-METRICOOL.md              ← Cómo programar en Metricool paso a paso
```

---

## Guía rápida por tarea

### Quiero publicar en redes sociales
→ Lee `social-media/posts-redes-sociales.md` (artículos marzo 2026) o `social-media/posts-articulos-2025.md` (artículos 2025)
→ Sigue `social-media/GUIA-METRICOOL.md` para programar en Metricool

### Quiero enviar un email a prospectos
→ Elige el template en `email-templates/` según el rubro
→ Reemplaza `[Nombre]`, `[Empresa]`, `[Ciudad]`, `https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot`
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

---

## Regla de organización

| Tipo de archivo | Va en |
|---|---|
| Artículos del blog | `src/content/blog/*.mdx` |
| Templates de email | `docs/email-templates/` |
| Posts de redes sociales | `docs/social-media/` |
| Guías técnicas / prompts | `docs/prompts/` |
| Código del sitio | `src/` |

---

## Stack del proyecto (referencia rápida)

- **Framework:** Next.js 14.2 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS + `@tailwindcss/typography`
- **Animaciones:** Framer Motion
- **Blog:** MDX con `next-mdx-remote`, `gray-matter`, `reading-time`
- **Backend:** Supabase (base de datos) + Resend (emails)
- **Deploy:** Vercel (auto-deploy en push a `main`)
- **Repositorio:** github.com/d1egol/0kbot-landing
