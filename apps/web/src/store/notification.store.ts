"use client";

import { create } from "zustand";

export type NotificationType =
  | "INFO"
  | "SUCCESS"
  | "WARNING"
  | "ERROR"
  | "APPROVAL"
  | "MESSAGE";

export type NotificationStateItem = {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  createdAt: string;
};

type NotificationState = {
  notifications: NotificationStateItem[];
  unreadCount: number;

  addNotification: (
    notification: Omit<NotificationStateItem, "id" | "isRead" | "createdAt">
  ) => void;

  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
};

function calculateUnreadCount(notifications: NotificationStateItem[]) {
  return notifications.filter((notification) => !notification.isRead).length;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  unreadCount: 0,

  addNotification: (notification) =>
    set((state) => {
      const nextNotifications: NotificationStateItem[] = [
        {
          ...notification,
          id: crypto.randomUUID(),
          isRead: false,
          createdAt: new Date().toISOString()
        },
        ...state.notifications
      ];

      return {
        notifications: nextNotifications,
        unreadCount: calculateUnreadCount(nextNotifications)
      };
    }),

  markAsRead: (id) =>
    set((state) => {
      const nextNotifications = state.notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              isRead: true
            }
          : notification
      );

      return {
        notifications: nextNotifications,
        unreadCount: calculateUnreadCount(nextNotifications)
      };
    }),

  markAllAsRead: () =>
    set((state) => {
      const nextNotifications = state.notifications.map((notification) => ({
        ...notification,
        isRead: true
      }));

      return {
        notifications: nextNotifications,
        unreadCount: 0
      };
    }),

  removeNotification: (id) =>
    set((state) => {
      const nextNotifications = state.notifications.filter(
        (notification) => notification.id !== id
      );

      return {
        notifications: nextNotifications,
        unreadCount: calculateUnreadCount(nextNotifications)
      };
    }),

  clearNotifications: () =>
    set({
      notifications: [],
      unreadCount: 0
    })
}));