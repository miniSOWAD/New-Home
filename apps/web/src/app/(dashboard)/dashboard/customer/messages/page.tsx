"use client";

import { useState } from "react";

import { ChatList } from "@/components/messages/ChatList";
import { ChatWindow } from "@/components/messages/ChatWindow";

export default function CustomerMessagesPage() {
  const [selectedChatId, setSelectedChatId] = useState("chat-1");

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Customer / Messages
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">Messages</h1>

        <p className="mt-3 max-w-2xl text-white/85">
          Communicate with property owners and service providers after sending
          rental or service requests.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <ChatList
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId}
        />

        <ChatWindow />
      </div>
    </div>
  );
}