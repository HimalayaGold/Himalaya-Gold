"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { SocialPost } from "@/types/socialPost";

interface SocialCardProps {
  post: SocialPost;
  index: number;
}

/** Instagram glyph as inline SVG — avoids depending on lucide-react's
 *  icon set (the `Instagram` export varies across versions). */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/**
 * One social gallery tile — a portrait (4:5) image linking to the post.
 *
 * - The whole tile is a single external <a> (keyboard-focusable), so the
 *   hover overlay is reachable by mouse AND keyboard (group-hover +
 *   group-focus-visible).
 * - The photo zooms slightly on interaction inside overflow-hidden, so
 *   the tile footprint never changes.
 */
export function SocialCard({ post, index }: SocialCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 * index }}
    >
      <a
        href={post.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${post.caption} — view on Instagram (opens in a new tab)`}
        className="group relative block aspect-[4/5] overflow-hidden rounded-xl shadow-sm focus-visible:outline-none"
      >
        <Image
          src={post.image}
          alt={post.caption}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-focus-visible:scale-110"
        />

        {/* Overlay — appears on hover OR keyboard focus */}
        <div className="absolute inset-0 flex items-center justify-center bg-maroon-950/0 opacity-0 transition-all duration-300 group-hover:bg-maroon-950/45 group-hover:opacity-100 group-focus-visible:bg-maroon-950/45 group-focus-visible:opacity-100">
          <InstagramIcon className="h-8 w-8 text-white" />
        </div>
      </a>
    </motion.li>
  );
}