import { Home } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function ProviderMyToletsPage() {
  return (
    <DashboardComingSoon
      title="My To-lets"
      description="Providers can manage their own house, flat, room, sublet, bachelor seat, office, and shop rental posts."
      icon={Home}
      actionLabel="Manage To-lets"
    />
  );
}