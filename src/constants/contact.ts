/**
 * Company contact details + map. Centralized so the footer (and a future
 * Contact page) read from one source. Replace with real brand details.
 */
export const CONTACT = {
  /** Parent company shown in the footer logo lockup. */
  companyName: "Ma Lakshmianna Agro Products Pvt Ltd",
  blurb:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
  address: "Kolkata, West Bengal, India",
  phone: "+91 98765 43210",
  email: "hello@himalayagoldrice.com",
  /** Google Maps embed URL (Share -> Embed a map -> copy the iframe src). */
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117916.8121269197!2d88.21340031361443!3d22.545404268724308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027768255a1adb%3A0x954553ae73241842!2sSANDHYA%20FOOD%20CARE!5e0!3m2!1sen!2sin!4v1785652241906!5m2!1sen!2sin",
} as const;