export interface Product {
  id: string;
  /** Display name, e.g. "Premium Minikit Rice". */
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Where "Buy Now" leads (product page or marketplace). */
  buyHref: string;
}