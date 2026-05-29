"use client";

import { create } from "zustand";

import type { DashboardRole } from "@/config/dashboard-nav.config";

type DashboardState = {
  currentRole: DashboardRole;
  isSidebarCollapsed: boolean;
  isMobileSidebarOpen: boolean;
  dashboardSearchQuery: string;

  setCurrentRole: (role: DashboardRole) => void;
  setSidebarCollapsed: (value: boolean) => void;
  toggleSidebar: () => void;
  setMobileSidebarOpen: (value: boolean) => void;
  setDashboardSearchQuery: (query: string) => void;
};

export const useDashboardStore = create<DashboardState>((set) => ({
  currentRole: "CUSTOMER",
  isSidebarCollapsed: false,
  isMobileSidebarOpen: false,
  dashboardSearchQuery: "",

  setCurrentRole: (role) => set({ currentRole: role }),

  setSidebarCollapsed: (value) => set({ isSidebarCollapsed: value }),

  toggleSidebar: () =>
    set((state) => ({
      isSidebarCollapsed: !state.isSidebarCollapsed
    })),

  setMobileSidebarOpen: (value) => set({ isMobileSidebarOpen: value }),

  setDashboardSearchQuery: (query) => set({ dashboardSearchQuery: query })
}));