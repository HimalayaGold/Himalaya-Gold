import type { Metadata } from "next";
import { Montserrat, Amita } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
