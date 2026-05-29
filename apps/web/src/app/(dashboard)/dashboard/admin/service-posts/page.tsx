import { Wrench } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function AdminServicePostsPage() {
  return (
    <DashboardComingSoon
      title="Service Posts"
      description="Admin can review and manage provider service posts such as cook, housemaid, cleaner, driver, electrician, and plumber services."
      icon={Wrench}
      actionLabel="Manage Services"
    />
  );
}