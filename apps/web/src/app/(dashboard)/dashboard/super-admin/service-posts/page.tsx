"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { ListingManagementTable } from "@/components/dashboard/ListingManagementTable";
import { dashboardService } from "@/services/dashboard.service";

export default function SuperAdminServicePostsPage() {
  const router = useRouter();

  const listingsQuery = useQuery({
    queryKey: ["dashboard", "super-admin", "service-posts"],
    queryFn: () => dashboardService.getListings({ type: "SERVICE" })
  });

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Super Admin / Service Posts
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">
          Service Post Management
        </h1>

        <p className="mt-3 max-w-2xl text-white/85">
          Manage all provider service posts fetched from the database.
        </p>
      </div>

      <ListingManagementTable
        title="Service Post Management"
        listings={listingsQuery.data?.data ?? []}
        isLoading={listingsQuery.isLoading}
        onView={(item) => router.push(`/services/${item.id}`)}
        onEdit={(item) => toast.info(`Edit service API pending: ${item.id}`)}
        onApprove={(id) => toast.success(`Approve service API pending: ${id}`)}
        onReject={(id) => toast.error(`Reject service API pending: ${id}`)}
        onDelete={(id) => toast.error(`Delete service API pending: ${id}`)}
      />
    </div>
  );
}