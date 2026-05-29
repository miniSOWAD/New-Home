import { PlusCircle } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function ProviderCreateServicePage() {
  return (
    <DashboardComingSoon
      title="Create Service Post"
      description="Providers can create service posts with category, skill, experience, rate, location, availability, and description."
      icon={PlusCircle}
      actionLabel="Create Service"
    />
  );
}