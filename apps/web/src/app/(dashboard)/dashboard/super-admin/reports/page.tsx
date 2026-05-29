import { FileWarning } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function SuperAdminReportsPage() {
  return (
    <DashboardComingSoon
      title="Reports"
      description="Review user reports, fake listing reports, suspicious service providers, and safety complaints."
      icon={FileWarning}
      actionLabel="Review Reports"
    />
  );
}