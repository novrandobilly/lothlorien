import React from "react";
import Link from "next/link";
import { EnvienLogo } from "@/components/ui/EnvienLogo";
import {
  SANS,
  SERIF,
  letterFont,
  openBatches,
  uiFont,
  workshopBatches,
} from "@/features/academy/strategic-ai-collaboration/constants";
import { TextLink } from "@/features/academy/strategic-ai-collaboration/components/TextLink";
import { SalesFooter } from "@/features/academy/strategic-ai-collaboration/features/sales-footer";
import { buildGoogleCalendarUrl, thankYouContent, type ThankYouContent } from "./constants";
import { EventCard } from "./features/EventCard";
import { NextSteps } from "./features/NextSteps";

const SALES_PAGE_PATH = "/academy/strategic-ai-collaboration";

interface StrategicAiCollaborationThankYouFeatureProps {
  content?: ThankYouContent;
}

// Mayar redirects here after a successful payment. One redirect URL serves every batch,
// so the page shows the nearest open batch.
export function StrategicAiCollaborationThankYouFeature({
  content = thankYouContent,
}: StrategicAiCollaborationThankYouFeatureProps) {
  const batch = openBatches[0] ?? workshopBatches[workshopBatches.length - 1];
  const calendarUrl = buildGoogleCalendarUrl({
    batch,
    title: content.calendarTitle,
    details: content.calendarDetails,
  });

  return (
    <div
      lang="id"
      className={`${letterFont.variable} ${uiFont.variable} ${SANS} flex min-h-screen flex-col bg-[#FAF7F2] text-[#16130F] antialiased selection:bg-[#FBEADF] selection:text-[#16130F]`}
    >
      <header className="mx-auto flex w-full max-w-[1200px] items-center px-5 py-[18px] sm:px-8">
        <Link href="/" aria-label="Envien Studio, ke beranda" className="inline-flex min-h-11 items-center">
          <EnvienLogo className="h-6 w-auto" />
        </Link>
      </header>

      <main className="flex-1 px-5 pt-8 pb-20 sm:px-8 lg:pt-16">
        <div className="mx-auto flex max-w-[720px] flex-col gap-12">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FBEADF] px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[#B8461A]">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#E95E28]" />
              {content.eyebrow}
            </span>
            <h1
              className={`${SERIF} m-0 text-[clamp(38px,6vw,64px)] font-medium leading-[1.05] tracking-[-0.02em] text-balance`}
            >
              {content.title}
            </h1>
            <p className="m-0 max-w-[600px] text-[18px] leading-relaxed text-[#3D3833]">{content.lead}</p>
          </div>

          <EventCard
            batch={batch}
            label={content.eventLabel}
            calendarUrl={calendarUrl}
            calendarLabel={content.calendarLabel}
          />

          <NextSteps title={content.stepsTitle} steps={content.steps} />

          <div className="flex flex-col gap-2 text-[16px] text-[#6E665E]">
            {content.helpHref && (
              <p className="m-0">
                {content.helpText}{" "}
                <a
                  href={content.helpHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#16130F] underline decoration-[#F26522] decoration-2 underline-offset-4"
                >
                  {content.helpLinkLabel}
                </a>
              </p>
            )}
            <TextLink href={SALES_PAGE_PATH}>{content.backLabel}</TextLink>
          </div>
        </div>
      </main>

      <SalesFooter />
    </div>
  );
}

export default StrategicAiCollaborationThankYouFeature;
