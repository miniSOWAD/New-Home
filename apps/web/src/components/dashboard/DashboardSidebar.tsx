"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  LogOut,
  Menu,
  PanelLeftClose,
  X
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  dashboardNavItems,
  roleLabels,
  type DashboardRole
} from "@/config/dashboard-nav.config";
import { cn } from "@/lib/utils";

type DashboardSidebarProps = {
  role: DashboardRole;
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onCollapseChange: (value: boolean) => void;
  onMobileOpenChange: (value: boolean) => void;
};

export function DashboardSidebar({
  role,
  isCollapsed,
  isMobileOpen,
  onCollapseChange,
  onMobileOpenChange
}: DashboardSidebarProps) {
  const pathname = usePathname();
  const navItems = dashboardNavItems[role];

  const isActive = (href: string) => {
    if (href === `/dashboard/${role.toLowerCase().replace("_", "-")}`) {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {isMobileOpen ? (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => onMobileOpenChange(false)}
        />
      ) : null}

      <aside
        className={cn(
          "fixed left-0 top-0 z-[90] flex h-screen flex-col border-r border-orange-100 bg-white shadow-[0_20px_60px_rgba(251,146,60,0.18)] transition-all duration-300",
          isCollapsed ? "lg:w-[92px]" : "lg:w-[292px]",
          isMobileOpen ? "w-[292px] translate-x-0" : "w-[292px] -translate-x-full lg:translate-x-0"
        )}
      >
        <div className="relative overflow-hidden border-b border-orange-100 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-5 text-white">
          <div className="absolute -right-10 -top-10 size-36 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-yellow-200/25 blur-2xl" />

          <div
            className={cn(
              "relative flex items-center gap-3",
              isCollapsed && "lg:justify-center"
            )}
          >
            <Link
              href="/"
              className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-orange-600 shadow-lg shadow-orange-700/20"
            >
              <Home className="size-6" />
            </Link>

            {!isCollapsed ? (
              <div className="min-w-0">
                <p className="truncate text-xl font-black tracking-tight">
                  New Home
                </p>
                <p className="text-xs font-medium text-white/80">
                  {roleLabels[role]} Dashboard
                </p>
              </div>
            ) : null}

            <button
              type="button"
              className="ml-auto inline-flex size-9 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur transition hover:bg-white/25 lg:hidden"
              onClick={() => onMobileOpenChange(false)}
              aria-label="Close sidebar"
            >
              <X className="size-5" />
            </button>
          </div>

          {!isCollapsed ? (
            <div className="relative mt-5 rounded-2xl bg-white/15 p-4 backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/75">
                Access Level
              </p>
              <p className="mt-1 text-lg font-black">{roleLabels[role]}</p>
            </div>
          ) : null}
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div
            className={cn(
              "mb-3 hidden items-center lg:flex",
              isCollapsed ? "justify-center" : "justify-between px-2"
            )}
          >
            {!isCollapsed ? (
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                Navigation
              </p>
            ) : null}

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-9 rounded-xl text-orange-500 hover:bg-orange-50 hover:text-orange-600"
              onClick={() => onCollapseChange(!isCollapsed)}
            >
              {isCollapsed ? (
                <ChevronRight className="size-5" />
              ) : (
                <PanelLeftClose className="size-5" />
              )}
            </Button>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => onMobileOpenChange(false)}
                  title={isCollapsed ? item.title : undefined}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-bold transition-all duration-200",
                    active
                      ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg shadow-orange-500/25"
                      : "text-slate-600 hover:bg-orange-50 hover:text-orange-600",
                    isCollapsed && "lg:justify-center lg:px-0"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-xl transition-all",
                      active
                        ? "bg-white/20 text-white"
                        : "bg-orange-50 text-orange-500 group-hover:bg-orange-100"
                    )}
                  >
                    <Icon className="size-5" />
                  </span>

                  {!isCollapsed ? (
                    <span className="truncate">{item.title}</span>
                  ) : null}

                  {!isCollapsed && active ? (
                    <span className="ml-auto size-2 rounded-full bg-white" />
                  ) : null}

                  {isCollapsed ? (
                    <span className="pointer-events-none absolute left-[72px] z-50 hidden rounded-xl bg-slate-950 px-3 py-2 text-xs font-semibold text-white shadow-xl group-hover:lg:block">
                      {item.title}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-orange-100 p-3">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start rounded-2xl text-slate-600 hover:bg-red-50 hover:text-red-600",
              isCollapsed && "lg:justify-center lg:px-0"
            )}
          >
            <LogOut className="size-5" />
            {!isCollapsed ? <span className="ml-3">Logout</span> : null}
          </Button>
        </div>

        <button
          type="button"
          aria-label="Collapse sidebar"
          onClick={() => onCollapseChange(!isCollapsed)}
          className="absolute -right-4 top-28 hidden size-8 items-center justify-center rounded-full border border-orange-100 bg-white text-orange-500 shadow-lg transition hover:bg-orange-50 lg:flex"
        >
          {isCollapsed ? (
            <ChevronRight className="size-4" />
          ) : (
            <ChevronLeft className="size-4" />
          )}
        </button>
      </aside>
    </>
  );
}