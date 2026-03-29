import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostLoading() {
  return (
    <main className="min-h-screen bg-[#F7F5F0]">
      {/* Header skeleton */}
      <header className="bg-white border-b border-[#E5E2DB]">
        <div className="container-content pt-8 pb-12">
          <div className="flex items-center gap-2 mb-8">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-48" />
          </div>
          <div className="max-w-3xl space-y-4">
            <Skeleton className="h-6 w-28 rounded-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <div className="flex gap-6 mt-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </div>
      </header>

      {/* Content skeleton */}
      <div className="container-content py-12">
        <div className="flex gap-12">
          <div className="flex-1 min-w-0 max-w-3xl space-y-3">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#E5E2DB] space-y-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <Skeleton key={i} className={`h-4 ${i % 4 === 3 ? "w-2/3" : "w-full"}`} />
              ))}
            </div>
          </div>
          <aside className="hidden lg:block w-72 shrink-0 space-y-4">
            <div className="rounded-xl border border-[#E5E2DB] bg-white p-6 space-y-3">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
