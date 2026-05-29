import { Wrench } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function ProviderMyServicesPage() {
  return (
    <DashboardComingSoon
      title="My Services"
      description="Providers can manage offered services such as cook, housemaid, cleaner, driver, electrician, plumber, tutor, and caregiver."
      icon={Wrench}
      actionLabel="Manage Services"
    />
  );
}