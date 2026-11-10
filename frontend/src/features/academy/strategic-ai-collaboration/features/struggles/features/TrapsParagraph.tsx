import React from "react";
import { CognitiveTrap } from "../constants";

interface TrapsParagraphProps {
  intro: string;
  traps: CognitiveTrap[];
}

export function TrapsParagraph({ intro, traps }: TrapsParagraphProps) {
  return (
    <p className="m-0">
      {intro}{" "}
      {traps.map((trap, index) => (
        <React.Fragment key={trap.name}>
          {index === traps.length - 1 ? "dan " : ""}
          <strong className="font-medium text-[#16130F]">{trap.name}</strong>, {trap.meaning}
          {index < traps.length - 1 ? "; " : "."}
        </React.Fragment>
      ))}
    </p>
  );
}
