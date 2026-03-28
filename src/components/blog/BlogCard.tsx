import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPostMeta, formatDate } from "@/lib/blog";
import { CategoryBadge } from "./CategoryBadge";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
  className?: string;
}

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className={cn("group block", className)}>
        <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1B5FA6] to-[#0d3d6e] text-white h-full min-h-[400px] flex flex-col justify-end p-8 hover:shadow-2xl transition-all duration-300">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 right-8 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#D4A853]/30 blur-2xl" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#D4A853] text-[#1A1A1A] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Destacado
              </span>
              <CategoryBadge
                category={post.category}
                className="border-white/30 bg-white/10 text-white"
              />
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#D4A853] transition-colors leading-tight">
              {post.title}
            </h2>

            <p className="text-white/80 text-base mb-6 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingTime}
                </span>
              </div>
              <span className="flex items-center gap-1 text-[#D4A853] font-medium text-sm group-hover:gap-2 transition-all">
                Leer más <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className={cn("group block h-full", className)}>
      <article className="h-full flex flex-col rounded-xl border border-[#E5E2DB] bg-white hover:border-[#1B5FA6]/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Color band top */}
        <div className="h-1.5 bg-gradient-to-r from-[#1B5FA6] to-[#D4A853]" />

        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center gap-2 mb-4">
            <CategoryBadge category={post.category} size="sm" />
          </div>

          <h3 className="font-heading text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#1B5FA6] transition-colors leading-tight line-clamp-2">
            {post.title}
          </h3>

          <p className="text-[#666] text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-[#E5E2DB] mt-auto">
            <div className="flex items-center gap-3 text-[#999] text-xs">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#1B5FA6] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}
