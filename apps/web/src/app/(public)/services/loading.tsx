import { Skeleton } from "@/components/ui/skeleton";
import { PageHeader } from "@/components/shared/PageHeader";

export default function ServicesLoading() {
  return (
    <div>
      <PageHeader
        badge="Service Pro"
        title="Find trusted home service providers"
        description="Loading service providers..."
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="mb-8 rounded-3xl border bg-card p-5 shadow-sm">
            <Skeleton className="h-11 w-full" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="rounded-2xl border bg-card p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <Skeleton className="size-14 rounded-2xl" />
                  <Skeleton className="h-6 w-28" />
                </div>

                <Skeleton className="h-7 w-3/4" />
                <Skeleton className="mt-4 h-5 w-2/3" />

                <div className="mt-5 rounded-2xl bg-muted p-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="mt-3 h-7 w-32" />
                </div>

                <Skeleton className="mt-4 h-5 w-1/2" />

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Skeleton className="h-11 w-full" />
                  <Skeleton className="h-11 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}