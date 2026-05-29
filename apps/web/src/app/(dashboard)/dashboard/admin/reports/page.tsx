import { FileWarning } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function AdminReportsPage() {
  return (
    <DashboardComingSoon
      title="Reports"
      description="Admin can handle user complaints, fake post reports, suspicious provider reports, and safety issues."
      icon={FileWarning}
      actionLabel="Review Reports"
    />
  );
}