"use client";

import Link from "next/link";
import { KeyRound } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ResetPasswordForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.success("Reset password API will be connected later.");
  };

  return (
    <Card className="w-full max-w-md shadow-soft">
      <CardContent className="p-6 md:p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <KeyRound className="size-7" />
          </div>

          <h1 className="text-3xl font-black">Reset Password</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Create a new password for your New Home account.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="password" className="input-label">
              New Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter new password"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="input-label">
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Reset Password
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Back to{" "}
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