import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getPostBySlug,
  getAllPosts,
  getRelatedPosts,
  formatDate,
} from "@/lib/blog";
import { CategoryBadge } from "@/components/blog/CategoryBadge";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Calendar, Clock, User, ChevronRight, ArrowLeft } from "lucide-react";

export const revalidate = 300; // regenerar cada 5 minutos (blog activo)

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://0kbot.com";

  return {
    title: `${post.title} | Blog 0kbot`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${slug}`,
      siteName: "0kbot",
      locale: "es_CL",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category, 3, post.tags);

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://0kbot.com";
  const wordCount = post.content.split(/\s+/).length;

  // Determine CTA to append based on category (C26: skip if already present)
  const hasDiagnosticoCta = post.content.includes('href="/#cta-diagnostico"') || post.content.includes("href='/#cta-diagnostico'");
  const hasRoiCta = post.content.includes('href="/calculadora-roi"') || post.content.includes("href='/calculadora-roi'");

  const ctaCategories = {
    diagnostico: ["Automatización", "Mejora de Procesos", "Casos y Resultados", "Metodología"],
    roi: ["IA para Pymes"],
  };

  let ctaHref: string | null = null;
  let ctaText: string | null = null;

  if (ctaCategories.diagnostico.includes(post.category) && !hasDiagnosticoCta) {
    ctaHref = "/#cta-diagnostico";
    ctaText = "Agenda tu diagnóstico gratuito de 30 minutos";
  } else if (ctaCategories.roi.includes(post.category) && !hasRoiCta) {
    ctaHref = "/calculadora-roi";
    ctaText = "Calcula el ROI de automatizar tu operación";
  }

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${baseUrl}/blog/${post.slug}`,
    datePublished: `${post.date}T00:00:00-04:00`,
    dateModified: `${post.date}T00:00:00-04:00`,
    inLanguage: "es-CL",
    wordCount,
    keywords: post.tags.join(", "),
    image: post.coverImage ? `${baseUrl}${post.coverImage}` : `${baseUrl}/brand/0kbot-mark.svg`,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.linkedin.com/in/diego-lopez-dinamarca",
    },
    publisher: {
      "@type": "Organization",
      name: "0kbot",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/brand/0kbot-logo.svg`,
        width: 200,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${baseUrl}/blog/${post.slug}` },
    ],
  };

  const jsonLd = [blogPostingJsonLd, breadcrumbJsonLd];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="min-h-screen bg-background">
        {/* Article header */}
        <header className="bg-white border-b border-border">
          <div className="container-content pt-8 pb-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground font-medium line-clamp-1 max-w-[200px]">
                {post.title}
              </span>
            </nav>

            <div className="max-w-3xl">
              <CategoryBadge category={post.category} className="mb-4" />

              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Article content */}
        <div className="container-content py-12">
          <div className="flex gap-12 items-start">
            {/* Main content */}
            <article className="flex-1 min-w-0 max-w-3xl">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border">
                <div className="prose prose-lg prose-slate max-w-none
                  prose-headings:font-heading prose-headings:text-foreground
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                  prose-li:my-1
                  prose-hr:border-border
                  prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-1 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg
                ">
                  <MDXRemote source={post.content} />
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-border">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-muted-foreground font-medium">Tags:</span>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-background border border-border text-xs text-muted-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="mt-8 pt-6 border-t border-border">
                  <ShareButtons title={post.title} slug={post.slug} />
                </div>
              </div>

              {/* Dynamic CTA Block — injected based on post category (C26: skipped if already in MDX) */}
              {ctaHref && ctaText && (
                <div className="mt-8 rounded-2xl bg-primary p-8 text-white">
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {ctaHref === "/#cta-diagnostico"
                      ? "¿Tu empresa tiene procesos que podrían mejorar?"
                      : "¿Quieres saber cuánto puedes ahorrar?"}
                  </h3>
                  <p className="text-white/80 text-sm mb-6">
                    {ctaHref === "/#cta-diagnostico"
                      ? "Haz nuestro diagnóstico gratuito de 30 minutos y descubre exactamente qué procesos tienen mayor impacto en tu empresa."
                      : "Usá nuestra calculadora gratuita de ROI para estimar el retorno de automatizar tus procesos."}
                  </p>
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-accent-glow transition-colors text-sm"
                  >
                    {ctaText} →
                  </Link>
                </div>
              )}

              {/* Related posts */}
              <RelatedPosts posts={related} />

              {/* Back link */}
              <div className="mt-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver al blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0 sticky top-24">
              <div className="rounded-xl border border-border bg-white p-6 mb-6">
                <h3 className="font-heading font-bold text-foreground mb-2">
                  Sobre 0kbot
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Mejora de procesos y automatización para pymes en Chile. Sin tecnología innecesaria. Resultados medibles en 12 semanas.
                </p>
                <Link
                  href="/#cta-diagnostico"
                  className="block text-center bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent transition-colors"
                >
                  Diagnóstico gratuito
                </Link>
              </div>

              <div className="rounded-xl border border-border bg-white p-6">
                <h3 className="font-heading font-bold text-foreground mb-4">
                  Artículo
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 shrink-0 text-primary" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 shrink-0 text-primary" />
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 shrink-0 text-primary" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-border">
                  <ShareButtons title={post.title} slug={post.slug} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
