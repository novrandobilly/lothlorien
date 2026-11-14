export type BatchStatus = "open" | "closed";

export interface WorkshopBatch {
  id: string;
  code: string;
  date: string;
  shortDate: string;
  time: string;
  capacity: number;
  price: string;
  originalPrice?: string;
  priceNote?: string;
  // Mayar checkout link for this batch. Leave empty until the product is live: the CTA then shows as not yet open.
  paymentUrl: string;
  status: BatchStatus;
}

// Static data until batches come from PocketBase.
export const workshopBatches: WorkshopBatch[] = [
  {
    id: "batch-01",
    code: "Batch 01",
    date: "Sabtu, 28 November 2026",
    shortDate: "28 Nov",
    time: "09.00–12.00 WIB",
    capacity: 25,
    price: "Rp 149.000",
    paymentUrl: "",
    status: "open",
  },
];

export const openBatches = workshopBatches.filter((batch) => batch.status === "open");
