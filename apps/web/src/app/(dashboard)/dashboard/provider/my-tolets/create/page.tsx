import { HousePlus } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function ProviderCreateToletPage() {
  return (
    <DashboardComingSoon
      title="Create To-let Post"
      description="Providers can create rental posts with title, category, location, rent, photos, facilities, and availability."
      icon={HousePlus}
      actionLabel="Create To-let"
    />
  );
}