import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

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
  "Noticias de IA",
  "Tutoriales",
] as const;

export type Category = (typeof CATEGORIES)[number];

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const rt = readingTime(content);

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      date: data.date || "",
      author: data.author || "Equipo 0kbot",
      category: data.category || "IA para Pymes",
      tags: data.tags || [],
      readingTime: rt.text,
      featured: data.featured || false,
      coverImage: data.coverImage,
    } as BlogPostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title || "",
    excerpt: data.excerpt || "",
    date: data.date || "",
    author: data.author || "Equipo 0kbot",
    category: data.category || "IA para Pymes",
    tags: data.tags || [],
    readingTime: rt.text,
    featured: data.featured || false,
    coverImage: data.coverImage,
    content,
  };
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): BlogPostMeta[] {
  const all = getAllPosts();
  return all
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}

export function getFeaturedPost(): BlogPostMeta | null {
  const posts = getAllPosts();
  return posts.find((p) => p.featured) || posts[0] || null;
}

export function getRecentPosts(limit = 3): BlogPostMeta[] {
  return getAllPosts().slice(0, limit);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
