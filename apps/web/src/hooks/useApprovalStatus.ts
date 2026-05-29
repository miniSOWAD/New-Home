"use client";

import { useQuery } from "@tanstack/react-query";

import { authService } from "@/services/auth.service";
import type { ApprovalStatus } from "@/types/role.types";

export function useApprovalStatus() {
  const query = useQuery({
    queryKey: ["auth", "approval-status"],
    queryFn: authService.getMe,
    retry: false
  });

  const status = query.data?.data?.approvalStatus as ApprovalStatus | undefined;

  return {
    status,
    isApproved: status === "APPROVED",
    isPending: status === "PENDING",
    isRejected: status === "REJECTED",
    isSuspended: status === "SUSPENDED",
    isLoading: query.isLoading,
    user: query.data?.data
  };
}