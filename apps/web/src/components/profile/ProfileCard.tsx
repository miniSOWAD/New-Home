import { Mail, MapPin, Phone, User, UserRoundCheck } from "lucide-react";

import { VerificationStatus } from "@/components/profile/VerificationStatus";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { ApprovalStatus, UserRole } from "@/types/role.types";

type ProfileCardProps = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  role?: UserRole;
  approvalStatus?: ApprovalStatus;
};

const roleLabel: Record<UserRole, string> = {
  SUPER_ADMIN: "Super Admin",
  ADMIN: "Admin",
  CUSTOMER: "Customer",
  PROVIDER: "Provider"
};

export function ProfileCard({
  name = "New Home User",
  email = "user@newhome.com",
  phone = "+880 1000-000000",
  address = "Bangladesh",
  role = "CUSTOMER",
  approvalStatus = "APPROVED"
}: ProfileCardProps) {
  return (
    <Card className="border-orange-100 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex size-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-lg shadow-orange-500/20">
            <User className="size-12" />
          </div>

          <h2 className="mt-5 text-2xl font-black text-slate-950">{name}</h2>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
              {roleLabel[role]}
            </Badge>

            <Badge className="bg-yellow-100 text-slate-950 hover:bg-yellow-100">
              {approvalStatus}
            </Badge>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
            <Mail className="size-5 text-orange-500" />
            <span className="text-sm font-semibold text-slate-700">
              {email}
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
            <Phone className="size-5 text-orange-500" />
            <span className="text-sm font-semibold text-slate-700">
              {phone}
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
            <MapPin className="size-5 text-orange-500" />
            <span className="text-sm font-semibold text-slate-700">
              {address}
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
            <UserRoundCheck className="size-5 text-orange-500" />
            <span className="text-sm font-semibold text-slate-700">
              Role: {roleLabel[role]}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <VerificationStatus status={approvalStatus} />
        </div>
      </CardContent>
    </Card>
  );
}