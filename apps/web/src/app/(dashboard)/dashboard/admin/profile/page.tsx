import { Settings } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function AdminProfilePage() {
  return (
    <DashboardComingSoon
      title="Admin Profile"
      description="Admin can update profile information, password, contact details, and account preferences."
      icon={Settings}
      actionLabel="Edit Profile"
    />
  );
}