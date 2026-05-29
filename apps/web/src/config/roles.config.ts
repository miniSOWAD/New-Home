import type { UserRole, ApprovalStatus } from "@/types/role.types";

export const userRoles: Record<UserRole, string> = {
  SUPER_ADMIN: "Super Admin",
  ADMIN: "Admin",
  CUSTOMER: "Customer",
  PROVIDER: "Provider"
};

export const approvalStatuses: Record<ApprovalStatus, string> = {
  PENDING: "Pending",
  APPROVED: "Approved",
  REJECTED: "Rejected",
  SUSPENDED: "Suspended"
};

export const publicRegisterRoles = [
  {
    label: "Customer",
    value: "CUSTOMER",
    description: "Search houses and service providers."
  },
  {
    label: "Provider",
    value: "PROVIDER",
    description: "Post houses for rent or provide services."
  }
] as const;