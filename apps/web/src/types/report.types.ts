import type { UserSummary } from "@/types/user.types";

export type ReportStatus = "PENDING" | "REVIEWED" | "RESOLVED" | "REJECTED";

export type Report = {
  id: string;
  reason: string;
  description?: string;
  status: ReportStatus;
  reporterId: string;
  reporter?: UserSummary;
  reportedUserId?: string;
  toletPostId?: string;
  servicePostId?: string;
  createdAt: string;
  updatedAt: string;
};