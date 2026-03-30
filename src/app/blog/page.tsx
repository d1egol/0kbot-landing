import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getFeaturedPost, CATEGORIES } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Rss } from "lucide-react";

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
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPost();
  const regularPosts = allPosts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[#F7F5F0]">
      {/* Header */}
      <section className="bg-white border-b border-[#E5E2DB]">
        <div className="container-content section-padding pb-12 pt-20">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Link
                  href="/feed.xml"
                  title="RSS Feed"
                  className="text-[#1B5FA6] hover:text-[#154d8a] transition-colors"
                >
                  <Rss className="w-5 h-5" />
                </Link>
                <span className="text-sm font-medium text-[#1B5FA6] uppercase tracking-wider">
                  Blog
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
                Noticias de IA y<br />
                <span className="text-gradient-accent">Automatización</span>
              </h1>
              <p className="text-[#666] text-lg max-w-xl leading-relaxed">
                Casos reales, tutoriales prácticos y las últimas noticias sobre
                inteligencia artificial para empresas latinoamericanas.
              </p>
            </div>

            <Link
              href="/contacto"
              className="shrink-0 inline-flex items-center gap-2 bg-[#1B5FA6] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#154d8a] transition-colors text-sm"
            >
              Diagnóstico gratuito
            </Link>
          </div>

          {/* Category filter */}
          <div className="flex items-center gap-2 mt-10 flex-wrap">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm cursor-pointer transition-colors ${
                  cat === "Todos"
                    ? "bg-[#1B5FA6] text-white font-medium"
                    : "bg-white border border-[#E5E2DB] text-[#666] hover:border-[#1B5FA6] hover:text-[#1B5FA6]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-content py-12">
        {/* Featured post */}
        {featuredPost && (
          <div className="mb-12">
            <BlogCard post={featuredPost} featured />
          </div>
        )}

        {/* Regular posts grid */}
        {regularPosts.length > 0 && (
          <>
            <h2 className="font-heading text-2xl font-bold text-[#1A1A1A] mb-6">
              Todos los artículos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}

        {allPosts.length === 0 && (
          <div className="text-center py-24 text-[#999]">
            <p className="text-lg">Próximamente nuevos artículos.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1B5FA6] to-[#0d3d6e] p-8 md:p-12 text-white text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
            No te pierdas ningún artículo
          </h3>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Recibe en tu email las últimas noticias de IA y casos de automatización
            para pymes latinoamericanas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-[#1B5FA6] text-[#1A1A1A] px-8 py-3 rounded-xl font-bold hover:bg-[#c49843] transition-colors"
          >
            Suscribirme al newsletter
          </Link>
        </div>
      </section>
    </main>
  );
}
