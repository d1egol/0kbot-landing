import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";
import { getRecentPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export function BlogPreviewSection() {
  const posts = getRecentPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="section-padding bg-[#F7F5F0]">
      <div className="container-content">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-12 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Rss className="w-4 h-4 text-[#1B5FA6]" />
              <span className="text-sm font-semibold text-[#1B5FA6] uppercase tracking-wider">
                Blog
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Últimas noticias de IA
            </h2>
            <p className="text-[#666] mt-2 max-w-lg">
              Casos reales, tutoriales y noticias sobre automatización para
              empresas latinoamericanas.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#1B5FA6] font-semibold hover:gap-3 transition-all text-sm group"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border-2 border-[#1B5FA6] text-[#1B5FA6] px-8 py-3 rounded-xl font-semibold hover:bg-[#1B5FA6] hover:text-white transition-all"
          >
            Ir al blog completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
