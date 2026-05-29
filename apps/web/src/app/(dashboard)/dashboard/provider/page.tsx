import {
  Building2,
  ClipboardCheck,
  Home,
  MessageSquare,
  PlusCircle,
  Wallet,
  Wrench
} from "lucide-react";

import { DashboardStatsCard } from "@/components/dashboard/DashboardStatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function ProviderDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Provider Workspace
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">
          Provider Dashboard
        </h1>
        <p className="mt-3 max-w-2xl text-white/85">
          Create To-let posts, offer home services, manage customer requests,
          communicate with customers, and track earnings.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardStatsCard
          title="My To-lets"
          value="7"
          description="Rental posts created"
          icon={Home}
        />
        <DashboardStatsCard
          title="My Services"
          value="3"
          description="Service posts active"
          icon={Wrench}
        />
        <DashboardStatsCard
          title="Requests"
          value="18"
          description="Customer requests received"
          trend="5 pending"
          icon={ClipboardCheck}
        />
        <DashboardStatsCard
          title="Earnings"
          value="৳24k"
          description="Estimated monthly income"
          icon={Wallet}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.7rem] border border-orange-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Provider Actions
          </p>
          <h2 className="mt-1 text-2xl font-black text-slate-950">
            Manage your work
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-orange-50 p-5">
              <Building2 className="mb-4 size-7 text-orange-500" />
              <p className="font-black">Post To-let</p>
              <p className="mt-1 text-sm text-slate-500">
                Add houses, rooms, flats, and spaces.
              </p>
            </div>

            <div className="rounded-2xl bg-yellow-50 p-5">
              <PlusCircle className="mb-4 size-7 text-orange-500" />
              <p className="font-black">Add Service</p>
              <p className="mt-1 text-sm text-slate-500">
                Offer cook, housemaid, cleaning, repair, or other services.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <MessageSquare className="mb-4 size-7 text-orange-500" />
              <p className="font-black">Reply Customers</p>
              <p className="mt-1 text-sm text-slate-500">
                Manage messages and requests from customers.
              </p>
            </div>
          </div>
        </div>

        <RecentActivity />
      </div>
    </div>
  );
}