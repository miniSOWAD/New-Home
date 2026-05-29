import { PlusCircle } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

type EditServicePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditServicePage({ params }: EditServicePageProps) {
  const { id } = await params;

  return (
    <DashboardComingSoon
      title="Edit Service Post"
      description={`Edit service post ID: ${id}. Providers can update service rate, skill, experience, availability, location, and details.`}
      icon={PlusCircle}
      actionLabel="Update Service"
    />
  );
}