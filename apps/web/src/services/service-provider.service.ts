import {
  apiDelete,
  apiGet,
  apiPaginatedGet,
  apiPatch,
  apiPost
} from "@/lib/api";
import type { ServiceFilters, ServicePost } from "@/types/service.types";
import type {
  CreateServiceSchema,
  UpdateServiceSchema
} from "@/schemas/service.schema";

export const serviceProviderService = {
  async getServices(params?: ServiceFilters) {
    return apiPaginatedGet<ServicePost>("/services", params);
  },

  async getFeaturedServices() {
    return apiGet<ServicePost[]>("/services/featured");
  },

  async getServiceById(id: string) {
    return apiGet<ServicePost>(`/services/${id}`);
  },

  async createService(payload: CreateServiceSchema) {
    return apiPost<ServicePost, CreateServiceSchema>(
      "/services/create",
      payload
    );
  },

  async updateService(id: string, payload: UpdateServiceSchema) {
    return apiPatch<ServicePost, UpdateServiceSchema>(
      `/services/${id}/update`,
      payload
    );
  },

  async deleteService(id: string) {
    return apiDelete<null>(`/services/${id}/delete`);
  },

  async approveService(id: string) {
    return apiPost<ServicePost>(`/services/${id}/approve`);
  },

  async rejectService(id: string, payload?: { reason?: string }) {
    return apiPost<ServicePost, { reason?: string }>(
      `/services/${id}/reject`,
      payload
    );
  },

  async saveService(id: string) {
    return apiPost<null>(`/services/${id}/save`);
  },

  async unsaveService(id: string) {
    return apiDelete<null>(`/services/${id}/save`);
  },

  async getMyServices() {
    return apiGet<ServicePost[]>("/services/my");
  },

  async getSavedServices() {
    return apiGet<ServicePost[]>("/services/saved");
  }
};