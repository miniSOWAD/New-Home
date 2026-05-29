import { ClipboardCheck } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function AdminApprovalsPage() {
  return (
    <DashboardComingSoon
      title="Approvals"
      description="Admin can approve or reject customers, providers, to-let posts, and service posts."
      icon={ClipboardCheck}
      actionLabel="Review Approvals"
    />
  );
}