import { MessageSquare } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function ProviderMessagesPage() {
  return (
    <DashboardComingSoon
      title="Messages"
      description="Providers can communicate with customers who send rental or service requests."
      icon={MessageSquare}
      actionLabel="Open Messages"
    />
  );
}