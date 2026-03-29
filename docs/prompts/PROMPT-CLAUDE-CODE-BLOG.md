# Guía técnica: Sistema de Blog en 0kbot

> Este documento describe la arquitectura **real implementada** del sistema de blog.
> Úsalo como referencia para agregar artículos, modificar componentes o extender el sistema.

---

## Estado actual (actualizado marzo 2026)

El blog está completamente implementado y en producción en `https://0kbot.com/blog`.

- **9 artículos** publicados en `src/content/blog/`
- **Ruta:** `/blog` (listado) y `/blog/[slug]` (artículo individual)
- **Renderizado:** estático (SSG) con `generateStaticParams`
- **Formato:** archivos `.mdx` con frontmatter

---

## Arquitectura del sistema

```
src/
├── content/
│   └── blog/              ← Artículos en formato .mdx
│       ├── automatizacion-whatsapp-pymes.mdx
│       ├── ia-para-pymes-2025.mdx
│       ├── reducir-horas-extras-automatizacion.mdx
│       ├── herramientas-ia-chile.mdx
│       ├── ia-para-pymes-lo-que-realmente-sirve.mdx
│       ├── 5-senales-operacion-sangrando-plata.mdx
│       ├── por-que-tu-empresa-vive-en-whatsapp.mdx
│       ├── 3-herramientas-gratuitas-pyme.mdx
│       └── mejora-de-procesos-pymes-chilenas.mdx
├── lib/
│   └── blog.ts            ← Funciones utilitarias para leer posts
├── app/
│   └── blog/
│       ├── page.tsx        ← Listado del blog
│       └── [slug]/
│           ├── page.tsx    ← Artículo individual
│           ├── loading.tsx ← Skeleton de carga
│           └── not-found.tsx ← 404 para slugs inválidos
└── components/
    ├── blog/
    │   ├── BlogCard.tsx
    │   ├── CategoryBadge.tsx
    │   ├── ShareButtons.tsx
    │   └── RelatedPosts.tsx
    └── home/
        └── BlogPreviewSection.tsx  ← Sección en home con 3 posts recientes
```

---

## Tipos e interfaces (`src/lib/blog.ts`)

```typescript
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;           // formato: "YYYY-MM-DD"
  author: string;
  category: string;
  tags: string[];
  readingTime: string;    // calculado automáticamente, ej: "5 min read"
  featured: boolean;
  coverImage?: string;    // opcional
  content: string;        // contenido MDX completo
}

export interface BlogPostMeta extends Omit<BlogPost, "content"> {}
// Usar BlogPostMeta cuando no se necesita el contenido completo (listas, previews)

export const CATEGORIES = [
  "Todos",
  "Automatización",
  "IA para Pymes",
  "Mejora de Procesos",
  "Casos de Uso",
  "Noticias de IA",
  "Tutoriales",
] as const;

export type Category = (typeof CATEGORIES)[number];
```

## Funciones disponibles

```typescript
getAllPosts(): BlogPostMeta[]          // todos los posts, ordenados por fecha desc
getPostBySlug(slug: string): BlogPost | null
getRelatedPosts(slug, category, limit?): BlogPostMeta[]
getFeaturedPost(): BlogPostMeta | null // primer post con featured: true
getRecentPosts(limit?): BlogPostMeta[] // los más recientes (default: 3)
formatDate(dateStr: string): string    // "15 de marzo de 2025" (locale es-CL)
```

---

## Frontmatter requerido en cada artículo

```mdx
---
title: "Título del artículo"
excerpt: "Descripción de 1-2 oraciones para SEO y cards. Máximo 160 caracteres."
date: "2026-04-01"          # formato ISO, determina el orden en el listado
author: "Diego López"
category: "Automatización"  # debe ser una de las 6 categorías válidas
tags: ["tag1", "tag2"]      # 3-5 tags relevantes
featured: false             # solo true en el artículo destacado principal
coverImage: "/blog/nombre-imagen.svg"  # opcional
---

Contenido del artículo en MDX...
```

**Categorías válidas:** `Automatización` · `IA para Pymes` · `Mejora de Procesos` · `Casos de Uso` · `Noticias de IA` · `Tutoriales`

> **Importante:** Solo el primer post con `featured: true` se muestra como card destacada en el listado. Si hay más de uno, solo el primero en orden cronológico se usa.

---

## Cómo agregar un nuevo artículo

1. Crear un archivo `.mdx` en `src/content/blog/`
2. El nombre del archivo es el slug (ej: `mi-nuevo-articulo.mdx` → `/blog/mi-nuevo-articulo`)
3. Agregar el frontmatter con todos los campos requeridos
4. Escribir el contenido en Markdown/MDX

No requiere ningún cambio en código. El sistema lo detecta y publica automáticamente.

---

## Componentes del blog

### `BlogCard`
```tsx
// Dos variantes:
<BlogCard post={post} />            // card regular (grid)
<BlogCard post={post} featured />   // card hero grande (artículo destacado)
```
Acepta `BlogPostMeta`. No necesita el contenido completo del artículo.

### `CategoryBadge`
```tsx
<CategoryBadge category="Automatización" className="mb-4" />
```
Muestra badge con color asignado por categoría. Los colores se definen dentro del componente.

### `ShareButtons`
```tsx
<ShareButtons title={post.title} slug={post.slug} />
```
Cliente component (`"use client"`). Botones para Twitter, LinkedIn, WhatsApp y copiar link.

### `RelatedPosts`
```tsx
<RelatedPosts posts={related} />
```
Acepta array de `BlogPostMeta`. Renderiza grid de cards de la misma categoría.

### `BlogPreviewSection`
Componente de home. Lee automáticamente los 3 posts más recientes vía `getRecentPosts(3)`.
No necesita props.

---

## Renderizado del contenido

Los artículos se renderizan con `next-mdx-remote/rsc`:

```tsx
import { MDXRemote } from "next-mdx-remote/rsc";
<MDXRemote source={post.content} />
```

El contenido se estiliza con `@tailwindcss/typography` (clase `prose`):

```tsx
<div className="prose prose-lg prose-slate max-w-none
  prose-headings:font-heading prose-headings:text-[#1A1A1A]
  prose-p:text-[#444] prose-a:text-[#1B5FA6]
  ...
">
  <MDXRemote source={post.content} />
</div>
```

---

## SEO por artículo

Cada artículo genera automáticamente:
- `<title>`: `[Título del artículo] | Blog 0kbot`
- `<meta description>`: el campo `excerpt`
- `<meta keywords>`: el array `tags`
- `openGraph.publishedTime`: el campo `date`
- JSON-LD `Article` schema con `headline`, `description`, `datePublished`, `author`, `publisher`
- `datePublished` / `dateModified`: se expande a `${date}T00:00:00-04:00` (Chile Continental, UTC-4)

---

## Dependencias relevantes

```json
"next-mdx-remote": "^6.0.0",
"gray-matter": "^4.0.3",
"reading-time": "^1.5.0",
"@tailwindcss/typography": "^0.5.16"
```

La tipografía está configurada en `tailwind.config.ts`:
```ts
plugins: [require("@tailwindcss/typography")]
```
Y el directorio de contenido está incluido en el scan de Tailwind:
```ts
content: ["./src/content/**/*.mdx"]
```

---

## Navegación

- **Navbar:** `{ label: "Blog", href: "/blog" }` — configurado en `src/components/layout/Navbar.tsx`
- **Navbar CTA:** "Agendar diagnóstico gratis" abre ContactModal (no es un link a /contacto)
- **Footer:** sección "Blog" con links a 3 artículos + "Ver todos" — configurado en `src/components/layout/Footer.tsx`
- **Footer CTA:** "Agendar diagnóstico gratis" es link directo a Calendly (Footer es server component)
- **Home:** `BlogPreviewSection` insertada en `src/app/page.tsx` entre `CredencialesSection` y `FAQSection`

---

## Notas de mantenimiento

- El directorio `src/app/recursos/` existe como página de recursos genérica (no es el blog). No confundir.
- El blog NO usa CMS externo. Todo está en archivos `.mdx` en git.
- La categoría del filtro visual en `/blog` es solo UI (client-side). No hay enrutamiento por categoría — todos los artículos se cargan y el filtro funciona en el browser. Para activar filtrado real por URL se requeriría convertir el componente a `"use client"` y usar `useSearchParams`.
- El campo `readingTime` se calcula automáticamente a partir del contenido. No especificarlo en el frontmatter.
