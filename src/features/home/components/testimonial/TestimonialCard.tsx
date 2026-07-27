import Image from "next/image";
import { StarRating } from "@/components/ui/StarRating";
import type { Testimonial } from "@/types/testimonial";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  /** The active (center) card is enlarged and fully opaque. */
  isActive: boolean;
}

/**
 * One testimonial card. Visual weight is driven by `isActive`:
 * active = full opacity + subtle lift; inactive = 80% opacity.
 * (Scale is applied by the parent so layout math stays in one place.)
 */
export function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col items-center rounded-3xl bg-white p-6 text-center transition-shadow duration-300 sm:p-8",
        isActive ? "opacity-100 shadow-xl" : "opacity-80 shadow-md"
      )}
    >
      <div className="relative h-16 w-16 overflow-hidden ">
        <Image
          src={testimonial.avatar}
          alt={`${testimonial.name}, customer`}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>

      <figcaption className="mt-3">
        <p className="font-semibold text-maroon-950">{testimonial.name}</p>
        <p className="mt-0.5 text-sm font-medium text-maroon-950/70">
          {testimonial.location}
        </p>
      </figcaption>

      <blockquote className="mt-4 text-sm leading-relaxed text-maroon-950/75">
        “{testimonial.quote}”
      </blockquote>

      <StarRating value={testimonial.rating} className="mt-5" />
    </figure>
  );
}