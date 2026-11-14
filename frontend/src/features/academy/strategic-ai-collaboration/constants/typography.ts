import { Newsreader, Public_Sans } from "next/font/google";

// Fonts for the sales page only. The rest of the site keeps the root layout fonts.
export const letterFont = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-letter",
  display: "swap",
});

export const uiFont = Public_Sans({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

// Class shortcuts so leaves don't repeat the arbitrary font-family syntax.
export const SERIF = "font-[family-name:var(--font-letter)]";
export const SANS = "font-[family-name:var(--font-ui)]";
