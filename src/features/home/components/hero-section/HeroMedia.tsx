import Image from "next/image";

/**
 * Hero background media.
 * Isolated in its own file so the planned image -> video swap touches one place.
 */
export function HeroMedia() {
  return (
    <>
      <Image
        src="/images/home/hero-banner.webp"
        alt="Himalaya gold rice premium miniket rice hero banner"
        aria-hidden="true"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-cream-50 to-transparent md:h-32"
      />
    </>
  );
}