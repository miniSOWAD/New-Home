export type UserRole = "SUPER_ADMIN" | "ADMIN" | "CUSTOMER" | "PROVIDER";

export type ApprovalStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "SUSPENDED";

export type PermissionAction =
  | "CREATE"
  | "READ"
  | "UPDATE"
  | "DELETE"
  | "APPROVE"
  | "REJECT"
  | "SUSPEND"
  | "MANAGE";

export type PermissionResource =
  | "USER"
  | "ADMIN"
  | "TOLET"
  | "SERVICE"
  | "REQUEST"
  | "REPORT"
  | "REVIEW"
  | "MESSAGE"
  | "SETTING"
  | "AUDIT_LOG";