"use client";

import { SendHorizonal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type MessageInputProps = {
  onSend?: (message: string) => void;
};

export function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    onSend?.(trimmedMessage);
    toast.success("Message sent demo. Backend chat API will be connected later.");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 border-t border-orange-100 bg-white p-4"
    >
      <Input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Write your message..."
        className="h-12 rounded-2xl border-orange-100 bg-orange-50/40 focus-visible:ring-orange-400"
      />

      <Button
        type="submit"
        size="icon"
        className="size-12 shrink-0 rounded-2xl bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/25 hover:bg-yellow-300"
      >
        <SendHorizonal className="size-5" />
      </Button>
    </form>
  );
}