import type { Metadata } from "next";

export const SITE_URL = "https://envienstudio.com";
export const SITE_NAME = "Envien Studio";
export const SITE_TITLE = "Envien Studio | We listen your vision, we build together.";
export const SITE_DESCRIPTION =
  "Great products are never built from guesswork. When clarity leads the architecture, growth naturally follows.";
export const DEFAULT_OG_IMAGE = "https://envienstudio.com/og-hero.png";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [{ url: "/envienstudio-logo-black.svg", type: "image/svg+xml" }],
    shortcut: "/envienstudio-logo-black.svg",
    apple: "/envienstudio-logo-black.svg",
  },
};
