"use client";

import { useState } from "react";
import { Menu, Search, ShoppingCart, CircleUser } from "lucide-react";
import { Container } from "./Container";
import { NavLinks } from "./NavLinks";
import { MobileDrawer } from "./MobileDrawer";
import { Logo } from "@/components/ui/Logo";

/**
 * Site header, per the design spec:
 * - Background: #FFFFFF at 55% opacity + backdrop blur — the hero
 *   gradient shows through as a frosted-glass surface.
 * - `fixed` at the top: the hero slides UNDERNEATH it.
 * - Link text is dark (maroon-950): white@55% renders a LIGHT surface,
 *   so light text would fail WCAG contrast.
 */
export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (

    <header className="fixed inset-x-0 top-5 z-30  flex justify-center">
      <div className="bg-white/55 shadow-sm backdrop-blur-md w-[95%] rounded-4xl flex justify-baseline">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden md:block" aria-label="Primary">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Search"
              className="rounded-full p-2 text-maroon-950 transition-colors hover:text-orange-600"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Cart"
              className="rounded-full p-2 text-maroon-950 transition-colors hover:text-orange-600"
            >
              <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Cart"
              className="rounded-full p-2 text-maroon-950 transition-colors hover:text-orange-600"
            >
              <CircleUser className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={isDrawerOpen}
              className="rounded-full p-2 text-maroon-950 md:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </Container>

        <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      </div>
    </header>
  );
}