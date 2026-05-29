import { Building2 } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function SuperAdminToletPostsPage() {
  return (
    <DashboardComingSoon
      title="To-let Post Management"
      description="View, approve, reject, edit, remove, and monitor all rental listings submitted by providers."
      icon={Building2}
      actionLabel="Manage To-let Posts"
    />
  );
}