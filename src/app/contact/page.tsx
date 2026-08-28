import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/ui/PageBanner";
import { GetInTouchCard } from "@/features/contact/components/GetInTouchCard";
import { ContactForm } from "@/features/contact/components/ContactForm";

/**
 * Page-level metadata. Next merges this with the root layout's defaults,
 * and the title slots into the layout's template ("%s | Himalaya Gold Rice").
 */
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions or need more information? Get in touch with the Himalaya Gold Rice team.",
};

export default function ContactPage() {
  return (
    <>
      {/* Extra bottom padding so the form card can overlap the banner */}
      <PageBanner
        title="Contact Us"
        subtitle="Have questions or need more information? We'd love to hear from you. Get in touch with us today!"
        className="pb-24 sm:pb-32"
      />

      {/* -mt pulls the cards up INTO the banner, as in the design */}
      <Container className="relative z-10 -mt-20 grid gap-8 pb-16 sm:-mt-28 lg:grid-cols-2 lg:items-start lg:gap-10">
        <div className="lg:mt-16">
          <GetInTouchCard />
        </div>
        <ContactForm />
      </Container>
    </>
  );
}