export interface HeroContent {
  infoStrip: string[];
  infoStripCompact: string;
  titleLines: [string, string];
  subtitle: string;
  paragraphs: string[];
  highlight: string;
  primaryCta: string;
  secondaryCta: string;
  portrait: { label: string; description: string };
  signatureName: string;
  signatureRole: string;
}

export const heroContent: HeroContent = {
  infoStrip: [
    "Workshop online · 3 jam via Zoom",
    "Sabtu, 28 November 2026 · [JAM] WIB",
    "Rp 99.000 · Maks. [40] kursi",
  ],
  infoStripCompact: "Sab, 28 Nov · Zoom 3 jam · Rp 99.000",
  titleLines: ["Kerja bareng AI,", "siapa takut"],
  subtitle: "Untuk kamu yang diam-diam bertanya, “apakah saya akan tergantikan AI?”",
  paragraphs: [
    "Di workshop 3 jam ini, kamu menyelesaikan {highlight} bareng AI, dan pulang membawa Peta Personal: bagian kerja yang kamu pegang, kamu kolaborasikan, dan kamu delegasikan.",
  ],
  highlight: "satu kerjaan nyatamu",
  primaryCta: "Pilih tanggal & daftar",
  secondaryCta: "Baca suratnya dulu",
  portrait: {
    label: "FOTO · POTRET 4:5",
    description:
      "Kamu di meja kerja, menatap kamera, laptop terbuka. Cahaya alami dari samping, latar ruang kerjamu sendiri.",
  },
  signatureName: "Envien",
  signatureRole: "Front-end engineer · Envien Studio",
};
