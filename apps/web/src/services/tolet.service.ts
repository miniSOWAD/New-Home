import {
  apiDelete,
  apiGet,
  apiPaginatedGet,
  apiPatch,
  apiPost
} from "@/lib/api";
import type { ToletFilters, ToletPost } from "@/types/tolet.types";
import type {
  CreateToletSchema,
  UpdateToletSchema
} from "@/schemas/tolet.schema";

export const toletService = {
  async getTolets(params?: ToletFilters) {
    return apiPaginatedGet<ToletPost>("/tolets", params);
  },

  async getFeaturedTolets() {
    return apiGet<ToletPost[]>("/tolets/featured");
  },

  async getToletById(id: string) {
    return apiGet<ToletPost>(`/tolets/${id}`);
  },

  async createTolet(payload: CreateToletSchema) {
    return apiPost<ToletPost, CreateToletSchema>("/tolets/create", payload);
  },

  async updateTolet(id: string, payload: UpdateToletSchema) {
    return apiPatch<ToletPost, UpdateToletSchema>(
      `/tolets/${id}/update`,
      payload
    );
  },

  async deleteTolet(id: string) {
    return apiDelete<null>(`/tolets/${id}/delete`);
  },

  async approveTolet(id: string) {
    return apiPost<ToletPost>(`/tolets/${id}/approve`);
  },

  async rejectTolet(id: string, payload?: { reason?: string }) {
    return apiPost<ToletPost, { reason?: string }>(
      `/tolets/${id}/reject`,
      payload
    );
  },

  async saveTolet(id: string) {
    return apiPost<null>(`/tolets/${id}/save`);
  },

  async unsaveTolet(id: string) {
    return apiDelete<null>(`/tolets/${id}/save`);
  },

  async getMyTolets() {
    return apiGet<ToletPost[]>("/tolets/my");
  },

  async getSavedTolets() {
    return apiGet<ToletPost[]>("/tolets/saved");
  }
};