import { Settings } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function CustomerProfilePage() {
  return (
    <DashboardComingSoon
      title="Customer Profile"
      description="Customers can update personal information, phone number, location, password, and account preferences."
      icon={Settings}
      actionLabel="Edit Profile"
    />
  );
}