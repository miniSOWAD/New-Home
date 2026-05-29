import type { UserSummary } from "@/types/user.types";

export type Review = {
  id: string;
  rating: number;
  comment?: string;
  reviewerId: string;
  reviewer?: UserSummary;
  targetUserId: string;
  targetUser?: UserSummary;
  toletPostId?: string;
  servicePostId?: string;
  createdAt: string;
};