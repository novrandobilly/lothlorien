export interface HeroContent {
  infoStrip: string[];
  infoStripCompact: string;
  titleLines: [string, string];
  subtitleLead: string;
  subtitleQuestion: string;
  paragraphs: string[];
  highlight: string;
  primaryCta: string;
  secondaryCta: string;
  portrait: { label: string; description: string };
}

export const heroContent: HeroContent = {
  infoStrip: [
    "Workshop online · 3 jam via Zoom",
    "Sabtu, 28 November 2026 · 09.00–12.00 WIB",
    "Rp 149.000 · Maks. 25 kursi",
  ],
  infoStripCompact: "Sab, 28 Nov · Zoom 3 jam · Rp 149.000",
  titleLines: ["Kerja bareng AI,", "siapa takut"],
  subtitleLead: "Untuk kamu yang diam-diam bertanya,",
  subtitleQuestion: "“Apakah saya akan tergantikan AI?”",
  paragraphs: [
    "Di workshop 3 jam ini, kamu menyelesaikan {highlight} bareng AI, dan pulang membawa Peta Personal: bagian kerja yang kamu pegang, kamu kolaborasikan, dan kamu delegasikan.",
  ],
  highlight: "satu kerjaan nyatamu",
  primaryCta: "Daftar sekarang",
  secondaryCta: "Baca suratnya dulu",
  portrait: {
    label: "FOTO · POTRET 4:5",
    description:
      "Kamu di meja kerja, menatap kamera, laptop terbuka. Cahaya alami dari samping, latar ruang kerjamu sendiri.",
  },
};
