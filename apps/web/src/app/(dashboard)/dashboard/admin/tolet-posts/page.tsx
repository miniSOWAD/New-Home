import { Building2 } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function AdminToletPostsPage() {
  return (
    <DashboardComingSoon
      title="To-let Posts"
      description="Admin can review, approve, reject, and manage rental listings posted by providers."
      icon={Building2}
      actionLabel="Manage Posts"
    />
  );
}