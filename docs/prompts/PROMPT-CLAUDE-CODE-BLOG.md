# PROMPT PARA CLAUDE CODE: Implementar Blog en 0kbot

Copia todo este prompt y pégalo en Claude Code para implementar el sistema de blog completo en tu proyecto 0kbot-landing.

---

## INSTRUCCIÓN PRINCIPAL

Necesito implementar un sistema de blog completo en mi proyecto Next.js 14 (0kbot-landing). El blog debe vivir en la ruta `/recursos` reemplazando el contenido placeholder actual. Incluye 5 artículos ya escritos, componentes de UI, y una página de artículo individual.

**IMPORTANTE:** Ejecuta cada paso en orden. Haz commit después de cada grupo lógico de cambios.

---

## PASO 1: Agregar tipo BlogPost a types/index.ts

Agrega estas interfaces al final del archivo `src/types/index.ts` (NO reemplaces lo existente, solo agrega al final):

```typescript
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content
  category: "ia-para-pymes" | "guia-practica" | "caso-de-exito" | "opinion" | "herramientas";
  categoryLabel: string;
  tags: string[];
  author: string;
  authorRole: string;
  publishedAt: string; // ISO date
  readingTime: number; // minutes
  featured: boolean;
  ogImage?: string;
}

export type BlogCategory = BlogPost["category"];
```

---

## PASO 2: Crear lib/blog.ts (utilidades del blog)

Crea el archivo `src/lib/blog.ts`:

```typescript
import { blogPosts } from "@/data/blog-posts";
import type { BlogPost, BlogCategory } from "@/types";

export function getAllPosts(): BlogPost[] {
  return blogPosts
    .filter((p) => new Date(p.publishedAt) <= new Date())
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return getAllPosts().slice(0, limit);

  return getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const categoryMap: Record<BlogCategory, { label: string; color: string }> = {
  "ia-para-pymes": { label: "IA para Pymes", color: "bg-blue-100 text-blue-700" },
  "guia-practica": { label: "Guía Práctica", color: "bg-green-100 text-green-700" },
  "caso-de-exito": { label: "Caso de Éxito", color: "bg-amber-100 text-amber-700" },
  "opinion": { label: "Opinión", color: "bg-purple-100 text-purple-700" },
  "herramientas": { label: "Herramientas", color: "bg-rose-100 text-rose-700" },
};
```

---

## PASO 3: Crear archivo de datos de artículos

Crea el archivo `src/data/blog-posts.ts` con el contenido EXACTO del archivo `blog-posts-data.ts` que está en la raíz del proyecto (junto a este prompt). Es un archivo de ~950 líneas con 5 artículos completos.

**El archivo blog-posts-data.ts ya existe en la raíz del repositorio. Cópialo a src/data/blog-posts.ts.**

---

## PASO 4: Crear componentes del blog

### 4a. Crear `src/components/blog/BlogCard.tsx`:

```tsx
"use client";

import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/types";
import { categoryMap, formatDate } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const categoryInfo = categoryMap[post.category];

  if (featured) {
    return (
      <Link href={`/recursos/${post.slug}`} className="block group">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-lg overflow-hidden border border-border shadow-card transition-all duration-300 group-hover:shadow-card-hover group-hover:border-accent"
        >
          <div className="h-64 lg:h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
            <div className="text-5xl">📝</div>
          </div>
          <div className="flex flex-col justify-between p-8 lg:p-0">
            <div>
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryInfo.color}`}>
                  {categoryInfo.label}
                </span>
              </div>
              <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>
            <div className="flex items-center gap-6 pt-6 border-t border-border text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min de lectura</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href={`/recursos/${post.slug}`} className="block group h-full">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="h-full bg-white rounded-lg overflow-hidden border border-border shadow-card transition-all duration-300 group-hover:shadow-card-hover group-hover:border-accent flex flex-col"
      >
        <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
          <div className="text-4xl">📝</div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-3">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryInfo.color}`}>
              {categoryInfo.label}
            </span>
          </div>
          <h3 className="font-heading text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-grow">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 pt-4 border-t border-border text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime} min</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
```

### 4b. Crear `src/components/blog/CategoryFilter.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { categoryMap } from "@/lib/blog";
import type { BlogCategory } from "@/types";

interface CategoryFilterProps {
  selected: BlogCategory | null;
  onSelect: (category: BlogCategory | null) => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const categories: (BlogCategory | "all")[] = [
    "all",
    "ia-para-pymes",
    "guia-practica",
    "caso-de-exito",
    "opinion",
    "herramientas",
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center sm:flex-wrap">
      {categories.map((category) => {
        const isSelected = category === "all" ? selected === null : selected === category;
        const label = category === "all" ? "Todos" : categoryMap[category as BlogCategory].label;

        return (
          <motion.button
            key={category}
            onClick={() => onSelect(category === "all" ? null : (category as BlogCategory))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              isSelected
                ? "bg-primary text-white shadow-card"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {label}
          </motion.button>
        );
      })}
    </div>
  );
}
```

### 4c. Crear `src/components/blog/ShareButtons.tsx`:

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Twitter, Copy, Check } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
  excerpt: string;
}

export default function ShareButtons({ url, title, excerpt }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleShare = async (platform: "linkedin" | "facebook" | "twitter") => {
    const isMobile = /Mobile|Android|iPhone|iPad|iPod/.test(navigator.userAgent);

    if (isMobile && navigator.share) {
      try {
        await navigator.share({ title, text: excerpt, url });
        return;
      } catch (err) {
        if ((err as Error).name !== "AbortError") console.error("Share failed:", err);
      }
    }

    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    };

    window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
  };

  const buttons = [
    { id: "linkedin", icon: Linkedin, label: "LinkedIn", onClick: () => handleShare("linkedin") },
    { id: "facebook", icon: Facebook, label: "Facebook", onClick: () => handleShare("facebook") },
    { id: "twitter", icon: Twitter, label: "Twitter", onClick: () => handleShare("twitter") },
    { id: "copy", icon: copied ? Check : Copy, label: copied ? "Copiado!" : "Copiar", onClick: handleCopyLink },
  ];

  return (
    <div className="flex items-center gap-2">
      {buttons.map((button) => {
        const Icon = button.icon;
        return (
          <motion.button
            key={button.id}
            onClick={button.onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`p-2.5 rounded-lg transition-all duration-300 ${
              copied && button.id === "copy"
                ? "bg-green-100 text-green-700"
                : "bg-muted text-muted-foreground hover:bg-primary hover:text-white"
            }`}
            title={button.label}
            aria-label={button.label}
          >
            <Icon className="w-5 h-5" />
          </motion.button>
        );
      })}
    </div>
  );
}
```

### 4d. Crear `src/components/blog/BlogGrid.tsx`:

```tsx
"use client";

import { useState, useMemo } from "react";
import type { BlogPost, BlogCategory } from "@/types";
import MotionSection from "@/components/ui/MotionSection";
import CategoryFilter from "./CategoryFilter";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | null>(null);

  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts;
    return posts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  const featuredPost = !selectedCategory && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;
  const isEmpty = filteredPosts.length === 0;

  return (
    <MotionSection className="w-full">
      <div className="mb-10 sm:mb-14">
        <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      </div>

      {isEmpty ? (
        <div className="text-center py-16">
          <p className="font-body text-lg text-muted-foreground">
            No hay artículos en esta categoría
          </p>
        </div>
      ) : (
        <>
          {featuredPost && (
            <div className="mb-10 sm:mb-14">
              <BlogCard post={featuredPost} featured={true} />
            </div>
          )}
          {gridPosts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {gridPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured={false} />
              ))}
            </div>
          )}
        </>
      )}
    </MotionSection>
  );
}
```

---

## PASO 5: Agregar estilos del blog a globals.css

Agrega al FINAL de `src/app/globals.css` (después del último keyframe):

```css
/* Blog article styles */
.prose-blog {
  @apply max-w-3xl mx-auto;
}

.prose-blog h2 {
  @apply font-heading text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4;
}

.prose-blog h3 {
  @apply font-heading text-xl sm:text-2xl font-bold text-foreground mt-6 mb-3;
}

.prose-blog p {
  @apply font-body text-base text-foreground leading-relaxed mb-4;
}

.prose-blog ul,
.prose-blog ol {
  @apply font-body text-base text-foreground leading-relaxed mb-4 ml-6;
}

.prose-blog li {
  @apply mb-2;
}

.prose-blog ul li {
  @apply list-disc;
}

.prose-blog ol li {
  @apply list-decimal;
}

.prose-blog strong {
  @apply font-semibold text-foreground;
}

.prose-blog em {
  @apply italic text-foreground;
}

.prose-blog a {
  @apply text-primary hover:text-primary/80 underline transition-colors;
}

.prose-blog blockquote {
  @apply border-l-4 border-accent pl-4 py-2 mb-4 italic text-muted-foreground bg-muted/30 rounded-r;
}

.prose-blog code {
  @apply font-mono text-sm bg-muted px-2 py-1 rounded text-foreground;
}

.prose-blog pre {
  @apply bg-foreground text-background p-4 rounded-lg overflow-x-auto mb-4;
}

.prose-blog pre code {
  @apply bg-transparent px-0 py-0;
}

/* Call-to-action box at end of articles */
.blog-cta {
  @apply mt-12 p-6 sm:p-8 bg-primary text-white rounded-lg;
}

.blog-cta h3 {
  @apply font-heading text-xl font-bold mb-3 text-white;
}

.blog-cta p {
  @apply text-primary-foreground/90 mb-4;
}

.blog-cta a,
.blog-cta button {
  @apply inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors;
}
```

---

## PASO 6: Reemplazar página /recursos (listado del blog)

Reemplaza COMPLETAMENTE el archivo `src/app/recursos/page.tsx` con:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, HelpCircle, ArrowRight } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";
import BlogGrid from "@/components/blog/BlogGrid";
import { getAllPosts } from "@/lib/blog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Blog — Recursos y guías para pymes",
  description:
    "Artículos sobre IA, automatización, mejora de procesos y herramientas prácticas para pymes chilenas. Contenido real, sin humo.",
  keywords: [
    "blog pymes Chile",
    "IA para pymes",
    "automatización procesos",
    "mejora operaciones pyme",
    "herramientas gratuitas pymes",
  ],
};

const faqs = [
  {
    q: "¿Cuánto cuesta un proyecto con 0kbot?",
    a: "Depende del alcance. Trabajamos con presupuestos adaptados a la realidad de la pyme. Lo mejor es agendar una conversación para entender tu necesidad y darte una propuesta concreta.",
  },
  {
    q: "¿Necesito tener un equipo de tecnología interno?",
    a: "No. Nosotros nos encargamos de la parte técnica. Lo que necesitamos es alguien del equipo que conozca la operación y pueda tomar decisiones.",
  },
  {
    q: "¿Puedo empezar con algo pequeño?",
    a: "Absolutamente. De hecho, recomendamos empezar con un alcance acotado, generar valor rápido y luego decidir cómo seguir avanzando.",
  },
  {
    q: "¿Qué herramientas usan?",
    a: "Usamos las herramientas que mejor se adapten a cada caso. No estamos atados a ningún proveedor. Lo importante es que la solución funcione y sea sostenible.",
  },
];

export default function RecursosPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Blog
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Conocimiento práctico para tu pyme
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Artículos sobre IA, automatización y mejora de procesos.
            Sin teoría de MBA. Solo lo que funciona.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <MotionSection className="flex items-center gap-3 mb-10">
            <BookOpen className="w-6 h-6 text-accent flex-shrink-0" />
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Artículos y guías
            </h2>
          </MotionSection>
          <BlogGrid posts={posts} />
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <MotionSection className="flex items-center gap-3 mb-10">
            <HelpCircle className="w-6 h-6 text-accent flex-shrink-0" />
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Preguntas frecuentes
            </h2>
          </MotionSection>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Tienes más preguntas?
          </h2>
          <p className="text-white/75 font-body mb-8">
            Estamos para ayudarte. Escríbenos o agenda una reunión.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Contactar <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
```

---

## PASO 7: Crear página de artículo individual /recursos/[slug]

Crea el archivo `src/app/recursos/[slug]/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";
import ShareButtons from "@/components/blog/ShareButtons";
import BlogCard from "@/components/blog/BlogCard";
import { getPostBySlug, getRelatedPosts, formatDate, categoryMap, getAllPosts } from "@/lib/blog";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(params.slug, 3);
  const categoryInfo = categoryMap[post.category];
  const postUrl = `https://0kbot.com/recursos/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "0kbot",
      url: "https://0kbot.com",
    },
    datePublished: post.publishedAt,
    url: postUrl,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container-narrow">
          {/* Back link */}
          <Link
            href="/recursos"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Volver al blog
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryInfo.color}`}>
              {categoryInfo.label}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readingTime} min de lectura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="font-heading font-semibold text-foreground">
                Comparte este artículo
              </p>
              <ShareButtons url={postUrl} title={post.title} excerpt={post.excerpt} />
            </div>
          </div>

          {/* Tags */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding surface-warm">
          <div className="container-wide">
            <MotionSection>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-10 text-center">
                También te puede interesar
              </h2>
            </MotionSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
```

---

## PASO 8: Agregar "Blog" al Navbar

En `src/components/layout/Navbar.tsx`, agrega `{ label: "Blog", href: "/recursos" }` al array `navItems`. Ponlo al final (después de "Nosotros"):

```typescript
const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Cómo trabajamos", href: "/como-trabajamos" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Casos", href: "/casos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/recursos" },
];
```

---

## PASO 9: Verificar

1. Ejecuta `npm run build` para verificar que no hay errores de TypeScript
2. Ejecuta `npm run dev` y navega a `/recursos` para ver el listado
3. Haz click en un artículo para ver la página individual
4. Verifica que el filtro por categoría funciona
5. Verifica que los botones de compartir funcionan
6. Verifica responsive (mobile/desktop)

---

## PASO 10: Hacer commit y deploy

```bash
git add -A
git commit -m "feat: add blog system with 5 articles, category filters, and social sharing

- Add BlogPost types and blog utility functions
- Create BlogCard, BlogGrid, CategoryFilter, ShareButtons components
- Replace /recursos placeholder with full blog listing
- Add /recursos/[slug] individual article pages with SEO metadata
- Add 5 initial articles covering AI, operations, case studies, tools
- Add blog prose styles and CTA box styling
- Update Navbar with Blog link"
git push
```

---

## NOTAS IMPORTANTES

- El archivo `blog-posts-data.ts` con los 5 artículos COMPLETOS está en la raíz del repo. Cópialo a `src/data/blog-posts.ts`.
- Los artículos usan HTML en el campo `content` que se renderiza con `dangerouslySetInnerHTML`. Esto es seguro porque el contenido es estático y controlado por nosotros.
- Cada artículo termina con un CTA box (clase `.blog-cta`) que lleva a `/contacto`.
- Los artículos tienen SEO completo: metadata, OpenGraph, JSON-LD Article schema.
- El `generateStaticParams` permite que Next.js pre-renderice todas las páginas de artículos.
