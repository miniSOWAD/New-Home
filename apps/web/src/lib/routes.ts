export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  toLet: "/to-let",
  services: "/services",

  auth: {
    login: "/auth/login",
    register: "/auth/register",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
    waitingApproval: "/auth/waiting-approval"
  },

  dashboard: {
    superAdmin: "/dashboard/super-admin",
    admin: "/dashboard/admin",
    customer: "/dashboard/customer",
    provider: "/dashboard/provider"
  }
};

export function getDashboardRouteByRole(role: string) {
  switch (role) {
    case "SUPER_ADMIN":
      return routes.dashboard.superAdmin;
    case "ADMIN":
      return routes.dashboard.admin;
    case "PROVIDER":
      return routes.dashboard.provider;
    case "CUSTOMER":
    default:
      return routes.dashboard.customer;
  }
}