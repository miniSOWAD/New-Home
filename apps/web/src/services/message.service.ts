import { apiGet, apiPost } from "@/lib/api";
import type { Conversation, Message } from "@/types/message.types";

export const messageService = {
  async getConversations() {
    return apiGet<Conversation[]>("/messages/conversations");
  },

  async getConversationById(id: string) {
    return apiGet<Conversation>(`/messages/conversations/${id}`);
  },

  async getMessages(conversationId: string) {
    return apiGet<Message[]>(`/messages/conversations/${conversationId}/items`);
  },

  async createConversation(payload: {
    participantId: string;
    toletPostId?: string;
    servicePostId?: string;
  }) {
    return apiPost<Conversation, typeof payload>(
      "/messages/conversations",
      payload
    );
  },

  async sendMessage(payload: {
    conversationId: string;
    receiverId: string;
    body: string;
  }) {
    return apiPost<Message, typeof payload>("/messages", payload);
  },

  async markConversationAsRead(conversationId: string) {
    return apiPost<null>(`/messages/conversations/${conversationId}/read`);
  }
};