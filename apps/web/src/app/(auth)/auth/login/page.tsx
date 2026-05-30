"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Home, Lock, Mail } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const { login, isLoggingIn } = useAuth();

  const [email, setEmail] = useState("customer@newhome.com");
  const [password, setPassword] = useState("Password123");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login({
      email,
      password
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <div className="container-main grid min-h-screen items-center gap-10 py-10 lg:grid-cols-2">
        <div className="hidden lg:block">
          <div className="inline-flex size-16 items-center justify-center rounded-3xl bg-orange-500 text-white shadow-lg shadow-orange-500/25">
            <Home className="size-8" />
          </div>

          <h1 className="mt-8 max-w-xl text-6xl font-black leading-tight text-slate-950">
            Welcome back to{" "}
            <span className="text-orange-500">New Home.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Login to search rentals, request services, manage listings, approve
            users, and access your role-based dashboard.
          </p>
        </div>

        <div className="mx-auto w-full max-w-md rounded-[2rem] border border-orange-100 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
              <Home className="size-7" />
            </div>

            <h2 className="text-3xl font-black text-slate-950">Login</h2>
            <p className="mt-2 text-sm text-slate-500">
              Use your approved account to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="input-label" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 rounded-2xl border-orange-100 pl-11 focus-visible:ring-orange-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="input-label" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-400" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="h-12 rounded-2xl border-orange-100 pl-11 focus-visible:ring-orange-400"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <Button
              disabled={isLoggingIn}
              className="h-12 w-full rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300"
            >
              {isLoggingIn ? "Logging in..." : "Login"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            No account?{" "}
            <Link
              href="/auth/register"
              className="font-black text-orange-600 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}