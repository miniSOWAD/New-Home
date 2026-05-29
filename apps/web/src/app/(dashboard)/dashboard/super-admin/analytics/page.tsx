"use client";

import { Building2, ClipboardCheck, FileWarning, Users, Wrench } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import {
  AnalyticsChart,
  type AnalyticsChartItem
} from "@/components/dashboard/AnalyticsChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { dashboardService } from "@/services/dashboard.service";

const iconMap = {
  USERS: Users,
  TOLETS: Building2,
  SERVICES: Wrench,
  REQUESTS: ClipboardCheck,
  REPORTS: FileWarning
};

export default function SuperAdminAnalyticsPage() {
  const analyticsQuery = useQuery({
    queryKey: ["dashboard", "super-admin", "analytics"],
    queryFn: dashboardService.getAnalytics
  });

  const activitiesQuery = useQuery({
    queryKey: ["dashboard", "super-admin", "recent-activities"],
    queryFn: () => dashboardService.getRecentActivities({ role: "SUPER_ADMIN" })
  });

  const analyticsItems: AnalyticsChartItem[] =
    analyticsQuery.data?.data?.map((item) => ({
      label: item.label,
      value: item.value,
      icon: iconMap[item.type]
    })) ?? [];

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Super Admin / Analytics
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">
          Platform Analytics
        </h1>

        <p className="mt-3 max-w-2xl text-white/85">
          Track real platform analytics fetched from the backend database.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <AnalyticsChart title="Database Activity Overview" items={analyticsItems} />

        <RecentActivity
          items={activitiesQuery.data?.data ?? []}
          isLoading={activitiesQuery.isLoading}
        />
      </div>
    </div>
  );
}