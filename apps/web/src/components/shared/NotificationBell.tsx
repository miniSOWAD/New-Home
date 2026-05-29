"use client";

import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type NotificationBellProps = {
  count?: number;
};

export function NotificationBell({ count = 0 }: NotificationBellProps) {
  return (
    <Button variant="ghost" size="icon" className="relative">
      <Bell className="size-5" />

      {count > 0 ? (
        <Badge className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full p-0 text-[10px]">
          {count > 9 ? "9+" : count}
        </Badge>
      ) : null}
    </Button>
  );
}