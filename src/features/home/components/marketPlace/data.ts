import type { Marketplace } from "@/types/marketplace";

/**
 * Marketplaces where the products are sold. Append new entries
 * (BigBasket, JioMart, Zepto, ...) here — the strip renders them
 * automatically, no component changes needed.
 *
 * TODO: replace hrefs with the real Himalaya Gold brand-store URLs
 * (not the marketplace homepages).
 */
export const MARKETPLACES: Marketplace[] = [
  {
    id: "amazon",
    name: "Amazon",
    image: "/images/home/amazon.png",
    href: "https://www.amazon.in",
  },
  {
    id: "flipkart",
    name: "Flipkart",
    image: "/images/home/flipkart.png",
    href: "https://www.flipkart.com",
  },
  {
    id: "blinkit",
    name: "Blinkit",
    image: "/images/home/blinkit.png",
    href: "https://blinkit.com",
  },
];