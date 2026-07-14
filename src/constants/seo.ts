import { SITE_CONFIG } from "@/constants/site";


export const SEO = {
  home: {
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    canonical: SITE_CONFIG.url,
    image: SITE_CONFIG.ogImage,
  },

  about: {
    title: "About Us",
    description:
      "Learn about Himalaya Gold Rice, our heritage, farming practices, and commitment to delivering premium quality rice.",
    keywords: [
      "About Himalaya Gold Rice",
      "Rice Company",
      "Premium Rice Brand",
    ],
    canonical: `${SITE_CONFIG.url}/about`,
    image: SITE_CONFIG.ogImage,
  },

  products: {
    title: "Our Products",
    description:
      "Browse our range of premium quality Minikit rice products, carefully selected to bring authentic taste to every meal.",
    keywords: [
      "Rice Products",
      "Buy Rice Online",
      "Premium Rice",
      "Minikit Rice",
    ],
    canonical: `${SITE_CONFIG.url}/products`,
    image: SITE_CONFIG.ogImage,
  },

  contact: {
    title: "Contact Us",
    description:
      "Get in touch with Himalaya Gold Rice for product enquiries, partnerships, and customer support.",
    keywords: [
      "Contact Himalaya Gold Rice",
      "Rice Supplier",
      "Customer Support",
    ],
    canonical: `${SITE_CONFIG.url}/contact`,
    image: SITE_CONFIG.ogImage,
  },

  privacy: {
    title: "Privacy Policy",
    description: "Read our privacy policy and understand how we collect and use your data.",
    canonical: `${SITE_CONFIG.url}/privacy-policy`,
  },

  terms: {
    title: "Terms & Conditions",
    description: "Read the terms and conditions of using the Himalaya Gold Rice website.",
    canonical: `${SITE_CONFIG.url}/terms-and-conditions`,
  },
} as const;