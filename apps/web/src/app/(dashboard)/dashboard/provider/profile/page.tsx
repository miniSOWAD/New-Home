import { Settings } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function ProviderProfilePage() {
  return (
    <DashboardComingSoon
      title="Provider Profile"
      description="Providers can update personal information, service area, experience, contact details, password, and verification information."
      icon={Settings}
      actionLabel="Edit Profile"
    />
  );
}