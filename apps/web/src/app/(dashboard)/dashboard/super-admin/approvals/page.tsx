import { ClipboardCheck } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function SuperAdminApprovalsPage() {
  return (
    <DashboardComingSoon
      title="Approval Requests"
      description="Review pending customer, provider, admin, to-let, and service post approval requests."
      icon={ClipboardCheck}
      actionLabel="Review Approvals"
    />
  );
}