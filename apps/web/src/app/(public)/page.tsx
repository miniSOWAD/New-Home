import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Home,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench
} from "lucide-react";

import { HomeSmartSearch } from "@/components/home/HomeSmartSearch";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <section className="relative">
        <div className="container-main grid min-h-[calc(100vh-76px)] items-center gap-12 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-black text-orange-600 shadow-sm">
              <Sparkles className="size-4" />
              To-let Hub + Service Pro
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Find your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                place.
              </span>
              <br />
              Find trusted{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                help.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              New Home connects customers with verified rental listings and
              trusted home service providers. Search houses, rooms, cooks,
              housemaids, cleaners, drivers, electricians, and more from one
              secure platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-2xl bg-orange-500 px-7 font-black text-white hover:bg-orange-600"
              >
                <Link href="/to-let">
                  Explore To-let
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 rounded-2xl border-orange-200 bg-white px-7 font-black text-slate-900 hover:bg-orange-50"
              >
                <Link href="/services">Find Services</Link>
              </Button>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
                <Users className="mb-3 size-7 text-orange-500" />
                <p className="text-3xl font-black text-slate-950">4</p>
                <p className="text-sm text-slate-500">User roles</p>
              </div>

              <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
                <Building2 className="mb-3 size-7 text-orange-500" />
                <p className="text-3xl font-black text-slate-950">2</p>
                <p className="text-sm text-slate-500">Main modules</p>
              </div>

              <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
                <BadgeCheck className="mb-3 size-7 text-orange-500" />
                <p className="text-3xl font-black text-slate-950">100%</p>
                <p className="text-sm text-slate-500">Approval based</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <HomeSmartSearch />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
                <Home className="mb-3 size-7 text-orange-500" />
                <h3 className="font-black text-slate-950">To-let Hub</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Find flats, rooms, houses, bachelor seats, offices, and shops.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
                <Wrench className="mb-3 size-7 text-orange-500" />
                <h3 className="font-black text-slate-950">Service Pro</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Find cooks, maids, cleaners, drivers, electricians, and more.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-orange-200 bg-orange-50 p-5">
              <div className="flex gap-3">
                <ShieldCheck className="size-6 shrink-0 text-orange-500" />
                <div>
                  <h3 className="font-black text-orange-700">
                    Security Rule
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Visitors can browse, but only approved users can request or
                    provide services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}