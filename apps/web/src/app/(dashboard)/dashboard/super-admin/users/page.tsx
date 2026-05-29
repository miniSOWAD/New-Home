import { Users } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function SuperAdminUsersPage() {
  return (
    <DashboardComingSoon
      title="User Management"
      description="Super Admin can view, approve, suspend, delete, and manage all customers, providers, and admins from this section."
      icon={Users}
      actionLabel="Manage Users"
    />
  );
}