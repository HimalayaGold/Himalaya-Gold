"use client";

import { motion, type Variants } from "framer-motion";

/** Ease-out curve. Fast start, long settle - reads as confident rather than bouncy. */
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const line: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/**
 * Hero copy with a staggered rise on mount.
 * Client component so Hero.tsx can stay on the server.
 * Each headline line is a block span so the two lines stagger
 * independently while remaining inside the page's single h1.
 */
export function HeroText() {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <h1 className="font-display text-brick-500 text-4xl leading-tight md:text-5xl lg:text-6xl">
        <motion.span variants={line} className="block">
          Not just Rice.
        </motion.span>
        <motion.span variants={line} className="block">
          It&rsquo;s a golden experience.
        </motion.span>
      </h1>

      <motion.p
        variants={line}
        className="text-maroon-950/70 mt-6 max-w-md text-base md:text-lg"
      >
        Carefully sourced, perfectly aged, and crafted for those who value true
        quality.
      </motion.p>
    </motion.div>
  );
}