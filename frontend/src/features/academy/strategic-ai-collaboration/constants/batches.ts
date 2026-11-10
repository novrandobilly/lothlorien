export type BatchStatus = "open" | "full" | "done";

export interface WorkshopBatch {
  id: string;
  code: string;
  date: string;
  shortDate: string;
  time: string;
  capacity: number;
  seatsLeft: number;
  price: string;
  originalPrice?: string;
  priceNote?: string;
  status: BatchStatus;
}

// Sample data until batches come from PocketBase.
// "Batch 00" only exists to show the past-batches row; hide that row until a real batch has finished.
export const workshopBatches: WorkshopBatch[] = [
  {
    id: "batch-01",
    code: "Batch 01",
    date: "Sabtu, 28 November 2026",
    shortDate: "28 Nov",
    time: "[JAM] WIB",
    capacity: 40,
    seatsLeft: 12,
    price: "Rp 99.000",
    originalPrice: "Rp 149.000",
    priceNote: "Early bird s.d. [TANGGAL]",
    status: "open",
  },
  {
    id: "batch-02",
    code: "Batch 02",
    date: "Sabtu, 19 Desember 2026",
    shortDate: "19 Des",
    time: "[JAM] WIB",
    capacity: 40,
    seatsLeft: 40,
    price: "Rp 99.000",
    originalPrice: "Rp 149.000",
    priceNote: "Early bird s.d. [TANGGAL]",
    status: "open",
  },
  {
    id: "batch-00",
    code: "Batch 00",
    date: "[TANGGAL]",
    shortDate: "[TANGGAL]",
    time: "[JAM] WIB",
    capacity: 40,
    seatsLeft: 0,
    price: "Rp 99.000",
    status: "done",
  },
];

export const openBatches = workshopBatches.filter((batch) => batch.status === "open");
export const pastBatches = workshopBatches.filter((batch) => batch.status === "done");
