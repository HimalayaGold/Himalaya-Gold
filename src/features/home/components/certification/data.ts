import type { Certification } from "@/types/certification";

/**
 * Certification logos shown in the marquee strip.
 * Currently 3 — just append new entries here as more arrive;
 * the marquee automatically incorporates them.
 */
export const CERTIFICATIONS: Certification[] = [
  { id: "iso", name: "ISO 9001:2015 Certified", image: "/images/home/cert-iso.webp" },
  { id: "fssai", name: "FSSAI Licensed", image: "/images/home/cert-fssai.webp" },
  { id: "apeda", name: "APEDA verified", image: "/images/home/cert-apeda.webp" },
];

/** How many logos should be visible across the strip at once. */
export const CERTIFICATIONS_VISIBLE_COUNT = 6;