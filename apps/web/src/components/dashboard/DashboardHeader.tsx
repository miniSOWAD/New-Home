"use client";

import { Menu, Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NotificationBell } from "@/components/shared/NotificationBell";
import {
  dashboardQuickActions,
  roleLabels,
  type DashboardRole
} from "@/config/dashboard-nav.config";

type DashboardHeaderProps = {
  role: DashboardRole;
  userName?: string;
  notificationCount?: number;
  onMenuClick: () => void;
  isCollapsed: boolean;
  onCollapseChange: (value: boolean) => void;
};

export function DashboardHeader({
  role,
  userName = "New Home User",
  notificationCount = 0,
  onMenuClick
}: DashboardHeaderProps) {
  const initials = userName
    .split(" ")
    .map((item) => item[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-40 border-b border-orange-100 bg-white/90 backdrop-blur-xl">
      <div className="flex h-[76px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="rounded-xl text-orange-500 hover:bg-orange-50 lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="size-6" />
        </Button>

        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
            {roleLabels[role]}
          </p>

          <h1 className="truncate text-xl font-black tracking-tight text-slate-900 md:text-2xl">
            Dashboard
          </h1>
        </div>

        <div className="ml-auto hidden w-full max-w-md items-center md:flex">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-400" />

            <Input
              placeholder="Search dashboard..."
              className="border-orange-100 bg-orange-50/50 pl-11 focus-visible:ring-orange-400"
            />
          </div>
        </div>

        <Button className="hidden rounded-2xl bg-yellow-400 font-black text-slate-950 shadow-lg shadow-yellow-400/25 hover:bg-yellow-300 md:inline-flex">
          <Sparkles className="mr-2 size-4" />
          {dashboardQuickActions[role]}
        </Button>

        <NotificationBell count={notificationCount} />

        <div className="hidden items-center gap-3 rounded-2xl border border-orange-100 bg-orange-50 px-3 py-2 sm:flex">
          <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 text-sm font-black text-white">
            {initials}
          </div>

          <div className="hidden lg:block">
            <p className="text-sm font-black text-slate-900">{userName}</p>
            <p className="text-xs text-slate-500">{roleLabels[role]}</p>
          </div>
        </div>
      </div>
    </header>
  );
}