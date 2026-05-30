"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Home, Search, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HomeSmartSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    const lowerQuery = trimmedQuery.toLowerCase();

    const serviceKeywords = [
      "cook",
      "housemaid",
      "maid",
      "cleaner",
      "driver",
      "electrician",
      "plumber",
      "service",
      "tutor",
      "guard"
    ];

    const targetRoute = serviceKeywords.some((keyword) =>
      lowerQuery.includes(keyword)
    )
      ? "/services"
      : "/to-let";

    router.push(`${targetRoute}?query=${encodeURIComponent(trimmedQuery)}`);
  };

  return (
    <div className="rounded-[2rem] border border-orange-100 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Smart Search
          </p>
          <h2 className="mt-1 text-2xl font-black text-slate-950">
            What do you need?
          </h2>
        </div>

        <div className="flex size-12 items-center justify-center rounded-2xl bg-orange-500 text-white">
          <Search className="size-6" />
        </div>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col gap-3 sm:flex-row">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Example: bachelor room under 6000, cook near Mirzapur..."
          className="h-12 rounded-2xl border-orange-100 bg-orange-50/40 focus-visible:ring-orange-400"
        />

        <Button className="h-12 rounded-2xl bg-yellow-400 px-6 font-black text-slate-950 hover:bg-yellow-300">
          Search
        </Button>
      </form>

      <div className="mt-6 grid gap-4">
        <div className="flex gap-4 rounded-2xl border border-orange-100 bg-orange-50/60 p-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-orange-500">
            <Home className="size-5" />
          </div>
          <div>
            <h3 className="font-black text-slate-950">
              Bachelor room under 6000
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Search rooms, flats, family houses, sublets, and hostel seats.
            </p>
          </div>
        </div>

        <div className="flex gap-4 rounded-2xl border border-orange-100 bg-yellow-50 p-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-orange-500">
            <ShieldCheck className="size-5" />
          </div>
          <div>
            <h3 className="font-black text-slate-950">
              Verified cook or housemaid
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Find service providers after login and account approval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}