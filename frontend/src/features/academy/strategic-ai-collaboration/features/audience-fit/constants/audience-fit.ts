export interface FitColumn {
  id: "fit" | "not-fit";
  title: string;
  items: string[];
}

export interface AudienceFitContent {
  columns: FitColumn[];
}

export const audienceFitContent: AudienceFitContent = {
  columns: [
    {
      id: "fit",
      title: "Cocok untuk kamu yang…",
      items: [
        "Khawatir pekerjaanmu tergantikan AI",
        "Sudah memakai AI, tapi sering ragu dengan hasilnya",
        "Baru mau mulai pakai AI, tanpa dasar apa pun",
        "Ingin cara kerja yang jelas, bukan kumpulan prompt",
      ],
    },
    {
      id: "not-fit",
      title: "Kurang cocok kalau kamu…",
      items: ["Mencari tutorial teknis membangun model atau coding AI", "Hanya ingin daftar prompt siap pakai"],
    },
  ],
};
