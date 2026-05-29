import { cn } from "@/lib/utils";

type MessageBubbleProps = {
  message: string;
  time?: string;
  isOwn?: boolean;
};

export function MessageBubble({
  message,
  time = "Just now",
  isOwn = false
}: MessageBubbleProps) {
  return (
    <div className={cn("flex", isOwn ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-[1.4rem] px-4 py-3 shadow-sm",
          isOwn
            ? "rounded-br-md bg-gradient-to-br from-orange-500 to-yellow-400 text-white"
            : "rounded-bl-md border border-orange-100 bg-white text-slate-700"
        )}
      >
        <p className="text-sm leading-6">{message}</p>

        <p
          className={cn(
            "mt-1 text-[11px]",
            isOwn ? "text-white/75" : "text-slate-400"
          )}
        >
          {time}
        </p>
      </div>
    </div>
  );
}