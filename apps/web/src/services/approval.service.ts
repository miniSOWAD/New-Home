import { apiGet, apiPost } from "@/lib/api";
import type { ApprovalStatus, UserRole } from "@/types/role.types";
import type { ServicePost } from "@/types/service.types";
import type { ToletPost } from "@/types/tolet.types";
import type { UserSummary } from "@/types/user.types";

export type ApprovalItemType = "USER" | "TOLET" | "SERVICE";

export type ApprovalItem = {
  id: string;
  type: ApprovalItemType;
  title: string;
  description?: string;
  status: ApprovalStatus;
  requestedBy?: UserSummary;
  role?: UserRole;
  createdAt: string;
};

export const approvalService = {
  async getPendingApprovals() {
    return apiGet<ApprovalItem[]>("/approvals/pending");
  },

  async getApprovedApprovals() {
    return apiGet<ApprovalItem[]>("/approvals/approved");
  },

  async getRejectedApprovals() {
    return apiGet<ApprovalItem[]>("/approvals/rejected");
  },

  async approveUser(id: string) {
    return apiPost<UserSummary>(`/users/${id}/approve`);
  },

  async rejectUser(id: string, payload?: { reason?: string }) {
    return apiPost<UserSummary, { reason?: string }>(
      `/users/${id}/reject`,
      payload
    );
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

  async approveService(id: string) {
    return apiPost<ServicePost>(`/services/${id}/approve`);
  },

  async rejectService(id: string, payload?: { reason?: string }) {
    return apiPost<ServicePost, { reason?: string }>(
      `/services/${id}/reject`,
      payload
    );
  }
};