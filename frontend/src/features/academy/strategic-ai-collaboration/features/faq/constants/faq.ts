export interface SalesFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SalesFaqContent {
  title: string;
  items: SalesFaqItem[];
}

export const salesFaqContent: SalesFaqContent = {
  title: "Pertanyaan yang sering muncul",
  items: [
    {
      id: "non-technical",
      question: "Saya bukan orang teknis. Bisa ikut?",
      answer: "Bisa. Fokusnya cara berpikir dan bekerja bersama AI, bukan teknologinya.",
    },
    {
      id: "which-ai",
      question: "Aplikasi AI apa yang dipakai?",
      answer: "Yang biasa kamu pakai. Cara kerjanya berlaku di aplikasi AI chat mana pun.",
    },
    {
      id: "cant-attend",
      question: "Kalau nggak bisa hadir live?",
      answer:
        "Rekaman dikirim setelah sesi. Tapi manfaat terbesarnya ada di latihan langsung, jadi pilih batch yang bisa kamu hadiri.",
    },
    {
      id: "zoom-link",
      question: "Kapan link Zoom dikirim?",
      answer: "[KAPAN & LEWAT MANA: email / WhatsApp]",
    },
    {
      id: "move-refund",
      question: "Bisa pindah batch atau refund?",
      answer: "[KEBIJAKAN PINDAH BATCH & REFUND]",
    },
  ],
};
