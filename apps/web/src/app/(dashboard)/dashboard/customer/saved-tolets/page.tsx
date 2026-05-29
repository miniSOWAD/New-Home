import { Heart } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function SavedToletsPage() {
  return (
    <DashboardComingSoon
      title="Saved To-lets"
      description="Customers can view saved houses, flats, rooms, sublets, bachelor seats, family houses, offices, and shops."
      icon={Heart}
      actionLabel="View Saved To-lets"
    />
  );
}