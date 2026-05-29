import { ClipboardCheck } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function ProviderRequestsPage() {
  return (
    <DashboardComingSoon
      title="Customer Requests"
      description="Providers can accept, reject, complete, and manage customer requests for rentals and services."
      icon={ClipboardCheck}
      actionLabel="View Requests"
    />
  );
}