import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";
import { getRecentPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export function BlogPreviewSection() {
  const posts = getRecentPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="section-padding bg-[#FBFBF9]">
      <div className="container-content">
        {/* Header */}
        <div className="flex items-end justify-between gap-4 mb-12 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Rss className="w-4 h-4 text-[#1E40AF]" />
              <span className="text-sm font-semibold text-[#1E40AF] uppercase tracking-wider">
                Blog
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] text-[#1A1A1A]">
              Artículos recientes
            </h2>
            <p className="text-[#666] mt-2 max-w-lg">
              Tutoriales, guías y análisis sobre mejora de procesos y
              automatización para pymes chilenas.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#1E40AF] font-semibold hover:gap-3 transition-all text-sm group"
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
            className="inline-flex items-center gap-2 border-2 border-[#1E40AF] text-[#1E40AF] px-8 py-3 rounded-xl font-semibold hover:bg-[#1E40AF] hover:text-white transition-all"
          >
            Ir al blog completo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
