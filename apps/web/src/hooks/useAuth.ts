"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authService } from "@/services/auth.service";
import { clearAuth, persistAuth } from "@/lib/auth";
import { getDashboardRouteByRole, routes } from "@/lib/routes";
import type { LoginPayload, RegisterPayload } from "@/types/auth.types";

export function useAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const meQuery = useQuery({
    queryKey: ["auth", "me"],
    queryFn: authService.getMe,
    retry: false,
    enabled: false
  });

  const loginMutation = useMutation({
    mutationFn: (payload: LoginPayload) => authService.login(payload),

    onSuccess: (response) => {
      if (!response.data) {
        toast.error(response.message || "Login failed.");
        return;
      }

      const { user } = response.data;

      if (user.approvalStatus === "PENDING") {
        toast.warning("Your account is waiting for approval.");
        router.push("/?status=waiting-approval");
        return;
      }

      if (user.approvalStatus === "REJECTED") {
        toast.error("Your account request was rejected.");
        router.push("/?status=rejected");
        return;
      }

      if (user.approvalStatus === "SUSPENDED") {
        toast.error("Your account has been suspended.");
        router.push("/?status=suspended");
        return;
      }

      persistAuth(response.data);
      queryClient.setQueryData(["auth", "me"], {
        success: true,
        message: "Authenticated user loaded.",
        data: user
      });

      toast.success("Login successful.");
      router.push(getDashboardRouteByRole(user.role));
    },

    onError: () => {
      toast.error("Invalid email or password.");
    }
  });

  const registerMutation = useMutation({
    mutationFn: (payload: RegisterPayload) => authService.register(payload),

    onSuccess: () => {
      toast.success("Registration successful. Please wait for approval.");
      router.push(routes.auth.waitingApproval);
    },

    onError: () => {
      toast.error("Registration failed. Please try again.");
    }
  });

  const logoutMutation = useMutation({
    mutationFn: authService.logout,

    onSettled: () => {
      clearAuth();
      queryClient.clear();
      toast.success("Logged out successfully.");
      router.push(routes.auth.login);
    }
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: (payload: { email: string }) =>
      authService.forgotPassword(payload),

    onSuccess: () => {
      toast.success("Password reset instructions sent.");
    },

    onError: () => {
      toast.error("Could not send reset instructions.");
    }
  });

  const resetPasswordMutation = useMutation({
    mutationFn: (payload: {
      token: string;
      password: string;
      confirmPassword: string;
    }) => authService.resetPassword(payload),

    onSuccess: () => {
      toast.success("Password reset successful.");
      router.push(routes.auth.login);
    },

    onError: () => {
      toast.error("Password reset failed.");
    }
  });

  return {
    user: meQuery.data?.data,
    isLoadingUser: meQuery.isLoading,
    refetchUser: meQuery.refetch,

    login: loginMutation.mutate,
    loginAsync: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,

    register: registerMutation.mutate,
    registerAsync: registerMutation.mutateAsync,
    isRegistering: registerMutation.isPending,

    logout: logoutMutation.mutate,
    isLoggingOut: logoutMutation.isPending,

    forgotPassword: forgotPasswordMutation.mutate,
    isSendingResetLink: forgotPasswordMutation.isPending,

    resetPassword: resetPasswordMutation.mutate,
    isResettingPassword: resetPasswordMutation.isPending
  };
}