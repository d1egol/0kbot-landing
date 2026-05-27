// Utilidades y tipos del blog SIN dependencias de Node (`fs`, `path`).
// Vive separado de `blog.ts` para que los componentes del grafo cliente
// (BlogCard, BlogGrid, RelatedPosts) puedan importar tipos + `formatDate`
// sin que webpack arrastre el módulo server-only `blog.ts` (que usa `fs`)
// al bundle del cliente. `blog.ts` re-exporta todo esto para mantener
// compatibilidad con los importadores server existentes (`@/lib/blog`).

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured: boolean;
  coverImage?: string;
  content: string;
}

export interface BlogPostMeta extends Omit<BlogPost, "content"> {}

export const CATEGORIES = [
  "Todos",
  "Automatización",
  "IA para Pymes",
  "Mejora de Procesos",
  "Casos y Resultados",
  "Metodología",
  "AI Research",
] as const;

export type Category = (typeof CATEGORIES)[number];

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
