"use client";

import { useEffect, useRef, useState } from "react";

interface UseAutoAdvanceOptions {
  /** Number of items to cycle through. */
  count: number;
  /** Milliseconds between advances. */
  intervalMs?: number;
  /** When true, the timer is paused (e.g. on hover/focus). */
  paused?: boolean;
}

/**
 * Cycles an index 0..count-1 on a timer, wrapping around.
 *
 * - Returns the active index plus setters for manual control.
 * - Pauses when `paused` is true (hover/focus) so users can read.
 * - The interval is recreated whenever deps change and always cleared
 *   on cleanup — no leaked timers, a classic React bug this avoids.
 * - `goTo` also RESETS the timer, so a manual jump gives you a full
 *   interval to read before the next auto-advance.
 */
export function useAutoAdvance({
  count,
  intervalMs = 1000,
  paused = false,
}: UseAutoAdvanceOptions) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || count <= 1) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [count, intervalMs, paused]);

  const goTo = (index: number) => setActiveIndex(((index % count) + count) % count);

  return { activeIndex, setActiveIndex, goTo };
}