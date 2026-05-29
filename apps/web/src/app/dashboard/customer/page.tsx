import {
  Building2,
  ClipboardCheck,
  Heart,
  MessageSquare,
  Search,
  Star,
  Wrench
} from "lucide-react";

import { DashboardStatsCard } from "@/components/dashboard/DashboardStatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function CustomerDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Customer Space
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">
          Customer Dashboard
        </h1>
        <p className="mt-3 max-w-2xl text-white/85">
          Search rentals, save To-let posts, save services, send requests,
          communicate with providers, and review completed services.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardStatsCard
          title="Saved To-lets"
          value="12"
          description="Rental listings saved"
          icon={Heart}
        />
        <DashboardStatsCard
          title="Saved Services"
          value="8"
          description="Providers saved"
          icon={Star}
        />
        <DashboardStatsCard
          title="My Requests"
          value="5"
          description="Sent service/rental requests"
          trend="2 pending"
          icon={ClipboardCheck}
        />
        <DashboardStatsCard
          title="Messages"
          value="16"
          description="Conversations with providers"
          icon={MessageSquare}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.7rem] border border-orange-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Quick Start
          </p>
          <h2 className="mt-1 text-2xl font-black text-slate-950">
            What do you want to find?
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-orange-50 p-5">
              <Building2 className="mb-4 size-7 text-orange-500" />
              <p className="font-black">Find To-let</p>
              <p className="mt-1 text-sm text-slate-500">
                Search rooms, flats, houses, and spaces.
              </p>
            </div>

            <div className="rounded-2xl bg-yellow-50 p-5">
              <Wrench className="mb-4 size-7 text-orange-500" />
              <p className="font-black">Find Service</p>
              <p className="mt-1 text-sm text-slate-500">
                Search cooks, maids, drivers, and more.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <Search className="mb-4 size-7 text-orange-500" />
              <p className="font-black">Smart Search</p>
              <p className="mt-1 text-sm text-slate-500">
                AI search will be added with LangChain.
              </p>
            </div>
          </div>
        </div>

        <RecentActivity />
      </div>
    </div>
  );
}