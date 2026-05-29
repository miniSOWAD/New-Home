import {
  BarChart3,
  Building2,
  ClipboardCheck,
  FileWarning,
  ShieldCheck,
  Users
} from "lucide-react";

import { DashboardStatsCard } from "@/components/dashboard/DashboardStatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function SuperAdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Supreme Control
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">
          Super Admin Dashboard
        </h1>
        <p className="mt-3 max-w-2xl text-white/85">
          Manage the full New Home platform, admins, users, approvals, listings,
          service posts, reports, settings, and audit logs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardStatsCard
          title="Total Users"
          value="1,248"
          description="Customers, providers, and admins"
          trend="+12% this month"
          icon={Users}
        />
        <DashboardStatsCard
          title="Pending Approvals"
          value="36"
          description="Accounts waiting for review"
          trend="Needs action"
          icon={ClipboardCheck}
        />
        <DashboardStatsCard
          title="To-let Posts"
          value="428"
          description="Rental listings submitted"
          icon={Building2}
        />
        <DashboardStatsCard
          title="Reports"
          value="14"
          description="User and listing reports"
          icon={FileWarning}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.7rem] border border-orange-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                Analytics
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-950">
                Platform Overview
              </h2>
            </div>

            <BarChart3 className="size-8 text-orange-500" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-orange-50 p-5">
              <ShieldCheck className="mb-4 size-7 text-orange-500" />
              <p className="text-2xl font-black">98%</p>
              <p className="text-sm text-slate-500">Verified Access</p>
            </div>

            <div className="rounded-2xl bg-yellow-50 p-5">
              <Building2 className="mb-4 size-7 text-orange-500" />
              <p className="text-2xl font-black">212</p>
              <p className="text-sm text-slate-500">Active To-lets</p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <Users className="mb-4 size-7 text-orange-500" />
              <p className="text-2xl font-black">89</p>
              <p className="text-sm text-slate-500">Providers</p>
            </div>
          </div>
        </div>

        <RecentActivity />
      </div>
    </div>
  );
}