import type { Metadata } from "next";
import { StrategicAiCollaborationPageFeature } from "@/features/academy/strategic-ai-collaboration";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/constants/metadata";

const PAGE_PATH = "/academy/strategic-ai-collaboration";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TITLE = "Kerja Bareng AI, Siapa Takut? | Envien Studio Academy";
const DESCRIPTION =
  "Workshop online 3 jam: selesaikan satu kerjaan nyatamu bareng AI dan pulang membawa Peta Personal. Oleh Stanislaus Billy, founder Envien Studio.";

// Own canonical and share preview, so links shared in WhatsApp or Threads show the workshop instead of the homepage.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function StrategicAiCollaborationPage() {
  return <StrategicAiCollaborationPageFeature />;
}
