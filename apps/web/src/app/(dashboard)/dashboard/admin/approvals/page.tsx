"use client";

import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { ApprovalTable } from "@/components/dashboard/ApprovalTable";
import { dashboardService } from "@/services/dashboard.service";

export default function AdminApprovalsPage() {
  const approvalsQuery = useQuery({
    queryKey: ["dashboard", "admin", "approvals"],
    queryFn: () => dashboardService.getApprovals({ role: "ADMIN" })
  });

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Admin / Approvals
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">Approvals</h1>

        <p className="mt-3 max-w-2xl text-white/85">
          Review pending customers, providers, To-let posts, and service posts.
        </p>
      </div>

      <ApprovalTable
        items={approvalsQuery.data?.data ?? []}
        isLoading={approvalsQuery.isLoading}
        onView={(id) => toast.info(`Open approval details API pending: ${id}`)}
        onApprove={(id) => toast.success(`Approve request API pending: ${id}`)}
        onReject={(id) => toast.error(`Reject request API pending: ${id}`)}
      />
    </div>
  );
}