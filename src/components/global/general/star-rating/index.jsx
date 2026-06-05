import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ rating, max = 5, className }) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      aria-label={`${rating} out of ${max} stars`}
    >
      {Array.from({ length: max }, (_, i) => {
        const filled = i + 1 <= Math.floor(rating);
        const half = !filled && i < rating;
        return filled ? (
          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
        ) : half ? (
          <StarHalf key={i} size={14} className="fill-amber-400 text-amber-400" />
        ) : (
          <Star key={i} size={14} className="text-zinc-300" />
        );
      })}
    </div>
  );
}
