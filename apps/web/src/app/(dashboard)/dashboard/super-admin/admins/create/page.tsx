import { ShieldCheck } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function CreateAdminPage() {
  return (
    <DashboardComingSoon
      title="Create Admin"
      description="Only Super Admin can create new admin accounts for managing platform approvals, reports, users, and listings."
      icon={ShieldCheck}
      actionLabel="Create Admin"
    />
  );
}