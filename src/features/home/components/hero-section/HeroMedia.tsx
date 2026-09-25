import Image from "next/image";

/**
 * Hero background media.
 * Isolated in its own file so the planned image -> video swap touches one place.
 */
export function HeroMedia() {
  return (
    <Image
      src="/images/home/hero-banner.webp"
      alt=""
      aria-hidden="true"
      fill
      priority
      quality={90}
      sizes="100vw"
      className="object-cover"
    />
  );
}