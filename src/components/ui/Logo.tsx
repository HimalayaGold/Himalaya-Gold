import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${SITE_CONFIG.name} — Home`}
    >
      <Image
        src="/images/global/logo/logo.webp"
        alt={SITE_CONFIG.name}
        width={144}
        height={48}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}