"use client";

import { useMemo } from "react";

export type NotificationItem = {
  id: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
};

const demoNotifications: NotificationItem[] = [
  {
    id: "notification-1",
    title: "Approval system ready",
    message: "Pending approval flow is prepared for backend integration.",
    isRead: false,
    createdAt: new Date().toISOString()
  },
  {
    id: "notification-2",
    title: "Dashboard navigation created",
    message: "Role-based dashboard tabs are now configured.",
    isRead: false,
    createdAt: new Date().toISOString()
  }
];

export function useNotifications() {
  const notifications = demoNotifications;

  const unreadCount = useMemo(
    () => notifications.filter((notification) => !notification.isRead).length,
    [notifications]
  );

  return {
    notifications,
    unreadCount,
    isLoading: false
  };
}