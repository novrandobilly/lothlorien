import type { StaticImageData } from "next/image";
import closingLetterImg from "@/assets/academy/strategic-ai-collaboration/closing-letter.png";

export interface ClosingLetterContent {
  title: string;
  paragraphs: string[];
  signOff: string;
  signature: string;
  photo: { image: StaticImageData; alt: string };
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
    image: closingLetterImg,
    alt: "Stanislaus Billy menjelaskan sesuatu ke peserta lewat laptop, seperti sedang membuka sesi Zoom",
  },
};
