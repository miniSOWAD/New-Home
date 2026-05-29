"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { serviceProviderService } from "@/services/service-provider.service";
import type { ServiceFilters } from "@/types/service.types";
import type {
  CreateServiceSchema,
  UpdateServiceSchema
} from "@/schemas/service.schema";

export function useServices(filters?: ServiceFilters) {
  return useQuery({
    queryKey: ["services", filters],
    queryFn: () => serviceProviderService.getServices(filters)
  });
}

export function useFeaturedServices() {
  return useQuery({
    queryKey: ["services", "featured"],
    queryFn: serviceProviderService.getFeaturedServices
  });
}

export function useService(id?: string) {
  return useQuery({
    queryKey: ["services", id],
    queryFn: () => serviceProviderService.getServiceById(id as string),
    enabled: Boolean(id)
  });
}

export function useMyServices() {
  return useQuery({
    queryKey: ["services", "my"],
    queryFn: serviceProviderService.getMyServices
  });
}

export function useSavedServices() {
  return useQuery({
    queryKey: ["services", "saved"],
    queryFn: serviceProviderService.getSavedServices
  });
}

export function useServiceActions() {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (payload: CreateServiceSchema) =>
      serviceProviderService.createService(payload),

    onSuccess: () => {
      toast.success("Service post created successfully.");
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },

    onError: () => {
      toast.error("Failed to create service post.");
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({
      id,
      payload
    }: {
      id: string;
      payload: UpdateServiceSchema;
    }) => serviceProviderService.updateService(id, payload),

    onSuccess: () => {
      toast.success("Service post updated successfully.");
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },

    onError: () => {
      toast.error("Failed to update service post.");
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => serviceProviderService.deleteService(id),

    onSuccess: () => {
      toast.success("Service post deleted successfully.");
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },

    onError: () => {
      toast.error("Failed to delete service post.");
    }
  });

  const approveMutation = useMutation({
    mutationFn: (id: string) => serviceProviderService.approveService(id),

    onSuccess: () => {
      toast.success("Service post approved.");
      queryClient.invalidateQueries({ queryKey: ["services"] });
      queryClient.invalidateQueries({ queryKey: ["approvals"] });
    },

    onError: () => {
      toast.error("Failed to approve service post.");
    }
  });

  const rejectMutation = useMutation({
    mutationFn: ({ id, reason }: { id: string; reason?: string }) =>
      serviceProviderService.rejectService(id, { reason }),

    onSuccess: () => {
      toast.success("Service post rejected.");
      queryClient.invalidateQueries({ queryKey: ["services"] });
      queryClient.invalidateQueries({ queryKey: ["approvals"] });
    },

    onError: () => {
      toast.error("Failed to reject service post.");
    }
  });

  const saveMutation = useMutation({
    mutationFn: (id: string) => serviceProviderService.saveService(id),

    onSuccess: () => {
      toast.success("Service saved.");
      queryClient.invalidateQueries({ queryKey: ["services"] });
      queryClient.invalidateQueries({ queryKey: ["services", "saved"] });
    },

    onError: () => {
      toast.error("Failed to save service.");
    }
  });

  const unsaveMutation = useMutation({
    mutationFn: (id: string) => serviceProviderService.unsaveService(id),

    onSuccess: () => {
      toast.success("Service removed from saved list.");
      queryClient.invalidateQueries({ queryKey: ["services"] });
      queryClient.invalidateQueries({ queryKey: ["services", "saved"] });
    },

    onError: () => {
      toast.error("Failed to remove saved service.");
    }
  });

  return {
    createService: createMutation.mutate,
    isCreatingService: createMutation.isPending,

    updateService: updateMutation.mutate,
    isUpdatingService: updateMutation.isPending,

    deleteService: deleteMutation.mutate,
    isDeletingService: deleteMutation.isPending,

    approveService: approveMutation.mutate,
    isApprovingService: approveMutation.isPending,

    rejectService: rejectMutation.mutate,
    isRejectingService: rejectMutation.isPending,

    saveService: saveMutation.mutate,
    isSavingService: saveMutation.isPending,

    unsaveService: unsaveMutation.mutate,
    isUnsavingService: unsaveMutation.isPending
  };
}