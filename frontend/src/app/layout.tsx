import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Envien Studio | Novrando Billy — Senior Frontend & UX Architect",
  description:
    "Official personal site and digital space of Novrando Billy (Envien Studio) — Senior Frontend Engineer & UX Architect.",
  icons: {
    icon: [
      { url: "/envienstudio-logo-black.svg", type: "image/svg+xml" },
    ],
    shortcut: "/envienstudio-logo-black.svg",
    apple: "/envienstudio-logo-black.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${cormorantGaramond.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#fafaf9] text-stone-900 font-sans antialiased selection:bg-amber-500/20 selection:text-amber-900"
        suppressHydrationWarning
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
