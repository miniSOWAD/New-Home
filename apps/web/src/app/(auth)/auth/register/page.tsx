"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Home, Mail, MapPin, Phone, User } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function RegisterPage() {
  const { register, isRegistering } = useAuth();

  const [role, setRole] = useState<"CUSTOMER" | "PROVIDER">("CUSTOMER");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    register({
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      phone: String(formData.get("phone")),
      address: String(formData.get("address")),
      password: String(formData.get("password")),
      role
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="container-main flex min-h-screen items-center justify-center py-10">
        <div className="w-full max-w-2xl rounded-[2rem] border border-orange-100 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
              <Home className="size-7" />
            </div>

            <h2 className="text-3xl font-black text-slate-950">
              Create Account
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Your account will need Admin or Super Admin approval before
              dashboard access.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="input-label" htmlFor="name">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-400" />
                  <Input
                    id="name"
                    name="name"
                    required
                    className="h-12 rounded-2xl border-orange-100 pl-11 focus-visible:ring-orange-400"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="input-label" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="h-12 rounded-2xl border-orange-100 pl-11 focus-visible:ring-orange-400"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="input-label" htmlFor="phone">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-400" />
                  <Input
                    id="phone"
                    name="phone"
                    required
                    className="h-12 rounded-2xl border-orange-100 pl-11 focus-visible:ring-orange-400"
                    placeholder="+8801XXXXXXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="input-label">Role</label>
                <Select
                  value={role}
                  onValueChange={(value) =>
                    setRole(value as "CUSTOMER" | "PROVIDER")
                  }
                >
                  <SelectTrigger className="h-12 rounded-2xl border-orange-100 focus:ring-orange-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CUSTOMER">Customer</SelectItem>
                    <SelectItem value="PROVIDER">Provider</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="input-label" htmlFor="address">
                Address
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-400" />
                <Input
                  id="address"
                  name="address"
                  className="h-12 rounded-2xl border-orange-100 pl-11 focus-visible:ring-orange-400"
                  placeholder="Mirzapur, Tangail"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="input-label" htmlFor="password">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="h-12 rounded-2xl border-orange-100 focus-visible:ring-orange-400"
                placeholder="Minimum 8 characters"
              />
            </div>

            <Button
              disabled={isRegistering}
              className="h-12 w-full rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300"
            >
              {isRegistering ? "Creating account..." : "Register"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-black text-orange-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}