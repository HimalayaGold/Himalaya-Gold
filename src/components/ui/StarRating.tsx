import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  /** Rating value, 1–max. */
  value: number;
  /** Total stars. Default 5. */
  max?: number;
  className?: string;
}

/**
 * Accessible star rating.
 *
 * - The visual stars are aria-hidden (decorative); a single visually
 *   hidden label carries the meaning, so a screen reader announces
 *   "Rated 4 out of 5 stars" ONCE instead of reading five icons.
 * - role="img" + aria-label on the wrapper is the standard pattern for
 *   "this cluster of elements is really one meaningful image".
 */
export function StarRating({ value, max = 5, className }: StarRatingProps) {
  return (
    <div
      role="img"
      aria-label={`Rated ${value} out of ${max} stars`}
      className={cn("flex items-center gap-0.5", className)}
    >
      {Array.from({ length: max }).map((_, index) => {
        const filled = index < value;
        return (
          <Star
            key={index}
            aria-hidden="true"
            className={cn(
              "h-4 w-4",
              filled ? "fill-gold-500 text-gold-500" : "fill-none text-maroon-950/25"
            )}
          />
        );
      })}
    </div>
  );
}