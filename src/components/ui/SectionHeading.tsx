import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  align?: "center" | "left";
  tone?: "red" | "light";
  className?: string;
}

/**
 * The recurring section title from the design. Always an <h2>: the
 * page's single <h1> lives in the Hero — correct heading hierarchy.
 */
export function SectionHeading({
  children,
  align = "center",
  tone = "red",
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-display md:text-4xl font-bold text-2xl",
        align === "center" && "text-center",
        tone === "red" ? "text-brick-500" : "text-cream-50",
        className
      )}
    >
      {children}
    </h2>
  );
}