import React from "react";
import { SERIF } from "../../../constants";

interface PullQuoteProps {
  text: string;
  emphasis: string;
}

export function PullQuote({ text, emphasis }: PullQuoteProps) {
  return (
    <p
      className={`${SERIF} m-0 border-y border-[#16130F] py-8 text-[clamp(26px,3.6vw,38px)] italic leading-tight tracking-[-0.01em]`}
    >
      {text} <span className="text-[#B8460F]">{emphasis}</span>.
    </p>
  );
}
