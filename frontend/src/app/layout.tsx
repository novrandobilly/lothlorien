import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Envien Studio",
  description: "Official personal site and digital space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={plusJakartaSans.variable}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900"
        suppressHydrationWarning
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
