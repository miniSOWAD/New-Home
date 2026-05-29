import { EmptyState } from "@/components/shared/EmptyState";
import { ServiceCard } from "@/components/services/ServiceCard";
import type { ServicePost } from "@/types/service.types";

type ServiceGridProps = {
  services: Array<
    Partial<ServicePost> & {
      id: string;
      title: string;
      location: string;
    }
  >;
};

export function ServiceGrid({ services }: ServiceGridProps) {
  if (services.length === 0) {
    return (
      <EmptyState
        title="No services found"
        description="Try changing your filters or search another service category."
      />
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}