import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import {
  CERTIFICATIONS,
  CERTIFICATIONS_VISIBLE_COUNT,
} from "@/features/home/components/certification/data";

/**
 * "6 visible at a time": with only 3 unique logos today, the base list
 * is repeated until one marquee half contains at least 6 items.
 * When more logos are added, the repeat count shrinks automatically.
 */
export function Certifications() {
  const repeatCount = Math.max(
    1,
    Math.ceil(CERTIFICATIONS_VISIBLE_COUNT / CERTIFICATIONS.length)
  );

  // e.g. [iso, fssai, veg, iso, fssai, veg] — one marquee half.
  const trackItems = Array.from({ length: repeatCount }).flatMap((_, repeatIndex) =>
    CERTIFICATIONS.map((cert) => ({
      ...cert,
      key: `${cert.id}-${repeatIndex}`,
    }))
  );

  return (
    <section aria-label="Our certifications" className="bg-white py-6 shadow-sm sm:py-8">
      <Marquee durationSeconds={28}>
        {trackItems.map((cert) => (
          <div
            key={cert.key}
            className="flex w-36 shrink-0 items-center justify-center px-4 sm:w-44 lg:w-52"
          >
            <Image
              src={cert.image}
              alt={cert.name}
              width={200}
              height={100}
              className="md:h-22 w-auto object-contain h-14"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}