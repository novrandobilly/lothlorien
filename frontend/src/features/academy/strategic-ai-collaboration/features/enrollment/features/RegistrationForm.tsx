"use client";

import React from "react";
import { useToast } from "@/context/ToastContext";
import { SERIF, WorkshopBatch } from "../../../constants";
import { EnrollmentContent } from "../constants";

interface RegistrationFormProps {
  batch: WorkshopBatch;
  content: EnrollmentContent;
}

const inputClass =
  "min-h-[50px] w-full rounded border border-[#B9B0A4] bg-white px-3.5 text-base text-[#16130F] outline-none transition-colors focus:border-[#16130F] focus-visible:ring-2 focus-visible:ring-[#F26522]/40";

export function RegistrationForm({ batch, content }: RegistrationFormProps) {
  const { toast } = useToast();

  // Dummy submit: the Mayar payment request is wired up later.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.info(content.dummyNotice);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-w-0 flex-[1_1_360px] flex-col gap-[18px] rounded bg-[#FAF7F2] p-[22px] text-[#16130F] sm:p-8"
    >
      <input type="hidden" name="batchId" value={batch.id} />
      <div className="flex flex-col gap-1 border-b border-[#E6E0D7] pb-4" aria-live="polite">
        <span className="text-[12.5px] font-bold uppercase tracking-[0.1em] text-[#6E665E]">{content.formEyebrow}</span>
        <span className={`${SERIF} text-[22px] leading-snug`}>
          {batch.code} · {batch.date}
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="enroll-name" className="text-[15px] font-semibold">
          {content.fields.name}
        </label>
        <input id="enroll-name" name="name" type="text" autoComplete="name" required className={inputClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="enroll-email" className="text-[15px] font-semibold">
          {content.fields.email}
        </label>
        <input
          id="enroll-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="enroll-phone" className="text-[15px] font-semibold">
          {content.fields.phone}
        </label>
        <div className="flex gap-2">
          <span className="inline-flex min-h-[50px] items-center rounded bg-[#EFE9E0] px-3.5 text-base text-[#3D3833]">
            {content.fields.phonePrefix}
          </span>
          <input
            id="enroll-phone"
            name="phone"
            type="tel"
            autoComplete="tel-national"
            inputMode="tel"
            required
            className={`${inputClass} min-w-0 flex-1`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="min-h-14 cursor-pointer rounded-md bg-[#F26522] text-lg font-bold text-[#16130F] transition-[background-color,transform] duration-150 hover:bg-[#E0571A] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16130F]"
      >
        {content.submitPrefix} {batch.code} — {batch.price}
      </button>
      <p className="m-0 text-center text-[13px] leading-normal text-[#6E665E]">{content.footnote}</p>
    </form>
  );
}
