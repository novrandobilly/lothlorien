import React from "react";
import { SERIF } from "../../../constants";
import { ChatExample } from "../constants";
import { ChatBubble } from "./ChatBubble";

interface ChatExampleCardProps {
  example: ChatExample;
}

// Supports **bold** at the start of a line for the AI reply headings.
function renderReplyLine(line: string) {
  const match = line.match(/^\*\*(.+?)\*\*(.*)$/);
  if (!match) return line;
  return (
    <>
      <strong className="text-[#16130F]">{match[1]}</strong>
      {match[2]}
    </>
  );
}

export function ChatExampleCard({ example }: ChatExampleCardProps) {
  const isAfter = example.id === "after";

  return (
    <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-[18px]">
      <p
        className={`m-0 text-[13px] font-bold uppercase tracking-[0.1em] ${
          isAfter ? "text-[#B8460F]" : "text-[#6E665E]"
        }`}
      >
        {example.eyebrow}
      </p>

      <div className="flex flex-col gap-4 rounded border border-[#E6E0D7] bg-white p-[22px]">
        {example.prompt && <ChatBubble>{example.prompt}</ChatBubble>}
        {example.brief && (
          <ChatBubble wide>
            {example.brief.map((line) => (
              <span key={line.label}>
                <strong className="text-[#F26522]">{line.label}</strong> {line.text}
              </span>
            ))}
          </ChatBubble>
        )}
        <div className="flex flex-col gap-2 text-[15px] leading-relaxed text-[#3D3833]">
          {example.reply.map((line) => (
            <p key={line} className="m-0">
              {renderReplyLine(line)}
            </p>
          ))}
          {example.replyMuted && <p className="m-0 text-[#6E665E]">{example.replyMuted}</p>}
        </div>
      </div>

      <p className={`${SERIF} m-0 text-[19px] italic leading-normal text-[#3D3833]`}>
        {example.note}
        {example.noteTerm && (
          <>
            {" "}
            <span className="font-medium not-italic text-[#16130F]">{example.noteTerm}</span>.
          </>
        )}
      </p>
    </div>
  );
}
