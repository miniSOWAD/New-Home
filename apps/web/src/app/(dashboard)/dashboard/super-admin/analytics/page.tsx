import { BarChart3 } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function SuperAdminAnalyticsPage() {
  return (
    <DashboardComingSoon
      title="Platform Analytics"
      description="Track total users, approvals, posts, services, requests, reports, and overall platform growth."
      icon={BarChart3}
      actionLabel="View Analytics"
    />
  );
}