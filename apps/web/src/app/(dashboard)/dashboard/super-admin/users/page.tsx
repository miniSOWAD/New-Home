"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { UserManagementTable } from "@/components/dashboard/UserManagementTable";
import { dashboardService } from "@/services/dashboard.service";

export default function SuperAdminUsersPage() {
  const router = useRouter();

  const usersQuery = useQuery({
    queryKey: ["dashboard", "super-admin", "users"],
    queryFn: () => dashboardService.getUsers()
  });

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Super Admin / Users
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">
          User Management
        </h1>

        <p className="mt-3 max-w-2xl text-white/85">
          View, approve, suspend, delete, and manage all platform users from the
          database.
        </p>
      </div>

      <UserManagementTable
        users={usersQuery.data?.data ?? []}
        isLoading={usersQuery.isLoading}
        onView={(id) => router.push(`/dashboard/super-admin/users/${id}`)}
        onApprove={(id) => toast.success(`Approve user API pending: ${id}`)}
        onSuspend={(id) => toast.warning(`Suspend user API pending: ${id}`)}
        onDelete={(id) => toast.error(`Delete user API pending: ${id}`)}
      />
    </div>
  );
}