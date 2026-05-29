"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import type { DashboardRole } from "@/config/dashboard-nav.config";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

function getRoleFromPath(pathname: string): DashboardRole {
  if (pathname.startsWith("/dashboard/super-admin")) {
    return "SUPER_ADMIN";
  }

  if (pathname.startsWith("/dashboard/admin")) {
    return "ADMIN";
  }

  if (pathname.startsWith("/dashboard/provider")) {
    return "PROVIDER";
  }

  return "CUSTOMER";
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const role = useMemo(() => getRoleFromPath(pathname), [pathname]);

  return (
    <div className="min-h-screen bg-[#fff8ed]">
      <DashboardSidebar
        role={role}
        isCollapsed={isCollapsed}
        isMobileOpen={isMobileOpen}
        onCollapseChange={setIsCollapsed}
        onMobileOpenChange={setIsMobileOpen}
      />

      <div
        className={
          isCollapsed
            ? "transition-all duration-300 lg:pl-[92px]"
            : "transition-all duration-300 lg:pl-[292px]"
        }
      >
        <DashboardHeader
          role={role}
          onMenuClick={() => setIsMobileOpen(true)}
          isCollapsed={isCollapsed}
          onCollapseChange={setIsCollapsed}
        />

        <main className="min-h-[calc(100vh-76px)] px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}