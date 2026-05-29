import { ClipboardCheck } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function CustomerRequestsPage() {
  return (
    <DashboardComingSoon
      title="My Requests"
      description="Customers can track sent rental requests and service requests with pending, accepted, rejected, and completed statuses."
      icon={ClipboardCheck}
      actionLabel="View Requests"
    />
  );
}