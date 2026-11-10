export interface FitColumn {
  id: "fit" | "not-fit";
  title: string;
  items: string[];
}

export interface AudienceFitContent {
  columns: FitColumn[];
  bringLabel: string;
  bringText: string;
}

export const audienceFitContent: AudienceFitContent = {
  columns: [
    {
      id: "fit",
      title: "Cocok untuk kamu yang…",
      items: [
        "Sudah memakai AI, tapi sering ragu dengan hasilnya",
        "Khawatir pekerjaanmu tergantikan AI",
        "Ingin cara kerja yang jelas, bukan kumpulan prompt",
      ],
    },
    {
      id: "not-fit",
      title: "Kurang cocok kalau kamu…",
      items: ["Mencari tutorial teknis membangun model atau coding AI", "Hanya ingin daftar prompt siap pakai"],
    },
  ],
  bringLabel: "Yang perlu dibawa:",
  bringText: "laptop, satu tugas nyata dari pekerjaanmu, dan aplikasi AI chat yang biasa kamu pakai.",
};
