import { ReviewCard } from "@/components/reviews/ReviewCard";
import { ReviewForm } from "@/components/reviews/ReviewForm";

const reviews = [
  {
    reviewerName: "You",
    rating: 5,
    comment:
      "The provider was professional and helpful. Communication was clear and the service was completed properly.",
    date: "May 2026"
  },
  {
    reviewerName: "You",
    rating: 4,
    comment:
      "Good experience overall. The response was quick and the service quality was satisfactory.",
    date: "April 2026"
  }
];

export default function CustomerReviewsPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 p-8 text-white shadow-[0_20px_70px_rgba(251,146,60,0.25)]">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/75">
          Customer / Reviews
        </p>

        <h1 className="mt-3 text-4xl font-black tracking-tight">
          My Reviews
        </h1>

        <p className="mt-3 max-w-2xl text-white/85">
          View reviews you submitted and rate completed To-let or service
          experiences.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <ReviewForm targetName="a completed service" />

        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewCard
              key={`${review.reviewerName}-${review.date}`}
              reviewerName={review.reviewerName}
              rating={review.rating}
              comment={review.comment}
              date={review.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}