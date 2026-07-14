import Image from "next/image";

export function HeroMedia() {
  return (
    <Image
      src="/images/home/hero-banner.webp"
      alt=""
      aria-hidden="true"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  );
}