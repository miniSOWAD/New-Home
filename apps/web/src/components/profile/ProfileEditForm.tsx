"use client";

import { Save } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ProfileEditFormProps = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
};

export function ProfileEditForm({
  name = "New Home User",
  email = "user@newhome.com",
  phone = "+880 1000-000000",
  address = "Bangladesh"
}: ProfileEditFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Profile form ready. Backend API will be connected later.");
  };

  return (
    <Card className="border-orange-100 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Profile
          </p>

          <h2 className="mt-1 text-2xl font-black text-slate-950">
            Edit Profile
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Update your personal information and contact details.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="space-y-2">
              <label className="input-label" htmlFor="name">
                Full Name
              </label>
              <Input
                id="name"
                defaultValue={name}
                className="border-orange-100 focus-visible:ring-orange-400"
              />
            </div>

            <div className="space-y-2">
              <label className="input-label" htmlFor="email">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                defaultValue={email}
                className="border-orange-100 focus-visible:ring-orange-400"
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="space-y-2">
              <label className="input-label" htmlFor="phone">
                Phone Number
              </label>
              <Input
                id="phone"
                defaultValue={phone}
                className="border-orange-100 focus-visible:ring-orange-400"
              />
            </div>

            <div className="space-y-2">
              <label className="input-label" htmlFor="area">
                Area
              </label>
              <Input
                id="area"
                defaultValue="Mirzapur, Tangail"
                className="border-orange-100 focus-visible:ring-orange-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="input-label" htmlFor="address">
              Address
            </label>
            <Textarea
              id="address"
              defaultValue={address}
              className="border-orange-100 focus-visible:ring-orange-400"
            />
          </div>

          <Button className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300">
            <Save className="mr-2 size-5" />
            Save Changes
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}