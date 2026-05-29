"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShieldAlert } from "lucide-react";

import { Button } from "@/components/ui/button";

type ApprovalStatus = "PENDING" | "APPROVED" | "REJECTED" | "SUSPENDED";

type ApprovalGuardProps = {
  children: React.ReactNode;
  status?: ApprovalStatus | null;
};

export function ApprovalGuard({ children, status }: ApprovalGuardProps) {
  const router = useRouter();

  useEffect(() => {
    if (status === "PENDING") {
      router.push("/?status=waiting-approval");
    }

    if (status === "REJECTED") {
      router.push("/?status=rejected");
    }

    if (status === "SUSPENDED") {
      router.push("/?status=suspended");
    }
  }, [router, status]);

  if (!status || status !== "APPROVED") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md rounded-3xl border bg-card p-8 text-center shadow-soft">
          <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-warning/10 text-warning">
            <ShieldAlert className="size-8" />
          </div>

          <h2 className="text-2xl font-bold">Waiting for Approval</h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Your account must be approved by an Admin or Super Admin before you
            can access this area.
          </p>

          <Button className="mt-6" onClick={() => router.push("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}