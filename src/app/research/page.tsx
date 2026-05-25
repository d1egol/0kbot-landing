import { Metadata } from "next";
import Link from "next/link";
import { getResearchPosts, formatDate } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "AI Research | 0kbot — Benchmarks MCP, Agentes y Automatización Avanzada",
  description:
    "Investigación técnica sobre MCP, agentes de IA, benchmarks de automatización y tecnología de punta. Por Diego López, MSc Data Science.",
  keywords: [
    "AI research automatización",
    "MCP benchmark agentes",
    "inteligencia artificial research Chile",
    "agentes IA técnico",
    "automatización avanzada benchmark",
  ],
  openGraph: {
    title: "0kbot Research — AI, MCP y Agentes",
    description:
      "Investigación técnica sobre MCP, agentes de IA y benchmarks de automatización por el equipo 0kbot.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "0kbot Research — AI, MCP y Agentes",
    description:
      "Investigación técnica sobre MCP, agentes de IA y benchmarks de automatización por el equipo 0kbot.",
  },
  alternates: {
    canonical: "https://0kbot.com/research",
  },
};

export default function ResearchPage() {
  const posts = getResearchPosts();

  const researchJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "0kbot Research",
    description:
      "Investigación técnica sobre MCP, agentes de IA, benchmarks de automatización y tecnología de punta.",
    url: "https://0kbot.com/research",
    blogPost: posts.slice(0, 10).map((p) => ({
      "@type": "Article",
      headline: p.title,
      description: p.excerpt,
      url: `https://0kbot.com/research/${p.slug}`,
      datePublished: p.date,
      author: { "@type": "Person", name: p.author },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchJsonLd) }}
      />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-white border-b border-border">
          <div className="container-content section-padding pb-12 pt-20">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Research
                  </span>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                  AI Research
                </h1>
                <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                  Benchmarks, análisis técnicos y hallazgos sobre MCP, agentes de IA y
                  automatización avanzada. Audiencia técnica — developers y AI practitioners.
                </p>
              </div>

              <Link
                href="/blog"
                className="shrink-0 inline-flex items-center gap-2 border border-border text-muted-foreground px-6 py-3 rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors text-sm"
              >
                ← Blog pymes
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container-content py-12">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/research/${post.slug}`} className="group block h-full">
                  <article className="h-full flex flex-col rounded-xl border border-border bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="h-[180px] w-full bg-primary flex items-center justify-center shrink-0">
                      <span className="font-mono text-accent-glow text-xs opacity-60 px-4 text-center line-clamp-2">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                        <span className="text-muted-foreground text-xs">
                          {formatDate(post.date)}
                        </span>
                        <span className="text-primary text-xs font-medium group-hover:underline">
                          Leer →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-muted-foreground">
              <p className="text-lg font-heading font-bold mb-2">Próximamente</p>
              <p className="text-sm max-w-md mx-auto">
                Estamos preparando los primeros benchmarks y análisis técnicos.
                Vuelve pronto o{" "}
                <Link href="/blog" className="text-primary hover:underline">
                  visita el blog pymes
                </Link>
                .
              </p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
