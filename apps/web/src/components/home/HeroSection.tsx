"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, Home, Search, ShieldCheck, Sparkles } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type HeroSectionProps = {
  status?: string;
};

export function HeroSection({ status }: HeroSectionProps) {
  useEffect(() => {
    if (status === "waiting-approval") {
      toast.warning("Your account is waiting for approval.");
    }

    if (status === "rejected") {
      toast.error("Your account request was rejected.");
    }

    if (status === "suspended") {
      toast.error("Your account has been suspended.");
    }
  }, [status]);

  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute left-1/2 top-20 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-main grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-2">
        <div className="animate-fade-in">
          <Badge variant="secondary" className="mb-6 gap-2 px-4 py-2">
            <Sparkles className="size-4 text-primary" />
            To-let Hub + Service Pro
          </Badge>

          <h1 className="max-w-3xl text-5xl font-black tracking-tight md:text-6xl lg:text-7xl">
            Find your <span className="gradient-text">place</span>. Find trusted{" "}
            <span className="gradient-text">help</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            New Home connects customers with verified rental listings and trusted
            home service providers. Search houses, rooms, cooks, housemaids,
            cleaners, drivers, electricians, and more from one secure platform.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/to-let">
                Explore To-let
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/services">Find Services</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border bg-card/80 p-4 shadow-sm backdrop-blur">
              <p className="text-2xl font-black">4</p>
              <p className="mt-1 text-sm text-muted-foreground">User roles</p>
            </div>

            <div className="rounded-2xl border bg-card/80 p-4 shadow-sm backdrop-blur">
              <p className="text-2xl font-black">2</p>
              <p className="mt-1 text-sm text-muted-foreground">Main modules</p>
            </div>

            <div className="rounded-2xl border bg-card/80 p-4 shadow-sm backdrop-blur">
              <p className="text-2xl font-black">100%</p>
              <p className="mt-1 text-sm text-muted-foreground">Approval based</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="glass-card rounded-[2rem] p-5">
            <div className="rounded-[1.5rem] bg-background p-5 shadow-sm">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Smart Search
                  </p>
                  <h2 className="text-2xl font-black">What do you need?</h2>
                </div>

                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Search className="size-6" />
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border bg-muted/40 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Home className="size-5" />
                    </div>

                    <div>
                      <p className="font-bold">Bachelor room under 6000</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Search nearby rooms, flats, family houses, sublets, and
                        hostel seats.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border bg-muted/40 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ShieldCheck className="size-5" />
                    </div>

                    <div>
                      <p className="font-bold">Verified cook or housemaid</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Find service providers after login and account approval.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4">
                  <p className="text-sm font-semibold text-primary">
                    Security Rule
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Visitors can browse, but only approved users can request or
                    provide services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-6 -top-6 hidden rounded-3xl border bg-card p-4 shadow-soft md:block">
            <p className="text-sm font-semibold">Admin Approved</p>
            <p className="text-xs text-muted-foreground">Safe access enabled</p>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-3xl border bg-card p-4 shadow-soft md:block">
            <p className="text-sm font-semibold">Provider Dashboard</p>
            <p className="text-xs text-muted-foreground">Manage listings easily</p>
          </div>
        </div>
      </div>
    </section>
  );
}