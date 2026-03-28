import Link from "next/link";
import { BlogPostMeta, formatDate } from "@/lib/blog";
import { CategoryBadge } from "./CategoryBadge";
import { ArrowRight, Calendar } from "lucide-react";

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-[#E5E2DB]">
      <h2 className="font-heading text-2xl font-bold text-[#1A1A1A] mb-8">
        Artículos relacionados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="rounded-xl border border-[#E5E2DB] bg-white p-5 hover:border-[#1B5FA6]/30 hover:shadow-md transition-all duration-200 h-full flex flex-col">
              <CategoryBadge category={post.category} size="sm" className="mb-3 self-start" />
              <h3 className="font-semibold text-[#1A1A1A] group-hover:text-[#1B5FA6] transition-colors text-sm leading-snug flex-1 mb-3 line-clamp-3">
                {post.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-[#999] mt-auto">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.date)}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1B5FA6] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
