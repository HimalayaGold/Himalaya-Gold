"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG } from "@/constants/site";
import { HeroMedia } from "./HeroMedia";
import { HeroText } from "./HeroText";

export function Hero() {
  return (
    <section aria-label="Introduction" className="bg-brand-gradient relative overflow-hidden min-h-screen w-full">
      <HeroMedia />
      {/* <Container className="relative z-10 flex min-h-[460px] items-center pt-28 pb-14 sm:min-h-[520px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-md lg:max-w-lg"
        >
          <h1 className="text-3xl leading-snug font-semibold text-gold-300 sm:text-4xl lg:text-[2.75rem]">
            Not just Rice.
            <br />
            It&apos;s a golden experience.
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/85 sm:text-base">
            {SITE_CONFIG.description}
          </p>
        </motion.div>
      </Container> */}
      <HeroText />
    </section>
  );
}