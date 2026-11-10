"use client";

import React, { useState } from "react";
import { WorkshopBatch } from "../../../constants";
import { TextLink } from "../../../components/TextLink";
import { EnrollmentContent } from "../constants";
import { BatchOption } from "./BatchOption";
import { PastBatches } from "./PastBatches";
import { RegistrationForm } from "./RegistrationForm";

interface EnrollmentPanelProps {
  heading: React.ReactNode;
  openBatches: WorkshopBatch[];
  pastBatches: WorkshopBatch[];
  content: EnrollmentContent;
}

// Holds the selected batch so the picker and the form stay in sync.
export function EnrollmentPanel({ heading, openBatches, pastBatches, content }: EnrollmentPanelProps) {
  const [selectedId, setSelectedId] = useState(openBatches[0]?.id);
  const selected = openBatches.find((batch) => batch.id === selectedId) ?? openBatches[0];

  if (!selected) return null;

  return (
    <div className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-x-16 gap-y-12">
      <div className="flex min-w-0 flex-[1.1_1_420px] flex-col gap-7">
        {heading}
        <fieldset className="m-0 flex flex-col gap-3 border-0 p-0">
          <legend className="sr-only">{content.pickerLabel}</legend>
          {openBatches.map((batch) => (
            <BatchOption
              key={batch.id}
              batch={batch}
              selected={batch.id === selected.id}
              onSelect={setSelectedId}
            />
          ))}
        </fieldset>
        <PastBatches label={content.pastLabel} status={content.pastStatus} batches={pastBatches} />
        <p className="m-0 text-[15px] leading-relaxed text-[#B5ACA2]">
          {content.notifyLead}{" "}
          <TextLink href={content.notifyHref} tone="paper" className="min-h-0">
            {content.notifyLinkLabel}
          </TextLink>
        </p>
      </div>
      <RegistrationForm batch={selected} content={content} />
    </div>
  );
}
