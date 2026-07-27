import type { SocialPost } from "@/types/socialPost";

/**
 * TEMPORARY static gallery data.
 *
 * INTEGRATION PHASE: replace this with the live Instagram Graph API feed.
 * When that lands:
 *   - delete this file
 *   - SocialGallery becomes an async server component that fetches 4 posts
 *   - add the IG CDN hosts to next/image remotePatterns
 *
 * The SocialPost type is unchanged by that swap — only the data SOURCE
 * changes, not the UI. For now: hardcoded posts + local placeholder images.
 *
 * TODO: point hrefs at real Instagram post URLs (or the profile).
 */
export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: "post-1",
    image: "/images/home/ig-1.png",
    caption: "A steaming bowl of freshly cooked Himalaya Gold rice",
    href: "https://instagram.com/himalayagoldrice",
  },
  {
    id: "post-2",
    image: "/images/home/ig-2.png",
    caption: "Fragrant biryani made with Himalaya Gold Miniket",
    href: "https://instagram.com/himalayagoldrice",
  },
  {
    id: "post-3",
    image: "/images/home/ig-3.png",
    caption: "Golden paddy fields at harvest time",
    href: "https://instagram.com/himalayagoldrice",
  },
  {
    id: "post-4",
    image: "/images/home/ig-4.png",
    caption: "Himalaya Gold rice packs on the shelf",
    href: "https://instagram.com/himalayagoldrice",
  },
];