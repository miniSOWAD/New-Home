import { Star } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function CustomerReviewsPage() {
  return (
    <DashboardComingSoon
      title="My Reviews"
      description="Customers can review completed service requests and rental experiences."
      icon={Star}
      actionLabel="View Reviews"
    />
  );
}