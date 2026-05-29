import { Wallet } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function ProviderEarningsPage() {
  return (
    <DashboardComingSoon
      title="Earnings"
      description="Providers can view estimated earnings from rental posts, service requests, completed jobs, and future payment integrations."
      icon={Wallet}
      actionLabel="View Earnings"
    />
  );
}