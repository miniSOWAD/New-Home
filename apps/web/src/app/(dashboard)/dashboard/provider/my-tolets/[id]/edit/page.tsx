import { HousePlus } from "lucide-react";

import { DashboardComingSoon } from "@/components/dashboard/DashboardComingSoon";

type EditToletPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditToletPage({ params }: EditToletPageProps) {
  const { id } = await params;

  return (
    <DashboardComingSoon
      title="Edit To-let Post"
      description={`Edit rental listing ID: ${id}. Providers can update rent, location, facilities, photos, and availability.`}
      icon={HousePlus}
      actionLabel="Update To-let"
    />
  );
}