export interface EnrollmentContent {
  title: string;
  pickerLabel: string;
  pastLabel: string;
  pastStatus: string;
  notifyLead: string;
  notifyLinkLabel: string;
  notifyHref: string;
  formEyebrow: string;
  fields: { name: string; email: string; phone: string; phonePrefix: string };
  submitPrefix: string;
  footnote: string;
  dummyNotice: string;
}

export const enrollmentContent: EnrollmentContent = {
  title: "Pilih tanggalmu",
  pickerLabel: "Pilih batch workshop",
  pastLabel: "Batch sebelumnya",
  pastStatus: "Selesai · kursi penuh",
  notifyLead: "Tanggalnya belum cocok?",
  notifyLinkLabel: "Kabari saya saat batch baru dibuka",
  notifyHref: "#",
  formEyebrow: "Kamu mendaftar untuk",
  fields: { name: "Nama lengkap", email: "Email", phone: "Nomor WhatsApp", phonePrefix: "+62" },
  submitPrefix: "Daftar",
  footnote: "Setelah ini kamu diarahkan ke pembayaran Mayar. Konfirmasi dikirim ke email.",
  dummyNotice: "Ini halaman contoh. Pembayaran Mayar belum tersambung.",
};
