import Image from "next/image";
import { Container } from "@/components/layout/Container";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  /** Background photo path. */
  image?: string;
  /** Extra bottom padding when a card overlaps the banner. */
  className?: string;
}

/**
 * Interior-page hero banner: background photo + brand overlay +
 * centered white title/subtitle. Reused by Contact, About, Blog, etc.
 *
 * The overlay guarantees text contrast regardless of the photo.
 * `priority` because on interior pages this IS the LCP element.
 */
export function PageBanner({
  title,
  subtitle,
  image = "/images/global/heroBanner/banner-paddy.png",
  className,
}: PageBannerProps) {
  return (
    <section aria-label={title} className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={image}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0" aria-hidden="true" />

      <Container className="relative z-10 py-16 flex flex-col items-center justify-center text-center sm:py-20">
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl pt-20">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-md text-sm text-white/90 sm:text-base">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}