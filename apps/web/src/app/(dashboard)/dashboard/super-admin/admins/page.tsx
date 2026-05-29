import { ShieldCheck } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function SuperAdminAdminsPage() {
  return (
    <DashboardComingSoon
      title="Admin Management"
      description="Super Admin can create admins, remove admins, assign permissions, and monitor admin activity."
      icon={ShieldCheck}
      actionLabel="Manage Admins"
    />
  );
}