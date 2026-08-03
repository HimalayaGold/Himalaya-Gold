/**
 * ============================================================================
 * Site Configuration
 * ============================================================================
 * Central place for all brand, company and website related information.
 * Update this file whenever the business details change.
 * ============================================================================
 */

export const SITE_CONFIG = {
  // ---------------------------------------------------------------------------
  // Brand
  // ---------------------------------------------------------------------------

  name: "Himalaya Gold Rice",
  shortName: "Himalaya Gold",

  tagline: "Not just Rice. It's a golden experience.",

  description:
    "Premium Minikit rice grown with care in the foothills of the Himalayas. Every grain is cultivated, harvested and processed with excellence to deliver an authentic dining experience.",

  keywords: [
    "Himalaya Gold Rice",
    "Premium Rice",
    "Minikit Rice",
    "Rice Brand",
    "Rice Online",
    "Best Rice in India",
  ],

  companyName: "Himalaya Gold Rice",

  // ---------------------------------------------------------------------------
  // Website
  // ---------------------------------------------------------------------------

  url: "https://www.himalayagoldrice.com",

  domain: "himalayagoldrice.com",

  language: "en-IN",

  locale: "en_IN",

  // ---------------------------------------------------------------------------
  // SEO
  // ---------------------------------------------------------------------------

  defaultTitle: "Himalaya Gold Rice | Premium Minikit Rice",

  titleTemplate: "%s | Himalaya Gold Rice",

  defaultDescription:
    "Buy premium quality Minikit rice online. Freshly harvested, naturally processed and delivered from farm to your table.",

  defaultKeywords: [
    "Himalaya Gold Rice",
    "Premium Rice",
    "Minikit Rice",
    "Rice Brand",
    "Rice Online",
    "Best Rice in India",
  ],

  robots: {
    index: true,
    follow: true,
  },

  // ---------------------------------------------------------------------------
  // Images
  // ---------------------------------------------------------------------------

  favicon: "/favicon.ico",

  logo: "/images/logo/logo.svg",

  logoDark: "/images/logo/logo-dark.svg",

  ogImage: "/images/seo/og-image.jpg",

  twitterImage: "/images/seo/twitter-image.jpg",

  // ---------------------------------------------------------------------------
  // Contact
  // ---------------------------------------------------------------------------

  email: "info@himalayagoldrice.com",

  supportEmail: "support@himalayagoldrice.com",

  phone: "+91 XXXXXXXXXX",

  whatsapp: "+91 XXXXXXXXXX",

  address: {
    line1: "",
    city: "",
    state: "West Bengal",
    country: "India",
    postalCode: "",
  },

  // ---------------------------------------------------------------------------
  // Social Media
  // ---------------------------------------------------------------------------

  social: {
    facebook: "",

    instagram: "",

    youtube: "",

    linkedin: "",

    twitter: "",

    whatsapp: "",
  },

  // ---------------------------------------------------------------------------
  // Ecommerce
  // ---------------------------------------------------------------------------

  currency: "INR",

  currencySymbol: "₹",

  country: "India",

  // ---------------------------------------------------------------------------
  // Copyright
  // ---------------------------------------------------------------------------

  copyright: `© ${new Date().getFullYear()} Himalaya Gold Rice. All rights reserved.`,
} as const;