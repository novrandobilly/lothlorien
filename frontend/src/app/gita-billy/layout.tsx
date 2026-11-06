import type { Metadata, Viewport } from "next";
import { Great_Vibes, Cinzel } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF6F0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "The Wedding of Billy & Gita | Official Invitation",
  description:
    "We cordially invite you to celebrate the Holy Matrimony and Wedding Reception of Novrando Billy & Gita.",
  openGraph: {
    title: "The Wedding of Billy & Gita",
    description: "Official wedding invitation of Billy & Gita — Saturday, 05 December 2026",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "The Wedding of Billy & Gita",
      },
    ],
  },
};

export default function WeddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${greatVibes.variable} ${cinzel.variable} font-sans min-h-screen bg-[#FAF6EE] text-[#2C2523] selection:bg-[#C5A059]/20 selection:text-[#8C6D36]`}
    >
      {children}
    </div>
  );
}
