import Link from "next/link";
import { Home } from "lucide-react";

import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-hero-gradient">
      <div className="container-main grid min-h-[calc(100vh-80px)] items-center gap-10 py-12 lg:grid-cols-2">
        <div className="hidden lg:block">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Home className="size-6" />
            </div>

            <div>
              <p className="text-2xl font-black">New Home</p>
              <p className="text-sm text-muted-foreground">
                Find your place. Find trusted help.
              </p>
            </div>
          </Link>

          <h1 className="mt-10 max-w-xl text-5xl font-black tracking-tight">
            Create your New Home account.
          </h1>

          <p className="mt-5 max-w-lg leading-8 text-muted-foreground">
            Register as a Customer or Provider. After registration, your account
            will wait for Admin or Super Admin approval.
          </p>
        </div>

        <RegisterForm />
      </div>
    </section>
  );
}