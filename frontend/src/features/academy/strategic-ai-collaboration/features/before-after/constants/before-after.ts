export interface BriefLine {
  label: string;
  text: string;
}

export interface ChatExample {
  id: "before" | "after";
  eyebrow: string;
  prompt?: string;
  brief?: BriefLine[];
  reply: string[];
  replyMuted?: string;
  note: string;
  noteTerm?: string;
}

export interface BeforeAfterContent {
  title: string;
  intro: string;
  examples: ChatExample[];
}

// Mock conversation. Replace with a real transcript of the same task on both sides.
export const beforeAfterContent: BeforeAfterContent = {
  title: "Bedanya bukan di AI-nya, tapi di cara kita bicara dengannya.",
  intro:
    "Tugasnya sama: laporan bulanan tim. Di kiri, cara yang dulu saya pakai setiap hari. Di kanan, cara yang kamu latih di workshop.",
  examples: [
    {
      id: "before",
      eyebrow: "Sebelum · satu kalimat",
      prompt: "Tolong buatin laporan bulanan tim marketing.",
      reply: [
        "Tentu! Berikut laporan bulanan tim marketing:",
        "**1. Ringkasan Eksekutif.** Bulan ini tim marketing menunjukkan kinerja yang solid dengan peningkatan engagement di berbagai kanal…",
        "**2. Pencapaian Utama.** Kampanye berjalan sesuai rencana dan berhasil meningkatkan brand awareness secara signifikan…",
      ],
      replyMuted: "3. Tantangan · 4. Rekomendasi · 5. Kesimpulan",
      note: "Rapi, panjang, terdengar meyakinkan. Tapi angka dan konteksnya dari mana? Ini yang saya sebut",
      noteTerm: "fluency bias",
    },
    {
      id: "after",
      eyebrow: "Sesudah · Operational Brief",
      brief: [
        { label: "Target hasil.", text: "1 halaman untuk Head of Marketing, poin-poin, tanpa jargon." },
        { label: "Konteks.", text: "Data kampanye Oktober terlampir. Target bulan ini 1.200 leads." },
        { label: "Alur.", text: "Buat kerangkanya dulu, tunggu persetujuan saya." },
        { label: "Sikap.", text: "Jadilah editor yang kritis. Tanyakan dulu yang belum jelas." },
      ],
      reply: [
        "Sebelum saya susun kerangkanya, ada tiga hal yang perlu saya pastikan:",
        "1. Apakah 1.200 leads itu target total, atau per kanal?",
        "2. Apakah Head of Marketing ingin melihat biaya per lead?",
        "3. Ada kanal yang sengaja tidak ingin dibahas?",
      ],
      note: "AI-nya sama. Bedanya, sekarang dia bertanya balik, dan kamu yang memegang kendali.",
    },
  ],
};
