"use client";

import { MessageSquare, Search } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ChatItem = {
  id: string;
  name: string;
  role: string;
  lastMessage: string;
  time: string;
  unread?: number;
};

type ChatListProps = {
  chats?: ChatItem[];
  selectedChatId?: string;
  onSelectChat?: (chatId: string) => void;
};

const defaultChats: ChatItem[] = [
  {
    id: "chat-1",
    name: "Rahim Provider",
    role: "Property Owner",
    lastMessage: "The flat is still available.",
    time: "10:30 AM",
    unread: 2
  },
  {
    id: "chat-2",
    name: "Karim Service",
    role: "Electrician",
    lastMessage: "I can visit tomorrow morning.",
    time: "Yesterday"
  },
  {
    id: "chat-3",
    name: "Nusrat Akter",
    role: "Housemaid",
    lastMessage: "Monthly service is possible.",
    time: "May 28",
    unread: 1
  }
];

export function ChatList({
  chats = defaultChats,
  selectedChatId = "chat-1",
  onSelectChat
}: ChatListProps) {
  const [query, setQuery] = useState("");

  const filteredChats = chats.filter((chat) =>
    `${chat.name} ${chat.role} ${chat.lastMessage}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <aside className="flex h-full min-h-[620px] flex-col overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-sm">
      <div className="border-b border-orange-100 p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Inbox
            </p>
            <h2 className="mt-1 text-2xl font-black text-slate-950">
              Messages
            </h2>
          </div>

          <div className="flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
            <MessageSquare className="size-6" />
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-400" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search conversation..."
            className="border-orange-100 pl-11 focus-visible:ring-orange-400"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        {filteredChats.map((chat) => {
          const isSelected = selectedChatId === chat.id;

          return (
            <button
              key={chat.id}
              type="button"
              onClick={() => onSelectChat?.(chat.id)}
              className={cn(
                "flex w-full gap-3 rounded-2xl p-3 text-left transition",
                isSelected
                  ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg shadow-orange-500/20"
                  : "hover:bg-orange-50"
              )}
            >
              <div
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black",
                  isSelected
                    ? "bg-white/20 text-white"
                    : "bg-orange-100 text-orange-600"
                )}
              >
                {chat.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "truncate font-black",
                        isSelected ? "text-white" : "text-slate-950"
                      )}
                    >
                      {chat.name}
                    </p>
                    <p
                      className={cn(
                        "truncate text-xs",
                        isSelected ? "text-white/75" : "text-slate-500"
                      )}
                    >
                      {chat.role}
                    </p>
                  </div>

                  <span
                    className={cn(
                      "shrink-0 text-[11px] font-bold",
                      isSelected ? "text-white/75" : "text-slate-400"
                    )}
                  >
                    {chat.time}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between gap-2">
                  <p
                    className={cn(
                      "truncate text-sm",
                      isSelected ? "text-white/80" : "text-slate-500"
                    )}
                  >
                    {chat.lastMessage}
                  </p>

                  {chat.unread ? (
                    <Badge className="flex size-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 p-0 text-[10px] text-slate-950 hover:bg-yellow-400">
                      {chat.unread}
                    </Badge>
                  ) : null}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}