"use client";

import { Building2, UserRoundSearch } from "lucide-react";

import { cn } from "@/lib/utils";

export type RegisterRole = "CUSTOMER" | "PROVIDER";

type RoleSelectorProps = {
  value: RegisterRole;
  onChange: (value: RegisterRole) => void;
};

const roles = [
  {
    value: "CUSTOMER" as const,
    title: "Customer",
    description: "I want to search houses and service providers.",
    icon: UserRoundSearch
  },
  {
    value: "PROVIDER" as const,
    title: "Provider",
    description: "I want to give houses for rent or provide services.",
    icon: Building2
  }
];

export function RoleSelector({ value, onChange }: RoleSelectorProps) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {roles.map((role) => {
        const Icon = role.icon;
        const isSelected = value === role.value;

        return (
          <button
            key={role.value}
            type="button"
            onClick={() => onChange(role.value)}
            className={cn(
              "rounded-2xl border bg-background p-4 text-left transition-all hover:border-primary/60 hover:bg-accent",
              isSelected && "border-primary bg-accent ring-2 ring-primary/20"
            )}
          >
            <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" />
            </div>

            <p className="font-black">{role.title}</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {role.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}