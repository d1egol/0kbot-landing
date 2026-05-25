import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getPostBySlug,
  getResearchPosts,
  formatDate,
} from "@/lib/blog";
import { Calendar, Clock, User, ChevronRight, ArrowLeft } from "lucide-react";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getResearchPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://0kbot.com";

  return {
    title: `${post.title} | 0kbot Research`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `${baseUrl}/research/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/research/${slug}`,
      siteName: "0kbot Research",
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

export default async function ResearchPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Guard: only render research posts in this route
  if (post.category !== "AI Research") notFound();

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://0kbot.com";
  const wordCount = post.content.split(/\s+/).length;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `${baseUrl}/research/${post.slug}`,
    datePublished: `${post.date}T00:00:00-04:00`,
    dateModified: `${post.date}T00:00:00-04:00`,
    inLanguage: "es-CL",
    wordCount,
    articleSection: "AI Research",
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
      "@id": `${baseUrl}/research/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Research", item: `${baseUrl}/research` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${baseUrl}/research/${post.slug}` },
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
              <Link href="/research" className="hover:text-primary transition-colors">
                Research
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground font-medium line-clamp-1 max-w-[200px]">
                {post.title}
              </span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center border rounded-full font-medium px-3 py-1 text-xs bg-muted text-muted-foreground border-border mb-4">
                AI Research
              </span>

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
          <div className="max-w-3xl">
            <article>
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
                  prose-code:font-mono prose-code:text-sm
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
                          className="px-3 py-1 rounded-full bg-background border border-border text-xs text-muted-foreground font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Back link */}
              <div className="mt-10">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver a Research
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
