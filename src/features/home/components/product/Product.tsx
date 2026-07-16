"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SHOWCASE_PRODUCTS } from "@/features/home/components/product/data";

/**
 * Visual treatment per showcase slot (matches the design):
 * slot 0 = featured: big, slight tilt, full opacity, in front.
 * slots 1..n step down in size and fade progressively.
 */
const SLOT_STYLES = [
  { scale: 1, rotate: -8, opacity: 1, zIndex: 30 },
  { scale: 0.72, rotate: 0, opacity: 0.7, zIndex: 20 },
  { scale: 0.55, rotate: 0, opacity: 0.5, zIndex: 10 },
];

/**
 * "Products" showcase section.
 *
 * State: `activeId` — which product is featured.
 * - Packets are <button>s; clicking one promotes it to the featured slot.
 * - layoutId lets Framer Motion GLIDE each packet between slots instead
 *   of teleporting (shared layout animation).
 * - The text column is keyed by the active product and swapped through
 *   AnimatePresence, so name/description animate out and in together.
 * - aria-pressed marks the featured packet; the text region is
 *   aria-live so screen readers hear the change.
 */
export function Product() {
  const [activeId, setActiveId] = useState(SHOWCASE_PRODUCTS[0].id);

  const active = SHOWCASE_PRODUCTS.find((p) => p.id === activeId) ?? SHOWCASE_PRODUCTS[0];
  // Featured first, remaining products keep their data order after it.
  const ordered = [active, ...SHOWCASE_PRODUCTS.filter((p) => p.id !== active.id)];

  return (
    <section
      aria-labelledby="products-heading"
      className="relative overflow-hidden bg-[#FFF0AE]"
    >
      {/* Faint line-art pattern across the whole section (decorative) */}
      <Image
        src="/images/home/products-pattern.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="30vw"
        className="object-cover opacity-60"
      />

      {/* Circular paddy illustration, right side (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden aspect-square w-[34rem] -translate-y-1/2 lg:block xl:w-[40rem]"
      >
        <Image
          src="/images/home/paddy-circle.webp"
          alt=""
          fill
          sizes="40rem"
          className="object-contain"
        />
      </div>

      <Container className="relative z-10 grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
        {/* ---- Text column (animates per active product) ---- */}
        <div>
          <SectionHeading align="left" className="mb-6 sm:mb-8">
            <span id="products-heading">Products</span>
          </SectionHeading>

          {/* min-h reserves space so the section doesn't jump between
              short and long descriptions during the swap */}
          <div aria-live="polite" className="min-h-[16rem] sm:min-h-[14rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="text-lg font-bold tracking-wide text-maroon-950 uppercase sm:text-xl">
                  {active.name}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-maroon-950/80 sm:text-base">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <Button href={active.buyHref} variant="primary" size="lg" className="mt-6">
            Buy Now
          </Button>
        </div>

        {/* ---- Packet showcase ---- */}
        <ul className="flex items-center justify-center gap-2 sm:gap-4 lg:justify-start">
          {ordered.map((product, slot) => {
            const style = SLOT_STYLES[slot] ?? SLOT_STYLES[SLOT_STYLES.length - 1];
            const isFeatured = slot === 0;

            return (
              <li key={product.id} style={{ zIndex: style.zIndex }} className="relative">
                <motion.button
                  layoutId={product.id}
                  type="button"
                  onClick={() => setActiveId(product.id)}
                  aria-pressed={isFeatured}
                  aria-label={`Show ${product.name}`}
                  animate={{
                    scale: style.scale,
                    rotate: style.rotate,
                    opacity: style.opacity,
                  }}
                  whileHover={isFeatured ? undefined : { scale: style.scale + 0.05, opacity: 0.9 }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className="relative block aspect-[3/4] w-32 cursor-pointer sm:w-40 lg:w-52 xl:w-60"
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 240px, (min-width: 1024px) 208px, 160px"
                    className="object-contain drop-shadow-xl"
                  />
                </motion.button>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}