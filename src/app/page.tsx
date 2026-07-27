import { Certifications } from "@/features/home/components/certification/Certification";
import { Hero } from "@/features/home/components/hero-section/Hero";
import { Process } from "@/features/home/components/process/Process";
import { Product } from "@/features/home/components/product/Product";
import { SocialGallery } from "@/features/home/components/socialGallery/SocialGallery";
import { Testimonials } from "@/features/home/components/testimonial/Testimonials";

/**
 * Home page renders ONLY its sections — Navbar/Footer come from the
 * root layout and appear on every page automatically.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Certifications />
      <Product />
      <Testimonials />
      <SocialGallery />
    </>
  )
}