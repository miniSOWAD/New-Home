import { Settings } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function SuperAdminSettingsPage() {
  return (
    <DashboardComingSoon
      title="Platform Settings"
      description="Control platform settings, categories, approval rules, featured post pricing, system preferences, and security options."
      icon={Settings}
      actionLabel="Open Settings"
    />
  );
}