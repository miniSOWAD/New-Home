import type { UserSummary } from "@/types/user.types";

export type Conversation = {
  id: string;
  participants: UserSummary[];
  lastMessage?: Message;
  createdAt: string;
  updatedAt: string;
};

export type Message = {
  id: string;
  conversationId: string;
  senderId: string;
  receiverId: string;
  body: string;
  isRead: boolean;
  createdAt: string;
};