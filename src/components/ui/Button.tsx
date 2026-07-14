import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "md" | "lg";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-maroon-600 text-cream-50 hover:bg-maroon-700",
  secondary: "bg-gold-500 text-maroon-900 hover:bg-gold-600",
  outline: "border border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-maroon-700",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const BASE_STYLES =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-offset-4";

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