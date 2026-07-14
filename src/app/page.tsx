import { Hero } from "@/features/home/components/hero-section/Hero";
import { Process } from "@/features/home/components/process/Process";

/**
 * Home page renders ONLY its sections — Navbar/Footer come from the
 * root layout and appear on every page automatically.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Process />
    </>
  )
}