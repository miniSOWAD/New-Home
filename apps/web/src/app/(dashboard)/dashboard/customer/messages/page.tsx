import { MessageSquare } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

export default function CustomerMessagesPage() {
  return (
    <DashboardComingSoon
      title="Messages"
      description="Customers can communicate with providers and property owners after login and account approval."
      icon={MessageSquare}
      actionLabel="Open Messages"
    />
  );
}