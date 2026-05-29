"use client";

import Link from "next/link";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RoleSelector, type RegisterRole } from "@/components/auth/RoleSelector";

export function RegisterForm() {
  const router = useRouter();

  const [role, setRole] = useState<RegisterRole>("CUSTOMER");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.success(
      "Registration demo submitted. Backend API will create a pending account later."
    );

    router.push("/auth/waiting-approval");
  };

  return (
    <Card className="mx-auto w-full max-w-xl shadow-soft">
      <CardContent className="p-6 md:p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <UserPlus className="size-7" />
          </div>

          <h1 className="text-3xl font-black">Create Account</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Register first. Admin approval is required before dashboard access.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="input-label">Select Role</label>
            <RoleSelector value={role} onChange={setRole} />
          </div>

          <div className="form-grid">
            <div className="space-y-2">
              <label htmlFor="name" className="input-label">
                Full Name
              </label>
              <Input id="name" placeholder="Enter full name" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="input-label">
                Phone Number
              </label>
              <Input id="phone" placeholder="Enter phone number" required />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="input-label">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="input-label">
              Address / Area
            </label>
            <Input id="address" placeholder="Example: Mirzapur, Tangail" />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="input-label">
              Password
            </label>

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="pr-12"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
          </div>

          <input type="hidden" name="role" value={role} />

          <Button type="submit" className="w-full">
            Register as {role === "CUSTOMER" ? "Customer" : "Provider"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}