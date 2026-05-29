"use client";

import { create } from "zustand";

import type { ApprovalStatus, UserRole } from "@/types/role.types";
import type { User } from "@/types/user.types";

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  role: UserRole | null;
  approvalStatus: ApprovalStatus | null;

  setAuth: (payload: {
    user: User;
    accessToken: string;
    refreshToken: string;
  }) => void;

  setUser: (user: User | null) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  role: null,
  approvalStatus: null,

  setAuth: ({ user, accessToken, refreshToken }) =>
    set({
      user,
      accessToken,
      refreshToken,
      isAuthenticated: true,
      role: user.role,
      approvalStatus: user.approvalStatus
    }),

  setUser: (user) =>
    set({
      user,
      isAuthenticated: Boolean(user),
      role: user?.role ?? null,
      approvalStatus: user?.approvalStatus ?? null
    }),

  clearAuth: () =>
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      role: null,
      approvalStatus: null
    })
}));