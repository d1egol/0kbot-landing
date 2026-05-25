"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { BlogPostMeta } from "@/lib/blog";
import { BlogCard } from "./BlogCard";

const PAGE_SIZE = 9;

interface BlogGridProps {
  posts: BlogPostMeta[];
  categories: readonly string[];
}

export function BlogGrid({ posts, categories }: BlogGridProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeCategory = searchParams.get("category") ?? "Todos";
  const currentPage = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);

  // Filter by category
  const filteredPosts =
    activeCategory === "Todos"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const safePage = currentPage > totalPages ? 1 : currentPage;
  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  function buildHref(category: string, page: number): string {
    const params = new URLSearchParams();
    if (category !== "Todos") params.set("category", category);
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  }

  function handleCategoryClick(cat: string) {
    // Reset page when changing category
    router.push(buildHref(cat, 1), { scroll: false });
  }

  // If ?page= exceeds available pages, redirect to base URL (C11)
  if (currentPage > totalPages && typeof window !== "undefined") {
    router.replace(pathname);
    return null;
  }

  return (
    <div>
      {/* Category filter chips */}
      <div className="flex items-center gap-2 mt-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              cat === activeCategory
                ? "bg-primary text-white font-medium"
                : "bg-white border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-muted-foreground">
          <p className="text-lg">No hay artículos en esta categoría aún.</p>
        </div>
      )}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          {safePage > 1 && (
            <a
              href={buildHref(activeCategory, safePage - 1)}
              className="px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              ← Anterior
            </a>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <a
              key={page}
              href={buildHref(activeCategory, page)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                page === safePage
                  ? "bg-primary text-white font-medium"
                  : "border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {page}
            </a>
          ))}

          {safePage < totalPages && (
            <a
              href={buildHref(activeCategory, safePage + 1)}
              className="px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              Siguiente →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
