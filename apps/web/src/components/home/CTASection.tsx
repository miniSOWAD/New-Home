import Link from "next/link";
import { ArrowRight, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="overflow-hidden rounded-[2rem] border bg-card shadow-soft">
          <div className="relative bg-hero-gradient p-8 text-center md:p-14">
            <div className="absolute left-1/2 top-0 -z-10 size-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <UserPlus className="size-8" />
            </div>

            <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
              Ready to find a home or provide a trusted service?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Register today as a Customer or Provider. After admin approval,
              you can access your dedicated dashboard and use New Home features.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/auth/register">
                  Create Account
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link href="/auth/login">Already have an account?</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}