import { FileWarning } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function AuditLogsPage() {
  return (
    <DashboardComingSoon
      title="Audit Logs"
      description="View system logs for admin actions, approvals, rejected posts, user suspensions, and important platform events."
      icon={FileWarning}
      actionLabel="View Logs"
    />
  );
}