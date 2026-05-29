"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

import { Button } from "@/components/ui/button";

type ProtectedRouteProps = {
  children: React.ReactNode;
  isAuthenticated?: boolean;
};

export function ProtectedRoute({
  children,
  isAuthenticated = false
}: ProtectedRouteProps) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md rounded-3xl border bg-card p-8 text-center shadow-soft">
          <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Lock className="size-8" />
          </div>

          <h2 className="text-2xl font-bold">Login Required</h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            You need to login before accessing this page.
          </p>

          <Button className="mt-6" onClick={() => router.push("/auth/login")}>
            Login Now
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}