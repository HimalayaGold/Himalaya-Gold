"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useAutoAdvance } from "@/hooks/useAutoAdvance";
import { TESTIMONIALS } from "./data";
import { TestimonialCard } from "./TestimonialCard";
import { cn } from "@/lib/utils";

/**
 * Auto-rotating testimonials carousel.
 *
 * - Shows a 3-wide window: previous, ACTIVE (center, enlarged, full
 *   opacity), next. The two neighbors sit at 80% opacity and smaller
 *   scale, matching the design.
 * - Auto-advances every 5s via useAutoAdvance; PAUSES on hover/focus so
 *   users can read. Manual dots also reset the timer.
 * - Modular arithmetic makes the window wrap seamlessly around the ends.
 * - aria-live announces the active reviewer to screen readers.
 */
export function Testimonials() {
  const [paused, setPaused] = useState(false);
  const { activeIndex, goTo } = useAutoAdvance({
    count: TESTIMONIALS.length,
    intervalMs: 5000,
    paused,
  });

  const total = TESTIMONIALS.length;
  const prev = TESTIMONIALS[(activeIndex - 1 + total) % total];
  const active = TESTIMONIALS[activeIndex];
  const next = TESTIMONIALS[(activeIndex + 1) % total];

  // [prev, active, next] with the render slot each occupies.
  const window = [
    { t: prev, slot: "side" as const, key: `prev-${prev.id}` },
    { t: active, slot: "center" as const, key: `center-${active.id}` },
    { t: next, slot: "side" as const, key: `next-${next.id}` },
  ];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-cream-50 py-14 sm:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <Container>
        <SectionHeading className="mb-10 sm:mb-14">
          <span id="testimonials-heading">Our testimonials</span>
        </SectionHeading>

        {/* 3-wide window on lg; on small screens only the center shows */}
        <ul
          aria-live="polite"
          className="flex items-center justify-center gap-4 sm:gap-6"
        >
          {window.map(({ t, slot, key }) => (
            <motion.li
              key={key}
              layout
              initial={{ opacity: 0 }}
              animate={{
                opacity: slot === "center" ? 1 : 0.8,
                scale: slot === "center" ? 1 : 0.9,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={cn(
                "w-full max-w-md",
                slot === "side" && "hidden lg:block lg:max-w-sm"
              )}
            >
              <TestimonialCard testimonial={t} isActive={slot === "center"} />
            </motion.li>
          ))}
        </ul>

        {/* Dot controls */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((t, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  isActive ? "w-6 bg-brick-500" : "w-2.5 bg-maroon-950/25 hover:bg-maroon-950/40"
                )}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}