import { Users } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function AdminUsersPage() {
  return (
    <DashboardComingSoon
      title="Users"
      description="Admin can manage customers and providers, review their profiles, and suspend suspicious accounts."
      icon={Users}
      actionLabel="Manage Users"
    />
  );
}