export interface ClosingLetterContent {
  title: string;
  paragraphs: string[];
  signOff: string;
  signature: string;
  photo: { label: string; description: string };
}

export const closingLetterContent: ClosingLetterContent = {
  title: "Kenapa saya membuat workshop ini",
  paragraphs: [
    "Tiga tahun terakhir saya belajar bekerja bareng AI lewat coba-coba dan salah-salah. Cara kerja berlapis inilah yang membawa saya dari gelisah menjadi percaya diri.",
    "Saya tidak bisa menjamin masa depan pekerjaan siapa pun. Yang bisa kita kendalikan adalah cara kita bekerja. Orang yang mampu mengarahkan, menguji, dan mempertanggungjawabkan hasil AI akan jauh lebih sulit digantikan.",
  ],
  signOff: "Sampai ketemu di Zoom,",
  signature: "Stanislaus Billy",
  photo: {
    label: "FOTO · LANSKAP 3:2",
    description:
      "Kamu berbicara ke kamera, seperti sedang membuka sesi Zoom. Senyum santai, tangan sedang menjelaskan.",
  },
};
