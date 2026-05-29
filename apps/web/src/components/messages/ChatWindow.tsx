"use client";

import { MoreVertical, Phone, ShieldCheck, User } from "lucide-react";
import { useState } from "react";

import { MessageBubble } from "@/components/messages/MessageBubble";
import { MessageInput } from "@/components/messages/MessageInput";
import { Button } from "@/components/ui/button";

type ChatMessage = {
  id: string;
  message: string;
  time: string;
  isOwn: boolean;
};

const defaultMessages: ChatMessage[] = [
  {
    id: "message-1",
    message: "Hello, is the flat still available?",
    time: "10:20 AM",
    isOwn: true
  },
  {
    id: "message-2",
    message: "Yes, it is available. You can visit this Friday.",
    time: "10:22 AM",
    isOwn: false
  },
  {
    id: "message-3",
    message: "Great. Is gas and water available?",
    time: "10:25 AM",
    isOwn: true
  },
  {
    id: "message-4",
    message: "Yes, both gas and water facilities are available.",
    time: "10:30 AM",
    isOwn: false
  }
];

type ChatWindowProps = {
  name?: string;
  role?: string;
};

export function ChatWindow({
  name = "Rahim Provider",
  role = "Property Owner"
}: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(defaultMessages);

  const handleSend = (message: string) => {
    const nextMessage: ChatMessage = {
      id: crypto.randomUUID(),
      message,
      time: "Just now",
      isOwn: true
    };

    setMessages((currentMessages) => [...currentMessages, nextMessage]);
  };

  return (
    <section className="flex h-full min-h-[620px] flex-col overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-sm">
      <header className="flex items-center justify-between border-b border-orange-100 p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white">
            <User className="size-6" />
          </div>

          <div>
            <h2 className="font-black text-slate-950">{name}</h2>
            <p className="text-sm text-slate-500">{role}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-xl text-orange-500 hover:bg-orange-50"
          >
            <Phone className="size-5" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="rounded-xl text-orange-500 hover:bg-orange-50"
          >
            <MoreVertical className="size-5" />
          </Button>
        </div>
      </header>

      <div className="border-b border-orange-100 bg-yellow-50 px-5 py-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <ShieldCheck className="size-4 text-orange-500" />
          For safety, avoid sending advance payment before verification.
        </p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto bg-orange-50/30 p-5">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message.message}
            time={message.time}
            isOwn={message.isOwn}
          />
        ))}
      </div>

      <MessageInput onSend={handleSend} />
    </section>
  );
}