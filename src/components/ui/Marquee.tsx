"use client";

import { Children, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  /** The UNIQUE items — Marquee repeats them internally as needed. */
  children: React.ReactNode;
  /** Exactly how many items are visible at once, per breakpoint. */
  visible?: { base: number; sm: number; lg: number };
  /** Seconds for one half-track to scroll past. Lower = faster. */
  durationSeconds?: number;
  className?: string;
}

/**
 * Self-contained infinite marquee. Deliberately depends on NOTHING in
 * globals.css or the Tailwind theme:
 *
 * - Slot width is MEASURED: containerWidth / visibleCount — so "exactly
 *   6 visible" holds on any screen (1280px laptop or 4K), scrollbars
 *   included, because we measure the real container, not the viewport.
 * - The unique children are repeated internally until one half-track
 *   fills the container, then the half is duplicated for the seamless
 *   loop (second half aria-hidden so screen readers hear items once).
 * - Animation = requestAnimationFrame moving a transform, wrapping with
 *   modulo at the half width. The transform is written to the DOM node
 *   directly (ref), NOT via React state — zero re-renders per frame.
 * - Pauses on hover; respects prefers-reduced-motion.
 */
export function Marquee({
  children,
  visible = { base: 3, sm: 4, lg: 6 },
  durationSeconds = 28,
  className,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);

  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(visible.lg);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Measure the container and pick the breakpoint's visible count.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      setContainerWidth(el.clientWidth);
      const vw = window.innerWidth;
      setVisibleCount(vw >= 1024 ? visible.lg : vw >= 640 ? visible.sm : visible.base);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible.base, visible.sm, visible.lg]);

  const slotWidth = visibleCount > 0 ? containerWidth / visibleCount : 0;

  // Repeat the unique items until one half-track spans the container.
  const uniqueItems = Children.toArray(children);
  const repeatCount =
    slotWidth > 0 && uniqueItems.length > 0
      ? Math.max(1, Math.ceil(containerWidth / (slotWidth * uniqueItems.length)))
      : 1;
  const halfItems = Array.from({ length: repeatCount }).flatMap(() => uniqueItems);
  const halfWidth = slotWidth * halfItems.length;

  // Drive the scroll with rAF; wrap at halfWidth for a seamless loop.
  useEffect(() => {
    if (prefersReducedMotion || isPaused || halfWidth === 0) return;

    let frameId: number;
    let lastTime = performance.now();
    const pixelsPerSecond = halfWidth / durationSeconds;

    const tick = (now: number) => {
      const deltaSeconds = (now - lastTime) / 1000;
      lastTime = now;
      offsetRef.current = (offsetRef.current + pixelsPerSecond * deltaSeconds) % halfWidth;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [prefersReducedMotion, isPaused, halfWidth, durationSeconds]);

  const renderHalf = (ariaHidden: boolean) => (
    <div className="flex shrink-0" aria-hidden={ariaHidden || undefined}>
      {halfItems.map((item, index) => (
        <div
          key={index}
          style={{ width: slotWidth || undefined }}
          className="flex shrink-0 items-center justify-center"
        >
          {item}
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={trackRef}
        className={cn(
          "flex w-max will-change-transform",
          // Hide until measured to avoid a one-frame unsized flash.
          slotWidth === 0 && "opacity-0"
        )}
      >
        {renderHalf(false)}
        {renderHalf(true)}
      </div>
    </div>
  );
}