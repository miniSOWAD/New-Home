"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

import { RatingStars } from "@/components/reviews/RatingStars";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type ReviewFormProps = {
  targetName?: string;
};

export function ReviewForm({ targetName = "this provider" }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (rating === 0) {
      toast.error("Please select a rating.");
      return;
    }

    toast.success("Review submitted demo. Backend API will be connected later.");
    setRating(0);
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
          Review
        </p>

        <h2 className="mt-1 text-2xl font-black text-slate-950">
          Rate {targetName}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Share your experience after a completed request.
        </p>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <label className="input-label">Your Rating</label>
          <RatingStars value={rating} onChange={setRating} size="lg" />
        </div>

        <div className="space-y-2">
          <label className="input-label" htmlFor="comment">
            Comment
          </label>

          <Textarea
            id="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Write your review..."
            className="border-orange-100 focus-visible:ring-orange-400"
          />
        </div>

        <Button className="rounded-2xl bg-yellow-400 font-black text-slate-950 hover:bg-yellow-300">
          <Send className="mr-2 size-5" />
          Submit Review
        </Button>
      </div>
    </form>
  );
}