"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the window has scrolled past `threshold` pixels.
 * Used by Navbar to switch from a transparent hero overlay to a
 * solid background, but written generically so any component
 * needing scroll-aware behavior can reuse it.
 *
 * The scroll listener is passive (perf) and removed on unmount.
 */
export function useScrolled(threshold = 40): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Run once on mount in case the page loads already scrolled
    // (e.g. browser restoring scroll position on refresh).
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}