import { Star } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function SavedServicesPage() {
  return (
    <DashboardComingSoon
      title="Saved Services"
      description="Customers can view saved cooks, housemaids, cleaners, drivers, electricians, plumbers, tutors, and caregivers."
      icon={Star}
      actionLabel="View Saved Services"
    />
  );
}