import React from "react";
import { PhotoPlaceholder } from "../../../components/PhotoPlaceholder";

interface HeroPortraitProps {
  label: string;
  description: string;
}

export function HeroPortrait({ label, description }: HeroPortraitProps) {
  return (
    <div className="flex min-w-0 flex-[1_1_320px] flex-col">
      <PhotoPlaceholder label={label} description={description} className="aspect-[4/5]" />
    </div>
  );
}
