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
    "Bukan menghafal template prompt. Kamu bawa satu tugas dari pekerjaanmu, lalu kita selesaikan bersama lewat empat langkah.",
  steps: [
    {
      number: "1",
      title: "Petakan kerjaanmu",
      description:
        "Tentukan tujuan dan standar “berhasil”, lalu pilah langkah mana yang kamu pegang, kolaborasikan, dan delegasikan.",
    },
    {
      number: "2",
      title: "Brief AI seperti rekan kerja",
      description:
        "Susun satu brief berisi target hasil, konteks, alur kerja, dan sikap AI, supaya jawabannya berhenti muter-muter.",
    },
    {
      number: "3",
      title: "Uji hasilnya",
      description:
        "Periksa fakta dan logikanya, minta AI membantah dirinya sendiri, lalu beri koreksi yang terarah.",
    },
    {
      number: "4",
      title: "Jadikan milikmu",
      description:
        "Pahami isinya sampai bisa kamu jelaskan tanpa melihat layar, jaga data sensitif, dan siap mempertanggungjawabkannya.",
    },
  ],
  takeaway: {
    eyebrow: "Yang kamu bawa pulang",
    headline: "Satu kerjaan nyata yang selesai bareng AI, dan Peta Personal untuk Senin pagi.",
    extras: [
      { label: "Rekaman sesi", text: "untuk diputar ulang" },
      { label: "Handout:", text: "cheat sheet 4 lapisan & template Peta Personal" },
      { label: "Check-in 2 minggu", text: "setelah sesi" },
    ],
  },
};
