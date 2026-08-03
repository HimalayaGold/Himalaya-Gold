import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { Container } from "./Container";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { CONTACT } from "@/constants/contact";


/** Brand glyphs as inline SVG — lucide's brand-icon exports vary by version. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 1 1-4.1 15.1l-.3-.18-3.1.89.9-3-.2-.31a8.1 8.1 0 0 1 6.8-12.5zm4.66 11.4c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12s-.64.8-.79.97c-.14.16-.29.18-.54.06a6.6 6.6 0 0 1-3.3-2.9c-.25-.43.25-.4.71-1.32.08-.16.04-.3-.02-.42s-.56-1.35-.77-1.85c-.2-.48-.4-.42-.56-.42h-.47a.9.9 0 0 0-.65.3 2.75 2.75 0 0 0-.86 2.05c0 1.2.88 2.37 1 2.53.13.17 1.73 2.64 4.2 3.7 1.56.68 2.17.73 2.95.62.47-.07 1.47-.6 1.68-1.19.2-.58.2-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

const SOCIAL_ICON_CLASS =
  "flex h-8 w-8 items-center justify-center rounded-full border border-cream-50/50 text-cream-50 transition-colors hover:border-gold-300 hover:text-gold-300";

/**
 * Site footer — appears on every page (rendered by the root layout).
 *
 * Layout per design:
 * - A background PHOTO (paddy field) fills the footer, with a maroon
 *   overlay on top so all text meets contrast requirements regardless of
 *   how busy the photo is. Never rely on the photo itself being dark.
 * - Thin orange accent rules at the top and bottom edges.
 * - Three columns: company logo + blurb | Useful Link | map, with the
 *   contact row and social icons stacked beneath the map.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t-2 border-b-2 border-orange-600">
      {/* Background photo (decorative) */}
      <Image
        src="/images/global/footer/footer-bg.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* Maroon overlay for text legibility */}
      {/* <div className="absolute inset-0 -z-10 bg-maroon-950/85" aria-hidden="true" /> */}

      <Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.2fr] lg:gap-12">
        {/* --- Column 1: company logo + blurb --- */}
        <div className="w-full flex flex-col items-center">
          <Image
            src="/images/global/footer/logo.png"
            alt={CONTACT.companyName}
            width={220}
            height={90}
            className="mx-auto h-20 w-auto lg:mx-0"
          />
          <p className="mt-5 text-sm leading-relaxed text-cream-50/75">
            {CONTACT.blurb}
          </p>
        </div>

        {/* --- Column 2: useful social --- */}
        <nav aria-label="Footer" className="text-center lg:text-left">
          <h2 className="text-lg font-semibold text-cream-50">Useful Link</h2>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream-50/75 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- Column 3: map + contact row + social --- */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="relative overflow-hidden rounded-lg">
            <iframe
              src={CONTACT.mapEmbedSrc}
              title={`Map showing ${CONTACT.companyName} location`}
              width="100%"
              height="150"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
            <div className="absolute inset-0 bg-maroon-950/45" aria-hidden="true" />
          </div>

          {/* Contact row beneath the map */}
          <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream-50/85">
            <li className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-300">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="hover:text-gold-300"
              >
                {CONTACT.phone}
              </a>
            </li>
          </ul>

          {/* Circular social icons */}
          <ul className="mt-4 flex gap-3 justify-center">
            <li>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (opens in a new tab)"
                className={SOCIAL_ICON_CLASS}
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a
                href={SITE_CONFIG.social.whatsapp ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp (opens in a new tab)"
                className={SOCIAL_ICON_CLASS}
              >
                <WhatsappIcon className="h-4 w-4" />
              </a>
            </li>
            <li>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook (opens in a new tab)"
                className={SOCIAL_ICON_CLASS}
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-cream-50/15 bg-maroon-950/85">
        <Container className="py-4 text-center text-xs text-cream-50/60 ">
          © {year} {CONTACT.companyName}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}