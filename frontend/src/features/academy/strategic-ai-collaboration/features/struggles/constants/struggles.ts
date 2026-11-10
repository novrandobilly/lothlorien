export interface CognitiveTrap {
  name: string;
  meaning: string;
}

export interface StrugglesContent {
  title: string;
  situations: string[];
  opening: string;
  trapsIntro: string;
  traps: CognitiveTrap[];
  pullQuote: { text: string; emphasis: string };
  bridge: string;
}

export const strugglesContent: StrugglesContent = {
  title: "Pernah ngalamin salah satu dari ini?",
  situations: [
    "“Kok jawaban AI-nya muter-muter terus, nggak nyambung?”",
    "“Ini jawabannya beneran bagus, atau cuma kelihatan bagus ya?”",
    "“Wah panjang jawabannya, pake dulu aja deh, nanti dibaca detailnya.”",
    "“Kalau semuanya bisa dikerjain AI, terus aku ngapain?”",
    "“Semua orang kayaknya udah jago AI, aku bingung mulai dari mana.”",
  ],
  opening: "Kalau iya, kamu nggak sendirian. Saya juga pernah di sana, bahkan sering.",
  trapsIntro:
    "Masalahnya ternyata bukan AI-nya. Justru karena AI sering benar, kita berhenti memeriksa. Ada tiga jebakan yang bekerja diam-diam:",
  traps: [
    { name: "fluency bias", meaning: "jawaban yang rapi terasa pasti benar" },
    { name: "sycophancy", meaning: "AI cenderung menyetujui kita" },
    { name: "utang pemahaman", meaning: "memakai hasil yang tidak benar-benar kita mengerti" },
  ],
  pullQuote: {
    text: "Bahaya terbesarnya bukan AI yang bodoh, tapi AI yang cukup bagus untuk membuat kita",
    emphasis: "lengah",
  },
  bridge:
    "Jadi pertanyaannya bukan “bagaimana supaya AI tidak salah”, tapi “bagaimana bekerja dengan AI yang membuat kita makin tajam, bukan makin tumpul?” Biar saya tunjukkan bedanya.",
};
