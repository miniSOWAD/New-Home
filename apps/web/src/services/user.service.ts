import { apiDelete, apiGet, apiPatch, apiPost } from "@/lib/api";
import type { ApprovalStatus, UserRole } from "@/types/role.types";
import type { User, UserSummary } from "@/types/user.types";

export type UserQueryParams = {
  page?: number;
  limit?: number;
  search?: string;
  role?: UserRole;
  approvalStatus?: ApprovalStatus;
};

export const userService = {
  async getUsers(params?: UserQueryParams) {
    return apiGet<UserSummary[]>("/users", params);
  },

  async getUserById(id: string) {
    return apiGet<User>(`/users/${id}`);
  },

  async updateUserProfile(
    id: string,
    payload: {
      name?: string;
      phone?: string;
      address?: string;
      avatarUrl?: string;
    }
  ) {
    return apiPatch<User, typeof payload>(`/users/${id}`, payload);
  },

  async updateUserStatus(
    id: string,
    payload: {
      approvalStatus: ApprovalStatus;
      note?: string;
    }
  ) {
    return apiPatch<User, typeof payload>(`/users/${id}/status`, payload);
  },

  async approveUser(id: string) {
    return apiPost<User>(`/users/${id}/approve`);
  },

  async rejectUser(id: string, payload?: { reason?: string }) {
    return apiPost<User, { reason?: string }>(`/users/${id}/reject`, payload);
  },

  async suspendUser(id: string, payload?: { reason?: string }) {
    return apiPost<User, { reason?: string }>(`/users/${id}/suspend`, payload);
  },

  async deleteUser(id: string) {
    return apiDelete<null>(`/users/${id}`);
  },

  async createAdmin(payload: {
    name: string;
    email: string;
    phone?: string;
    password: string;
  }) {
    return apiPost<User, typeof payload>("/users/admins", payload);
  }
};