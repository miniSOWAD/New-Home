import { Skeleton } from "@/components/ui/skeleton";
import { PageHeader } from "@/components/shared/PageHeader";

export default function ToLetLoading() {
  return (
    <div>
      <PageHeader
        badge="To-let Hub"
        title="Find houses, rooms, flats, and spaces"
        description="Loading rental listings..."
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="mb-8 rounded-3xl border bg-card p-5 shadow-sm">
            <Skeleton className="h-11 w-full" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border bg-card shadow-sm"
              >
                <Skeleton className="h-48 w-full rounded-none" />

                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-28" />
                  </div>

                  <Skeleton className="h-7 w-3/4" />
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-5/6" />

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Skeleton className="h-11 w-full" />
                    <Skeleton className="h-11 w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="rounded-2xl border bg-card p-6">
                <Skeleton className="mb-4 size-8" />
                <Skeleton className="h-6 w-36" />
                <Skeleton className="mt-3 h-5 w-full" />
                <Skeleton className="mt-2 h-5 w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}