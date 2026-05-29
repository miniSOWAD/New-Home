"use client";

import { KeyRound } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ChangePasswordForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Password change form ready. Backend API will be connected later.");
  };

  return (
    <Card className="border-orange-100 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Security
          </p>

          <h2 className="mt-1 text-2xl font-black text-slate-950">
            Change Password
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Use a strong password to keep your account secure.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="input-label" htmlFor="currentPassword">
              Current Password
            </label>
            <Input
              id="currentPassword"
              type="password"
              placeholder="Enter current password"
              className="border-orange-100 focus-visible:ring-orange-400"
            />
          </div>

          <div className="form-grid">
            <div className="space-y-2">
              <label className="input-label" htmlFor="newPassword">
                New Password
              </label>
              <Input
                id="newPassword"
                type="password"
                placeholder="Enter new password"
                className="border-orange-100 focus-visible:ring-orange-400"
              />
            </div>

            <div className="space-y-2">
              <label className="input-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                className="border-orange-100 focus-visible:ring-orange-400"
              />
            </div>
          </div>

          <Button className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300">
            <KeyRound className="mr-2 size-5" />
            Update Password
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}