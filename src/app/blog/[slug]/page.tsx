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
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
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
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `${baseUrl}/blog/${post.slug}`,
    datePublished: `${post.date}T00:00:00-04:00`,
    dateModified: `${post.date}T00:00:00-04:00`,
    inLanguage: "es-CL",
    wordCount,
    keywords: post.tags.join(", "),
    image: `${baseUrl}/opengraph-image`,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.linkedin.com/in/diego-lopez-dinamarca/",
    },
    publisher: {
      "@type": "Organization",
      name: "0kbot",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
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

  const jsonLd = [articleJsonLd, breadcrumbJsonLd];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="min-h-screen bg-[#F7F5F0]">
        {/* Article header */}
        <header className="bg-white border-b border-[#E5E2DB]">
          <div className="container-content pt-8 pb-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-sm text-[#999] mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#1B5FA6] transition-colors">
                Inicio
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/blog" className="hover:text-[#1B5FA6] transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#1A1A1A] font-medium line-clamp-1 max-w-[200px]">
                {post.title}
              </span>
            </nav>

            <div className="max-w-3xl">
              <CategoryBadge category={post.category} className="mb-4" />

              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-[#666] text-lg leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-6 text-sm text-[#999] flex-wrap">
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
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#E5E2DB]">
                <div className="prose prose-lg prose-slate max-w-none
                  prose-headings:font-heading prose-headings:text-[#1A1A1A]
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-[#444] prose-p:leading-relaxed
                  prose-a:text-[#1B5FA6] prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-[#1A1A1A]
                  prose-ul:text-[#444] prose-ol:text-[#444]
                  prose-li:my-1
                  prose-hr:border-[#E5E2DB]
                  prose-blockquote:border-[#1B5FA6] prose-blockquote:bg-blue-50 prose-blockquote:py-1 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg
                ">
                  <MDXRemote source={post.content} />
                </div>

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-[#E5E2DB]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-[#999] font-medium">Tags:</span>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-[#F7F5F0] border border-[#E5E2DB] text-xs text-[#666]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="mt-8 pt-6 border-t border-[#E5E2DB]">
                  <ShareButtons title={post.title} slug={post.slug} />
                </div>
              </div>

              {/* CTA Box */}
              <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#1B5FA6] to-[#0d3d6e] p-8 text-white">
                <h3 className="font-heading text-xl font-bold mb-2">
                  ¿Tu empresa tiene procesos que podrían automatizarse?
                </h3>
                <p className="text-white/80 text-sm mb-6">
                  Haz nuestro diagnóstico gratuito de 30 minutos y descubre exactamente
                  qué procesos tienen mayor impacto en tu empresa.
                </p>
                <Link
                  href="/#diagnostico"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#1A1A1A] px-6 py-3 rounded-xl font-bold hover:bg-[#c49843] transition-colors text-sm"
                >
                  Hacer diagnóstico gratuito →
                </Link>
              </div>

              {/* Related posts */}
              <RelatedPosts posts={related} />

              {/* Back link */}
              <div className="mt-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#1B5FA6] font-medium hover:gap-3 transition-all text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver al blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0 sticky top-24">
              <div className="rounded-xl border border-[#E5E2DB] bg-white p-6 mb-6">
                <h3 className="font-heading font-bold text-[#1A1A1A] mb-2">
                  Sobre 0kbot
                </h3>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  Mejora de procesos y automatización para pymes en Chile. Sin tecnología innecesaria. Resultados medibles en 12 semanas.
                </p>
                <Link
                  href="/#diagnostico"
                  className="block text-center bg-[#1B5FA6] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#154d8a] transition-colors"
                >
                  Diagnóstico gratuito
                </Link>
              </div>

              <div className="rounded-xl border border-[#E5E2DB] bg-white p-6">
                <h3 className="font-heading font-bold text-[#1A1A1A] mb-4">
                  Artículo
                </h3>
                <div className="space-y-3 text-sm text-[#666]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 shrink-0 text-[#1B5FA6]" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 shrink-0 text-[#1B5FA6]" />
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 shrink-0 text-[#1B5FA6]" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-[#E5E2DB]">
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
