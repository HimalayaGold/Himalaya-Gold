import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { SocialCard } from "./SocialCard";
import { SOCIAL_POSTS } from "./data";

/**
 * "Check the socials" — Instagram-style gallery.
 *
 * Layout (matches design exactly):
 * - Full-BLEED brand gradient band (dark maroon -> orange), spanning the
 *   entire viewport width, with generous vertical padding.
 * - White centered heading floating on the gradient, above the card.
 * - A white rounded card, horizontally inset from the viewport edges so
 *   the gradient stays visible on all four sides of it.
 * - Four portrait tiles inside the card with white padding around/between.
 *
 * The <section> itself is the full-width gradient. The <Container> inside
 * constrains ONLY the card's max width, leaving gradient margin around it.
 */
export function SocialGallery() {
  return (
    <section
      id="socials"
      aria-labelledby="socials-heading"
      className="bg-brand-gradient w-full py-16 sm:py-20 lg:py-24"
    >
      <SectionHeading tone="light" className="mb-10 sm:mb-14">
        <span id="socials-heading">Check the socials</span>
      </SectionHeading>

      <Container>
        {/* White floating card holding the tiles */}
        <div className="rounded-[2rem] bg-white p-4 shadow-2xl sm:p-6 lg:p-12">
          <ul className="grid grid-cols-2 md:gap-4 gap-5 lg:grid-cols-4 lg:gap-8">
            {SOCIAL_POSTS.map((post, index) => (
              <SocialCard key={post.id} post={post} index={index} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}