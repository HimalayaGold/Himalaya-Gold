import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Renders as a <section> instead of <div> when this container
   * IS the semantic section wrapper (helps heading hierarchy / a11y).
   */
  as?: "div" | "section";
}

/**
 * Container centralizes horizontal max-width + padding so every
 * landing page section lines up identically. Never hardcode
 * "max-w-[1280px] mx-auto px-4" inline in a section — use this instead.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-(--container-content) px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}