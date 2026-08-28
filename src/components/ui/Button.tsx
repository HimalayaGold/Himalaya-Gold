import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "md" | "lg";

/**
 * Variants are named by INTENT, not color, so a palette change never
 * requires touching call sites.
 * NOTE: every token used here must exist in globals.css @theme —
 * Tailwind v4 silently generates nothing for unknown tokens.
 */
const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-brick-500 text-white hover:bg-orange-700",
  secondary: "bg-orange-600 text-white hover:bg-orange-700",
  outline: "border border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-maroon-950",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const BASE_STYLES =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonProps =
  | (BaseProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">)
  | (BaseProps & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">);

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  const classes = cn(BASE_STYLES, VARIANT_STYLES[variant], SIZE_STYLES[size], className);

  if (props.href) {
    const { href, ...anchorProps } = props;
    return <Link href={href} className={classes} {...anchorProps} />;
  }

  const { type = "button", ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button type={type} className={classes} {...buttonProps} />;
}