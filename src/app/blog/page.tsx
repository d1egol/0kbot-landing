import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getAllPosts, getFeaturedPost, CATEGORIES } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Rss } from "lucide-react";

export const revalidate = 3600; // regenerar cada hora

export const metadata: Metadata = {
  title: "Blog | 0kbot — Automatización de Procesos e IA para Pymes Chile",
  description:
    "Artículos prácticos sobre automatización de procesos, IA para pymes y transformación digital en Chile. Sin teoría, con ejemplos reales.",
  keywords: [
    "blog automatización procesos Chile",
    "IA para pymes artículos",
    "inteligencia artificial Chile pymes",
    "transformación digital pymes Chile",
    "mejora procesos blog",
  ],
  openGraph: {
    title: "Blog 0kbot — Automatización e IA para Pymes Chile",
    description:
      "Artículos prácticos sobre automatización de procesos, IA y transformación digital para pymes chilenas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog 0kbot — Automatización e IA para Pymes Chile",
    description:
      "Artículos prácticos sobre automatización de procesos, IA y transformación digital para pymes chilenas.",
  },
  alternates: {
    canonical: "https://0kbot.com/blog",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  // Exclude AI Research posts from pyme blog index
  const pymePosts = allPosts.filter((p) => p.category !== "AI Research");
  const featuredPost = getFeaturedPost();
  const regularPosts = pymePosts.filter((p) => p.slug !== featuredPost?.slug);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog 0kbot",
    description:
      "Artículos prácticos sobre automatización de procesos, IA para pymes y transformación digital en Chile.",
    url: "https://0kbot.com/blog",
    blogPost: pymePosts.slice(0, 9).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://0kbot.com/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-white border-b border-border">
          <div className="container-content section-padding pb-12 pt-20">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Link
                    href="/feed.xml"
                    title="RSS Feed"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    <Rss className="w-5 h-5" />
                  </Link>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Blog
                  </span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Procesos y<br />
                  <span className="text-gradient-accent">Automatización</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                  Casos reales, guías prácticas y análisis sobre mejora de
                  procesos y automatización para pymes chilenas.
                </p>
              </div>

              <Link
                href="/contacto"
                className="shrink-0 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent transition-colors text-sm"
              >
                Diagnóstico gratuito
              </Link>
            </div>

            {/* Category filter — rendered via BlogGrid (Client Component) */}
          </div>
        </section>

        {/* Content */}
        <section className="container-content py-12">
          {/* Featured post */}
          {featuredPost && featuredPost.category !== "AI Research" && (
            <div className="mb-12">
              <BlogCard post={featuredPost} featured />
            </div>
          )}

          {/* Regular posts grid with filter + pagination */}
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
            Todos los artículos
          </h2>
          <Suspense fallback={<div className="h-96 animate-pulse bg-muted rounded-xl" />}>
            <BlogGrid posts={regularPosts} categories={CATEGORIES} />
          </Suspense>

          {allPosts.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              <p className="text-lg">Próximamente nuevos artículos.</p>
            </div>
          )}

          {/* Diagnóstico CTA */}
          <div className="mt-16 rounded-2xl bg-primary p-8 md:p-12 text-white text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              ¿Tu empresa tiene procesos que podrían mejorar?
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Haz nuestro diagnóstico gratuito de 30 minutos y descubre exactamente
              dónde pierde tiempo y dinero tu operación.
            </p>
            <Link
              href="/#cta-diagnostico"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-accent-glow transition-colors"
            >
              Hacer diagnóstico gratuito →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
