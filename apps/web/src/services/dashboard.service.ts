import { apiGet } from "@/lib/api";
import type {
  ApprovalTableItem
} from "@/components/dashboard/ApprovalTable";
import type {
  ManagedUserItem
} from "@/components/dashboard/UserManagementTable";
import type {
  ManagedListingItem
} from "@/components/dashboard/ListingManagementTable";
import type {
  ManagedReportItem
} from "@/components/dashboard/ReportManagementTable";
import type {
  RecentActivityItem
} from "@/components/dashboard/RecentActivity";

export type DashboardAnalyticsApiItem = {
  label: string;
  value: number;
  type: "USERS" | "TOLETS" | "SERVICES" | "REQUESTS" | "REPORTS";
};

export const dashboardService = {
  async getApprovals(params?: { role?: "SUPER_ADMIN" | "ADMIN" }) {
    return apiGet<ApprovalTableItem[]>("/dashboard/approvals", params);
  },

  async getUsers(params?: { role?: string; status?: string }) {
    return apiGet<ManagedUserItem[]>("/dashboard/users", params);
  },

  async getListings(params?: { type?: "TOLET" | "SERVICE" }) {
    return apiGet<ManagedListingItem[]>("/dashboard/listings", params);
  },

  async getReports(params?: { status?: string }) {
    return apiGet<ManagedReportItem[]>("/dashboard/reports", params);
  },

  async getAnalytics() {
    return apiGet<DashboardAnalyticsApiItem[]>("/dashboard/analytics");
  },

  async getRecentActivities(params?: { role?: string }) {
    return apiGet<RecentActivityItem[]>("/dashboard/recent-activities", params);
  }
};