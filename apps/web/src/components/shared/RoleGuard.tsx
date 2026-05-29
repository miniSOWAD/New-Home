"use client";

import { useRouter } from "next/navigation";
import { ShieldX } from "lucide-react";

import { Button } from "@/components/ui/button";

type UserRole = "SUPER_ADMIN" | "ADMIN" | "CUSTOMER" | "PROVIDER";

type RoleGuardProps = {
  children: React.ReactNode;
  currentRole?: UserRole | null;
  allowedRoles: UserRole[];
};

export function RoleGuard({
  children,
  currentRole,
  allowedRoles
}: RoleGuardProps) {
  const router = useRouter();

  const isAllowed = currentRole ? allowedRoles.includes(currentRole) : false;

  if (!isAllowed) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md rounded-3xl border bg-card p-8 text-center shadow-soft">
          <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <ShieldX className="size-8" />
          </div>

          <h2 className="text-2xl font-bold">Access Denied</h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            You do not have permission to access this page.
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