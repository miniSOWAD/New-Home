import { Wrench } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function SuperAdminServicePostsPage() {
  return (
    <DashboardComingSoon
      title="Service Post Management"
      description="Manage all provider service posts including cooks, housemaids, cleaners, drivers, electricians, plumbers, tutors, and more."
      icon={Wrench}
      actionLabel="Manage Services"
    />
  );
}