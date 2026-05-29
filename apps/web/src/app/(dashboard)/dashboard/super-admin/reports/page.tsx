"use client";

import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { ReportManagementTable } from "@/components/dashboard/ReportManagementTable";
import { dashboardService } from "@/services/dashboard.service";

export default function SuperAdminReportsPage() {
  const reportsQuery = useQuery({
    queryKey: ["dashboard", "super-admin", "reports"],
    queryFn: () => dashboardService.getReports()
  });

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Super Admin / Reports
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">Reports</h1>

        <p className="mt-3 max-w-2xl text-white/85">
          Review safety reports, suspicious users, fake posts, and complaints
          from the database.
        </p>
      </div>

      <ReportManagementTable
        reports={reportsQuery.data?.data ?? []}
        isLoading={reportsQuery.isLoading}
        onView={(id) => toast.info(`Open report details API pending: ${id}`)}
        onResolve={(id) => toast.success(`Resolve report API pending: ${id}`)}
        onReject={(id) => toast.error(`Reject report API pending: ${id}`)}
      />
    </div>
  );
}