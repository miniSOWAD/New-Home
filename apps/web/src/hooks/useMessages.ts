"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { messageService } from "@/services/message.service";

export function useConversations() {
  return useQuery({
    queryKey: ["messages", "conversations"],
    queryFn: messageService.getConversations
  });
}

export function useConversation(id?: string) {
  return useQuery({
    queryKey: ["messages", "conversations", id],
    queryFn: () => messageService.getConversationById(id as string),
    enabled: Boolean(id)
  });
}

export function useConversationMessages(conversationId?: string) {
  return useQuery({
    queryKey: ["messages", "conversations", conversationId, "items"],
    queryFn: () => messageService.getMessages(conversationId as string),
    enabled: Boolean(conversationId)
  });
}

export function useMessageActions() {
  const queryClient = useQueryClient();

  const createConversationMutation = useMutation({
    mutationFn: (payload: {
      participantId: string;
      toletPostId?: string;
      servicePostId?: string;
    }) => messageService.createConversation(payload),

    onSuccess: () => {
      toast.success("Conversation created.");
      queryClient.invalidateQueries({
        queryKey: ["messages", "conversations"]
      });
    },

    onError: () => {
      toast.error("Failed to create conversation.");
    }
  });

  const sendMessageMutation = useMutation({
    mutationFn: (payload: {
      conversationId: string;
      receiverId: string;
      body: string;
    }) => messageService.sendMessage(payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["messages", "conversations"]
      });

      queryClient.invalidateQueries({
        queryKey: [
          "messages",
          "conversations",
          variables.conversationId,
          "items"
        ]
      });
    },

    onError: () => {
      toast.error("Failed to send message.");
    }
  });

  const markAsReadMutation = useMutation({
    mutationFn: (conversationId: string) =>
      messageService.markConversationAsRead(conversationId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messages", "conversations"]
      });
    }
  });

  return {
    createConversation: createConversationMutation.mutate,
    isCreatingConversation: createConversationMutation.isPending,

    sendMessage: sendMessageMutation.mutate,
    isSendingMessage: sendMessageMutation.isPending,

    markConversationAsRead: markAsReadMutation.mutate,
    isMarkingConversationAsRead: markAsReadMutation.isPending
  };
}