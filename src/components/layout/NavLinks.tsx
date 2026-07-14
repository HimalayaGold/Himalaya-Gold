"use client";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  orientation?: "row" | "column";
  onLinkClick?: () => void;
  className?: string;
}

/**
 * The active route gets a red "pill" highlight, exactly as in the design.
 * Active state is derived from the current pathname, so it works on
 * every page automatically.
 */
export function NavLinks({ orientation = "row", onLinkClick, className }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        "flex items-center gap-1 lg:gap-2",
        orientation === "column" && "flex-col items-stretch gap-1",
        className
      )}
    >
      {NAV_LINKS.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onLinkClick}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
                orientation === "column" && "block w-full rounded-lg px-4 py-3 text-sm",
                isActive
                  ? "bg-brick-500 text-white"
                  : "text-maroon-950 hover:text-orange-600"
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}