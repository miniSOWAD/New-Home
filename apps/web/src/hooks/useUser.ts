"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { userService, type UserQueryParams } from "@/services/user.service";
import type { ApprovalStatus } from "@/types/role.types";

export function useUsers(params?: UserQueryParams) {
  return useQuery({
    queryKey: ["users", params],
    queryFn: () => userService.getUsers(params)
  });
}

export function useUser(id?: string) {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => userService.getUserById(id as string),
    enabled: Boolean(id)
  });
}

export function useUserActions() {
  const queryClient = useQueryClient();

  const approveUserMutation = useMutation({
    mutationFn: (id: string) => userService.approveUser(id),

    onSuccess: () => {
      toast.success("User approved successfully.");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["approvals"] });
    },

    onError: () => {
      toast.error("Failed to approve user.");
    }
  });

  const rejectUserMutation = useMutation({
    mutationFn: ({ id, reason }: { id: string; reason?: string }) =>
      userService.rejectUser(id, { reason }),

    onSuccess: () => {
      toast.success("User rejected successfully.");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["approvals"] });
    },

    onError: () => {
      toast.error("Failed to reject user.");
    }
  });

  const suspendUserMutation = useMutation({
    mutationFn: ({ id, reason }: { id: string; reason?: string }) =>
      userService.suspendUser(id, { reason }),

    onSuccess: () => {
      toast.success("User suspended successfully.");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: () => {
      toast.error("Failed to suspend user.");
    }
  });

  const updateUserStatusMutation = useMutation({
    mutationFn: ({
      id,
      approvalStatus,
      note
    }: {
      id: string;
      approvalStatus: ApprovalStatus;
      note?: string;
    }) => userService.updateUserStatus(id, { approvalStatus, note }),

    onSuccess: () => {
      toast.success("User status updated successfully.");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: () => {
      toast.error("Failed to update user status.");
    }
  });

  const deleteUserMutation = useMutation({
    mutationFn: (id: string) => userService.deleteUser(id),

    onSuccess: () => {
      toast.success("User deleted successfully.");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: () => {
      toast.error("Failed to delete user.");
    }
  });

  return {
    approveUser: approveUserMutation.mutate,
    isApprovingUser: approveUserMutation.isPending,

    rejectUser: rejectUserMutation.mutate,
    isRejectingUser: rejectUserMutation.isPending,

    suspendUser: suspendUserMutation.mutate,
    isSuspendingUser: suspendUserMutation.isPending,

    updateUserStatus: updateUserStatusMutation.mutate,
    isUpdatingUserStatus: updateUserStatusMutation.isPending,

    deleteUser: deleteUserMutation.mutate,
    isDeletingUser: deleteUserMutation.isPending
  };
}