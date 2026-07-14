"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProcessStep } from "@/types/process";

interface ProcessCardProps {
  step: ProcessStep;
  /** Position in the list — drives the staggered entrance delay. */
  index: number;
}

export function ProcessCard({ step, index }: ProcessCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 * index }}
      className="group relative aspect-2/3 overflow-hidden rounded-2xl shadow-md"
    >
      <Image
        src={step.image}
        alt={step.imageAlt}
        fill
        sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Bottom scrim for text legibility */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-maroon-950/85 to-transparent"
        aria-hidden="true"
      />

      <h3 className="absolute inset-x-0 bottom-0 p-4 text-center text-sm md:text-4xl font-semibold text-cream-50 sm:text-base">
        {step.title}
      </h3>
    </motion.li>
  );
}