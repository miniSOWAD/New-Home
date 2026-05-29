import {
  BarChart3,
  Bell,
  Building2,
  ClipboardCheck,
  FileWarning,
  Heart,
  Home,
  HousePlus,
  LayoutDashboard,
  MessageSquare,
  PlusCircle,
  Settings,
  ShieldCheck,
  Star,
  Users,
  Wallet,
  Wrench
} from "lucide-react";

export type DashboardRole = "SUPER_ADMIN" | "ADMIN" | "CUSTOMER" | "PROVIDER";

export type DashboardNavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

export const dashboardNavItems: Record<DashboardRole, DashboardNavItem[]> = {
  SUPER_ADMIN: [
    {
      title: "Overview",
      href: "/dashboard/super-admin",
      icon: LayoutDashboard
    },
    {
      title: "Users",
      href: "/dashboard/super-admin/users",
      icon: Users
    },
    {
      title: "Admins",
      href: "/dashboard/super-admin/admins",
      icon: ShieldCheck
    },
    {
      title: "Approvals",
      href: "/dashboard/super-admin/approvals",
      icon: ClipboardCheck
    },
    {
      title: "To-let Posts",
      href: "/dashboard/super-admin/tolet-posts",
      icon: Building2
    },
    {
      title: "Service Posts",
      href: "/dashboard/super-admin/service-posts",
      icon: Wrench
    },
    {
      title: "Reports",
      href: "/dashboard/super-admin/reports",
      icon: FileWarning
    },
    {
      title: "Analytics",
      href: "/dashboard/super-admin/analytics",
      icon: BarChart3
    },
    {
      title: "Settings",
      href: "/dashboard/super-admin/settings",
      icon: Settings
    }
  ],

  ADMIN: [
    {
      title: "Overview",
      href: "/dashboard/admin",
      icon: LayoutDashboard
    },
    {
      title: "Approvals",
      href: "/dashboard/admin/approvals",
      icon: ClipboardCheck
    },
    {
      title: "Users",
      href: "/dashboard/admin/users",
      icon: Users
    },
    {
      title: "To-let Posts",
      href: "/dashboard/admin/tolet-posts",
      icon: Building2
    },
    {
      title: "Service Posts",
      href: "/dashboard/admin/service-posts",
      icon: Wrench
    },
    {
      title: "Reports",
      href: "/dashboard/admin/reports",
      icon: FileWarning
    },
    {
      title: "Profile",
      href: "/dashboard/admin/profile",
      icon: Settings
    }
  ],

  CUSTOMER: [
    {
      title: "Overview",
      href: "/dashboard/customer",
      icon: LayoutDashboard
    },
    {
      title: "Saved To-lets",
      href: "/dashboard/customer/saved-tolets",
      icon: Heart
    },
    {
      title: "Saved Services",
      href: "/dashboard/customer/saved-services",
      icon: Star
    },
    {
      title: "Requests",
      href: "/dashboard/customer/requests",
      icon: ClipboardCheck
    },
    {
      title: "Messages",
      href: "/dashboard/customer/messages",
      icon: MessageSquare
    },
    {
      title: "Reviews",
      href: "/dashboard/customer/reviews",
      icon: Star
    },
    {
      title: "Profile",
      href: "/dashboard/customer/profile",
      icon: Settings
    }
  ],

  PROVIDER: [
    {
      title: "Overview",
      href: "/dashboard/provider",
      icon: LayoutDashboard
    },
    {
      title: "My To-lets",
      href: "/dashboard/provider/my-tolets",
      icon: Home
    },
    {
      title: "Add To-let",
      href: "/dashboard/provider/my-tolets/create",
      icon: HousePlus
    },
    {
      title: "My Services",
      href: "/dashboard/provider/my-services",
      icon: Wrench
    },
    {
      title: "Add Service",
      href: "/dashboard/provider/my-services/create",
      icon: PlusCircle
    },
    {
      title: "Requests",
      href: "/dashboard/provider/requests",
      icon: ClipboardCheck
    },
    {
      title: "Messages",
      href: "/dashboard/provider/messages",
      icon: MessageSquare
    },
    {
      title: "Earnings",
      href: "/dashboard/provider/earnings",
      icon: Wallet
    },
    {
      title: "Profile",
      href: "/dashboard/provider/profile",
      icon: Settings
    }
  ]
};

export const roleLabels: Record<DashboardRole, string> = {
  SUPER_ADMIN: "Super Admin",
  ADMIN: "Admin",
  CUSTOMER: "Customer",
  PROVIDER: "Provider"
};

export const dashboardQuickActions: Record<DashboardRole, string> = {
  SUPER_ADMIN: "Manage Platform",
  ADMIN: "Review Approvals",
  CUSTOMER: "Find New Home",
  PROVIDER: "Create Listing"
};

export const dashboardNotificationIcon = Bell;