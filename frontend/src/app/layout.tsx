import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
      className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} dark`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#090b10] text-[#f5f2eb] font-sans antialiased selection:bg-amber-400/20 selection:text-amber-200"
        suppressHydrationWarning
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
