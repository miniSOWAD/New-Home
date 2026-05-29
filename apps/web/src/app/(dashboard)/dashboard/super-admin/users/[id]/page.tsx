import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Ban,
  ClipboardCheck,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Trash2,
  User,
  UserCheck
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

type SuperAdminUserDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const userDetails = {
  name: "Demo User",
  email: "demo.user@newhome.com",
  phone: "+880 1000-000000",
  role: "PROVIDER",
  approvalStatus: "PENDING",
  location: "Mirzapur, Tangail",
  joinedAt: "May 2026",
  totalTolets: 3,
  totalServices: 2,
  totalRequests: 8
};

export default async function SuperAdminUserDetailsPage({
  params
}: SuperAdminUserDetailsPageProps) {
  const { id } = await params;

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <Button
          asChild
          variant="outline"
          className="mb-6 border-white/40 bg-white/15 text-white hover:bg-white hover:text-orange-600"
        >
          <Link href="/dashboard/super-admin/users">
            <ArrowLeft className="mr-2 size-4" />
            Back to Users
          </Link>
        </Button>

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Super Admin / User Details
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">
          {userDetails.name}
        </h1>

        <p className="mt-3 max-w-2xl text-white/85">
          View complete user profile, approval status, role, activity summary,
          and account control actions. User ID: {id}
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <Card className="border-orange-100 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="flex size-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-lg shadow-orange-500/20">
                <User className="size-12" />
              </div>

              <h2 className="mt-5 text-2xl font-black text-slate-950">
                {userDetails.name}
              </h2>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <Badge className="bg-orange-500 text-white hover:bg-orange-500">
                  {userDetails.role}
                </Badge>

                <Badge className="bg-yellow-400 text-slate-950 hover:bg-yellow-400">
                  {userDetails.approvalStatus}
                </Badge>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Joined: {userDetails.joinedAt}
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
                <Mail className="size-5 text-orange-500" />
                <span className="text-sm font-semibold text-slate-700">
                  {userDetails.email}
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
                <Phone className="size-5 text-orange-500" />
                <span className="text-sm font-semibold text-slate-700">
                  {userDetails.phone}
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
                <MapPin className="size-5 text-orange-500" />
                <span className="text-sm font-semibold text-slate-700">
                  {userDetails.location}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-orange-100 bg-white shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-bold text-slate-500">
                  To-let Posts
                </p>
                <p className="mt-3 text-3xl font-black text-slate-950">
                  {userDetails.totalTolets}
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 bg-white shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-bold text-slate-500">
                  Service Posts
                </p>
                <p className="mt-3 text-3xl font-black text-slate-950">
                  {userDetails.totalServices}
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 bg-white shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm font-bold text-slate-500">Requests</p>
                <p className="mt-3 text-3xl font-black text-slate-950">
                  {userDetails.totalRequests}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-orange-100 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-950">Account Actions</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-4 md:grid-cols-2">
              <Button className="justify-start rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300">
                <UserCheck className="mr-2 size-5" />
                Approve User
              </Button>

              <Button
                variant="outline"
                className="justify-start rounded-2xl border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                <ClipboardCheck className="mr-2 size-5" />
                Mark as Reviewed
              </Button>

              <Button
                variant="outline"
                className="justify-start rounded-2xl border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                <ShieldCheck className="mr-2 size-5" />
                Change Role
              </Button>

              <Button
                variant="outline"
                className="justify-start rounded-2xl border-orange-200 text-orange-600 hover:bg-orange-50"
              >
                <BadgeCheck className="mr-2 size-5" />
                Verify Profile
              </Button>

              <Button
                variant="outline"
                className="justify-start rounded-2xl border-red-200 text-red-600 hover:bg-red-50"
              >
                <Ban className="mr-2 size-5" />
                Suspend User
              </Button>

              <Button
                variant="outline"
                className="justify-start rounded-2xl border-red-200 text-red-600 hover:bg-red-50"
              >
                <Trash2 className="mr-2 size-5" />
                Delete User
              </Button>
            </CardContent>
          </Card>

          <Card className="border-orange-100 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-950">Admin Notes</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="rounded-2xl bg-orange-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  This page will later connect to the backend user details API.
                  Super Admin will be able to review account documents, approval
                  history, listings, reports, and activity logs from this
                  section.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}