import { BadgeCheck, Clock, ShieldAlert, ShieldX } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { ApprovalStatus } from "@/types/role.types";

type VerificationStatusProps = {
  status: ApprovalStatus;
};

export function VerificationStatus({ status }: VerificationStatusProps) {
  if (status === "APPROVED") {
    return (
      <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
            <BadgeCheck className="size-5" />
          </div>

          <div>
            <p className="font-black text-green-800">Approved Account</p>
            <p className="text-sm text-green-700">
              This profile is verified and can access dashboard features.
            </p>
          </div>

          <Badge className="ml-auto bg-green-600 text-white hover:bg-green-600">
            Approved
          </Badge>
        </div>
      </div>
    );
  }

  if (status === "PENDING") {
    return (
      <div className="rounded-2xl border border-yellow-100 bg-yellow-50 p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
            <Clock className="size-5" />
          </div>

          <div>
            <p className="font-black text-slate-900">Pending Approval</p>
            <p className="text-sm text-slate-600">
              This account is waiting for Admin or Super Admin approval.
            </p>
          </div>

          <Badge className="ml-auto bg-yellow-400 text-slate-950 hover:bg-yellow-400">
            Pending
          </Badge>
        </div>
      </div>
    );
  }

  if (status === "SUSPENDED") {
    return (
      <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-red-100 text-red-700">
            <ShieldAlert className="size-5" />
          </div>

          <div>
            <p className="font-black text-red-800">Suspended Account</p>
            <p className="text-sm text-red-700">
              This account is currently suspended from platform access.
            </p>
          </div>

          <Badge className="ml-auto bg-red-600 text-white hover:bg-red-600">
            Suspended
          </Badge>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-red-100 text-red-700">
          <ShieldX className="size-5" />
        </div>

        <div>
          <p className="font-black text-red-800">Rejected Account</p>
          <p className="text-sm text-red-700">
            This account request was rejected by platform authority.
          </p>
        </div>

        <Badge className="ml-auto bg-red-600 text-white hover:bg-red-600">
          Rejected
        </Badge>
      </div>
    </div>
  );
}