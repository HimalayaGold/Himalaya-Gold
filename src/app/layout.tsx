import type { Metadata } from "next";
import { Montserrat, Amita } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap", //This improves loading behavior. If the font hasn't loaded yet, the browser briefly uses a fallback font    and then swaps to the custom font, preventing invisible text.
});

const amita = Amita({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amita",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Himalaya Gold | Premium Rice",
  description: "Not Just Rice It's a Golden Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${amita.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream-50 text-maroon-950">
        {/* Header (and later Footer) live here so EVERY page gets them
            automatically — pages only render their own <main> content. */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
