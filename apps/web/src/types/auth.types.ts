import type { ApprovalStatus, UserRole } from "@/types/role.types";
import type { User } from "@/types/user.types";

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  phone: string;
  password: string;
  address?: string;
  role: Extract<UserRole, "CUSTOMER" | "PROVIDER">;
};

export type AuthResponse = {
  user: User;
  accessToken: string;
  refreshToken: string;
};

export type AuthUserCookieData = {
  id: string;
  role: UserRole;
  approvalStatus: ApprovalStatus;
};