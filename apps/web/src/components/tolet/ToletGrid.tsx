import { EmptyState } from "@/components/shared/EmptyState";
import { ToletCard } from "@/components/tolet/ToletCard";
import type { ToletPost } from "@/types/tolet.types";

type ToletGridProps = {
  tolets: Array<
    Partial<ToletPost> & {
      id: string;
      title: string;
      location: string;
    }
  >;
};

export function ToletGrid({ tolets }: ToletGridProps) {
  if (tolets.length === 0) {
    return (
      <EmptyState
        title="No to-let posts found"
        description="Try changing your filters or search another location."
      />
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {tolets.map((tolet) => (
        <ToletCard key={tolet.id} tolet={tolet} />
      ))}
    </div>
  );
}