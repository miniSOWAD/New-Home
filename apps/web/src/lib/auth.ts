import {
  ACCESS_TOKEN_COOKIE,
  APPROVAL_STATUS_COOKIE,
  REFRESH_TOKEN_COOKIE,
  USER_ROLE_COOKIE
} from "@/lib/constants";
import { removeCookie, setCookie } from "@/lib/cookies";
import type { AuthResponse } from "@/types/auth.types";

export function persistAuth(auth: AuthResponse) {
  setCookie(ACCESS_TOKEN_COOKIE, auth.accessToken);
  setCookie(REFRESH_TOKEN_COOKIE, auth.refreshToken);
  setCookie(USER_ROLE_COOKIE, auth.user.role);
  setCookie(APPROVAL_STATUS_COOKIE, auth.user.approvalStatus);
}

export function clearAuth() {
  removeCookie(ACCESS_TOKEN_COOKIE);
  removeCookie(REFRESH_TOKEN_COOKIE);
  removeCookie(USER_ROLE_COOKIE);
  removeCookie(APPROVAL_STATUS_COOKIE);
}

export function isApproved(status?: string | null) {
  return status === "APPROVED";
}

export function isPending(status?: string | null) {
  return status === "PENDING";
}