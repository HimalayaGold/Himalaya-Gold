import type { Product } from "@/types/product";

/**
 * Products for the home showcase, in default display order.
 * The first entry is featured on load.
 */
export const SHOWCASE_PRODUCTS: Product[] = [
  {
    id: "miniket",
    name: "Premium Minikit Rice",
    description:
      "Premium Minikit Rice is a high-quality, fine-grain rice known for its soft texture, pleasant aroma, and consistent cooking performance. Carefully processed to retain its natural nutrients, it delivers fluffy, non-sticky grains that are ideal for everyday meals as well as special dishes. Its superior purity and taste make it a preferred choice for households seeking both quality and value.",
    image: "/images/home/pack-miniket.webp",
    imageAlt: "Himalaya Gold Premium Miniket rice pack",
    buyHref: "/products/miniket",
  },
  {
    id: "banskathi",
    name: "Banskathi Superior Rice",
    description:
      "Banskathi Superior Rice offers long, slender grains with a delicate aroma and light, fluffy texture when cooked. Aged carefully for consistency, it suits everyday family meals and festive cooking alike, holding its shape beautifully in biryani, pulao, and steamed preparations.",
    image: "/images/home/pack-banskathi.webp",
    imageAlt: "Himalaya Gold Banskathi Superior rice pack",
    buyHref: "/products/banskathi",
  },
  {
    id: "jeerakathi",
    name: "Jeerakathi Premium Rice",
    description:
      "Jeerakathi Premium Rice is a fragrant, small-grain variety prized for its naturally rich aroma and soft bite. Its quick, even cooking and distinctive flavour make it a favourite for traditional recipes, everyday rice dishes, and aromatic specialties.",
    image: "/images/home/pack-jeerakathi.webp",
    imageAlt: "Himalaya Gold Jeerakathi Premium rice pack",
    buyHref: "/products/jeerakathi",
  },
];