import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogPostMeta } from "./blog-utils";

// Re-export de tipos + utilidades fs-free para no romper los importadores
// server existentes de `@/lib/blog`. Los componentes del grafo cliente deben
// importar directamente desde `@/lib/blog-utils` (no desde acá, que arrastra `fs`).
export type { BlogPost, BlogPostMeta, Category } from "./blog-utils";
export { CATEGORIES, formatDate } from "./blog-utils";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

// Defense-in-depth: si un .md del pipeline AI llega a src/content/blog/ sin
// pipeline_stage="published" (ej. draft copy-pasteado por error, promote script
// que falló a mitad), no debe aparecer en producción. Posts .mdx tradicionales
// (sin frontmatter .pipeline) siempre pasan — esta guardia aplica solo al
// pipeline AI.
function isPostPublishable(data: { [key: string]: unknown }): boolean {
  const pipeline = data.pipeline as { pipeline_stage?: string } | undefined;
  if (!pipeline) return true;
  return pipeline.pipeline_stage === "published";
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  // Lee .mdx (posts existentes) y .md (posts del pipeline AI/content-engine)
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.flatMap((filename) => {
    const isMarkdown = filename.endsWith(".md");
    const slug = isMarkdown ? filename.replace(/\.md$/, "") : filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const rt = readingTime(content);

    if (!isPostPublishable(data)) return [];

    // Posts pipeline AI tienen frontmatter distinto: seo.description, hero, reading_time pre-calculado
    // Mapear a BlogPostMeta compatible
    const excerpt = data.excerpt || (data.seo && data.seo.description) || "";
    const coverImage = data.coverImage || data.hero || undefined;
    // Pipeline posts usan "AI Research" category por default
    const category = data.category || (isMarkdown && data.pipeline ? "AI Research" : "IA para Pymes");

    return [{
      slug,
      title: data.title || "",
      excerpt,
      date: data.date ? String(data.date) : "",
      author: data.author || "Equipo 0kbot",
      category,
      tags: data.tags || [],
      readingTime: data.reading_time ? `${data.reading_time} min read` : rt.text,
      featured: data.featured || false,
      coverImage,
    } as BlogPostMeta];
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  // Buscar en .mdx primero (posts existentes), luego .md (pipeline AI)
  let filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  let isMarkdown = false;
  if (!fs.existsSync(filePath)) {
    filePath = path.join(BLOG_DIR, `${slug}.md`);
    isMarkdown = true;
  }
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const rt = readingTime(content);

  if (!isPostPublishable(data)) return null;

  const excerpt = data.excerpt || (data.seo && data.seo.description) || "";
  const coverImage = data.coverImage || data.hero || undefined;
  const category = data.category || (isMarkdown && data.pipeline ? "AI Research" : "IA para Pymes");

  return {
    slug,
    title: data.title || "",
    excerpt,
    date: data.date ? String(data.date) : "",
    author: data.author || "Equipo 0kbot",
    category,
    tags: data.tags || [],
    readingTime: data.reading_time ? `${data.reading_time} min read` : rt.text,
    featured: data.featured || false,
    coverImage,
    content,
  };
}

/**
 * Relacionados por score: intersección de tags (×2) + match de categoría (×1).
 * Fallback a posts más recientes de la misma categoría si no hay tags overlap.
 */
export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3,
  tags: string[] = []
): BlogPostMeta[] {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug);
  const tagSet = new Set(tags);

  const scored = all.map((p) => {
    const tagOverlap = p.tags.filter((t) => tagSet.has(t)).length;
    const categoryMatch = p.category === category ? 1 : 0;
    return { post: p, score: tagOverlap * 2 + categoryMatch };
  });

  return scored
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      // Desempate: más reciente primero
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    })
    .slice(0, limit)
    .map((s) => s.post);
}

export function getFeaturedPost(): BlogPostMeta | null {
  const posts = getAllPosts();
  return posts.find((p) => p.featured) || posts[0] || null;
}

export function getRecentPosts(limit = 3): BlogPostMeta[] {
  return getAllPosts().slice(0, limit);
}

export function getResearchPosts(): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.category === "AI Research");
}
