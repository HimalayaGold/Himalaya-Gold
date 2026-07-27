export interface SocialPost {
  id: string;
  /** Post caption (may be empty) — used for alt text + link label. */
  caption: string;
  /** Thumbnail/preview image URL from Instagram. */
  image: string;
  /** Permalink to the post on Instagram. */
  href: string;
}