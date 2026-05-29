import Link from "next/link";
import { Clock, Home, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function WaitingApprovalPage() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-hero-gradient">
      <div className="container-main flex min-h-[calc(100vh-80px)] items-center justify-center py-12">
        <Card className="max-w-xl shadow-soft">
          <CardContent className="p-8 text-center md:p-10">
            <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-warning/10 text-warning">
              <Clock className="size-10" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Account Pending
            </p>

            <h1 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              Wait for admin approval
            </h1>

            <p className="mt-5 leading-7 text-muted-foreground">
              Your account has been created successfully, but you cannot access
              your dashboard until an Admin or Super Admin approves your account.
            </p>

            <div className="mt-8 rounded-2xl border bg-muted/40 p-5 text-left">
              <p className="flex items-center gap-3 font-semibold">
                <Mail className="size-5 text-primary" />
                What happens next?
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                The platform authority will review your account. After approval,
                you can login and access your role-based dashboard.
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 size-4" />
                  Back to Home
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/auth/login">Try Login Again</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}