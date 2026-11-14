import React from "react";

interface ChatBubbleProps {
  children: React.ReactNode;
  wide?: boolean;
}

// The one place a large radius belongs: it is the real shape of a chat message.
export function ChatBubble({ children, wide = false }: ChatBubbleProps) {
  return (
    <div
      className={`self-end rounded-[16px_16px_4px_16px] bg-[#16130F] px-4 py-3 text-[15px] leading-normal text-[#FAF7F2] ${
        wide ? "flex max-w-[92%] flex-col gap-2" : "max-w-[85%]"
      }`}
    >
      {children}
    </div>
  );
}
