import type { ApprovalStatus, UserRole } from "@/types/role.types";

export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  avatarUrl?: string;
  role: UserRole;
  approvalStatus: ApprovalStatus;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CustomerProfile = {
  id: string;
  userId: string;
  preferredLocation?: string;
  budgetMin?: number;
  budgetMax?: number;
};

export type ProviderProfile = {
  id: string;
  userId: string;
  providerType: "TOLET_PROVIDER" | "SERVICE_PROVIDER" | "BOTH";
  serviceArea?: string;
  experience?: string;
  verificationNote?: string;
};

export type UserSummary = Pick<
  User,
  "id" | "name" | "email" | "phone" | "role" | "approvalStatus" | "createdAt"
>;