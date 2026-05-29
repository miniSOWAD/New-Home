"use client";

import { create } from "zustand";

import type { ApprovalStatus, UserRole } from "@/types/role.types";
import type { UserSummary } from "@/types/user.types";

type UserState = {
  selectedUser: UserSummary | null;
  searchQuery: string;
  roleFilter: UserRole | "ALL";
  approvalFilter: ApprovalStatus | "ALL";

  setSelectedUser: (user: UserSummary | null) => void;
  setSearchQuery: (query: string) => void;
  setRoleFilter: (role: UserRole | "ALL") => void;
  setApprovalFilter: (status: ApprovalStatus | "ALL") => void;
  resetFilters: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  selectedUser: null,
  searchQuery: "",
  roleFilter: "ALL",
  approvalFilter: "ALL",

  setSelectedUser: (user) => set({ selectedUser: user }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  setRoleFilter: (role) => set({ roleFilter: role }),

  setApprovalFilter: (status) => set({ approvalFilter: status }),

  resetFilters: () =>
    set({
      searchQuery: "",
      roleFilter: "ALL",
      approvalFilter: "ALL"
    })
}));