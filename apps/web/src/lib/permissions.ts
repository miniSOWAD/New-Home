import type { UserRole } from "@/types/role.types";

export function canManageUsers(role?: UserRole | null) {
  return role === "SUPER_ADMIN" || role === "ADMIN";
}

export function canManageAdmins(role?: UserRole | null) {
  return role === "SUPER_ADMIN";
}

export function canApprove(role?: UserRole | null) {
  return role === "SUPER_ADMIN" || role === "ADMIN";
}

export function canCreateTolet(role?: UserRole | null) {
  return role === "PROVIDER";
}

export function canCreateService(role?: UserRole | null) {
  return role === "PROVIDER";
}

export function canSendRequest(role?: UserRole | null) {
  return role === "CUSTOMER";
}