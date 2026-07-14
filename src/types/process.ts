export interface ProcessStep {
  /** Stable identifier — used as the React key. */
  id: string;
  title: string;
  image: string;
  /** Alt text describing the photo (a11y + SEO). */
  imageAlt: string;
}