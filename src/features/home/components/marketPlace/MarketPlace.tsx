import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { MARKETPLACES } from "./data";


/**
 * "Available on" strip — the gradient pill bar from the design.
 *
 * Layout note: the bar STRADDLES the boundary between the Products
 * section (butter yellow) above and the section below. The negative
 * top margin pulls it up so it overlaps that seam, and `relative z-10`
 * keeps it painted above both. That's what creates the floating look.
 *
 * Server component: pure markup, zero JS.
 * Each pill is an external link hardened with noopener/noreferrer.
 */
export function MarketPlace() {
  return (
    <Container
      as="section"
      aria-label="Where to buy"
      className="relative z-10 -mt-8 mb-10 sm:-mt-10 sm:mb-14"
    >
      <div className="bg-brand-gradient flex flex-col items-center gap-4 rounded-3xl px-6 py-5 shadow-xl sm:flex-row sm:justify-center sm:gap-8 sm:rounded-full sm:px-10">
        <p className="text-base font-semibold text-white sm:text-lg">Available on</p>

        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {MARKETPLACES.map((market) => (
            <li key={market.id}>
              <a
                href={market.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buy on ${market.name} (opens in a new tab)`}
                className="flex h-10 w-28 items-center justify-center rounded-full bg-white px-4 shadow-sm transition-transform duration-200 hover:scale-105 sm:w-32"
              >
                <Image
                  src={market.image}
                  alt={market.name}
                  width={140}
                  height={40}
                  className="h-5 w-auto object-cover sm:h-6"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}