export interface WorkshopStep {
  number: string;
  title: string;
  description: string;
}

export interface WorkshopStepsContent {
  title: string;
  intro: string;
  steps: WorkshopStep[];
  takeaway: { eyebrow: string; headline: string; extras: { label: string; text: string }[] };
}

export const workshopStepsContent: WorkshopStepsContent = {
  title: "Tiga jam, satu kerjaan nyatamu.",
  intro:
    "Bukan menghafal template prompt. Kamu bawa satu tugas dari pekerjaanmu, lalu kita kerjakan bersama lewat 4 Lapisan Kerja Bareng AI.",
  steps: [
    {
      number: "1",
      title: "Foundation",
      description: "Tentukan tujuan, standar \u201cberhasil\u201d, dan bagian kerja yang kamu pegang.",
    },
    {
      number: "2",
      title: "Processing",
      description: "Brief AI seperti rekan kerja: target hasil, konteks, dan alur kerja.",
    },
    {
      number: "3",
      title: "Verification",
      description: "Uji fakta dan tantang logika AI, terutama jawaban yang terdengar paling meyakinkan.",
    },
    {
      number: "4",
      title: "Governance",
      description: "Pahami isinya, jaga data, dan siap mempertanggungjawabkan hasilnya.",
    },
  ],
  takeaway: {
    eyebrow: "Yang kamu bawa pulang",
    headline: "Satu kerjaan nyata yang selesai bareng AI, dan Peta Personal untuk kerjaanmu selanjutnya.",
    extras: [
      { label: "Cheat sheet", text: "4 lapisan" },
      { label: "Rekaman sesi", text: "untuk diputar ulang" },
    ],
  },
};
