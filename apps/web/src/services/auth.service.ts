import { apiGet, apiPost } from "@/lib/api";
import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload
} from "@/types/auth.types";
import type { User } from "@/types/user.types";

export const authService = {
  async register(payload: RegisterPayload) {
    return apiPost<AuthResponse, RegisterPayload>("/auth/register", payload);
  },

  async login(payload: LoginPayload) {
    return apiPost<AuthResponse, LoginPayload>("/auth/login", payload);
  },

  async logout() {
    return apiPost<null>("/auth/logout");
  },

  async refreshToken() {
    return apiPost<AuthResponse>("/auth/refresh-token");
  },

  async getMe() {
    return apiGet<User>("/auth/me");
  },

  async forgotPassword(payload: { email: string }) {
    return apiPost<null, { email: string }>("/auth/forgot-password", payload);
  },

  async resetPassword(payload: {
    token: string;
    password: string;
    confirmPassword: string;
  }) {
    return apiPost<
      null,
      {
        token: string;
        password: string;
        confirmPassword: string;
      }
    >("/auth/reset-password", payload);
  },

  async changePassword(payload: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }) {
    return apiPost<
      null,
      {
        currentPassword: string;
        newPassword: string;
        confirmNewPassword: string;
      }
    >("/auth/change-password", payload);
  }
};