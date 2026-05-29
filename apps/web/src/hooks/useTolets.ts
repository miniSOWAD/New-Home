"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { toletService } from "@/services/tolet.service";
import type { ToletFilters } from "@/types/tolet.types";
import type {
  CreateToletSchema,
  UpdateToletSchema
} from "@/schemas/tolet.schema";

export function useTolets(filters?: ToletFilters) {
  return useQuery({
    queryKey: ["tolets", filters],
    queryFn: () => toletService.getTolets(filters)
  });
}

export function useFeaturedTolets() {
  return useQuery({
    queryKey: ["tolets", "featured"],
    queryFn: toletService.getFeaturedTolets
  });
}

export function useTolet(id?: string) {
  return useQuery({
    queryKey: ["tolets", id],
    queryFn: () => toletService.getToletById(id as string),
    enabled: Boolean(id)
  });
}

export function useMyTolets() {
  return useQuery({
    queryKey: ["tolets", "my"],
    queryFn: toletService.getMyTolets
  });
}

export function useSavedTolets() {
  return useQuery({
    queryKey: ["tolets", "saved"],
    queryFn: toletService.getSavedTolets
  });
}

export function useToletActions() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (payload: CreateToletSchema) => toletService.createTolet(payload),

    onSuccess: () => {
      toast.success("To-let post created successfully.");
      queryClient.invalidateQueries({ queryKey: ["tolets"] });
    },

    onError: () => {
      toast.error("Failed to create to-let post.");
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({
      id,
      payload
    }: {
      id: string;
      payload: UpdateToletSchema;
    }) => toletService.updateTolet(id, payload),

    onSuccess: () => {
      toast.success("To-let post updated successfully.");
      queryClient.invalidateQueries({ queryKey: ["tolets"] });
    },

    onError: () => {
      toast.error("Failed to update to-let post.");
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => toletService.deleteTolet(id),

    onSuccess: () => {
      toast.success("To-let post deleted successfully.");
      queryClient.invalidateQueries({ queryKey: ["tolets"] });
    },

    onError: () => {
      toast.error("Failed to delete to-let post.");
    }
  });

  const approveMutation = useMutation({
    mutationFn: (id: string) => toletService.approveTolet(id),

    onSuccess: () => {
      toast.success("To-let post approved.");
      queryClient.invalidateQueries({ queryKey: ["tolets"] });
      queryClient.invalidateQueries({ queryKey: ["approvals"] });
    },

    onError: () => {
      toast.error("Failed to approve to-let post.");
    }
  });

  const rejectMutation = useMutation({
    mutationFn: ({ id, reason }: { id: string; reason?: string }) =>
      toletService.rejectTolet(id, { reason }),

    onSuccess: () => {
      toast.success("To-let post rejected.");
      queryClient.invalidateQueries({ queryKey: ["tolets"] });
      queryClient.invalidateQueries({ queryKey: ["approvals"] });
    },

    onError: () => {
      toast.error("Failed to reject to-let post.");
    }
  });

  const saveMutation = useMutation({
    mutationFn: (id: string) => toletService.saveTolet(id),

    onSuccess: () => {
      toast.success("To-let saved.");
      queryClient.invalidateQueries({ queryKey: ["tolets"] });
      queryClient.invalidateQueries({ queryKey: ["tolets", "saved"] });
    },

    onError: () => {
      toast.error("Failed to save to-let.");
    }
  });

  const unsaveMutation = useMutation({
    mutationFn: (id: string) => toletService.unsaveTolet(id),

    onSuccess: () => {
      toast.success("To-let removed from saved list.");
      queryClient.invalidateQueries({ queryKey: ["tolets"] });
      queryClient.invalidateQueries({ queryKey: ["tolets", "saved"] });
    },

    onError: () => {
      toast.error("Failed to remove saved to-let.");
    }
  });

  return {
    createTolet: createMutation.mutate,
    isCreatingTolet: createMutation.isPending,

    updateTolet: updateMutation.mutate,
    isUpdatingTolet: updateMutation.isPending,

    deleteTolet: deleteMutation.mutate,
    isDeletingTolet: deleteMutation.isPending,

    approveTolet: approveMutation.mutate,
    isApprovingTolet: approveMutation.isPending,

    rejectTolet: rejectMutation.mutate,
    isRejectingTolet: rejectMutation.isPending,

    saveTolet: saveMutation.mutate,
    isSavingTolet: saveMutation.isPending,

    unsaveTolet: unsaveMutation.mutate,
    isUnsavingTolet: unsaveMutation.isPending
  };
}