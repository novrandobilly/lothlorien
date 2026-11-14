import React from "react";
import Link from "next/link";

interface SalesFooterProps {
  year?: number;
}

export function SalesFooter({ year = 2026 }: SalesFooterProps) {
  return (
    <footer className="border-t border-[#3D3833] bg-[#16130F] px-5 pt-6 pb-24 sm:px-8 md:pb-6">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-x-4 gap-y-2 text-sm text-[#B5ACA2]">
        <span>© {year} Envien Studio</span>
        <Link href="/" className="text-[#FAF7F2] hover:underline">
          envienstudio.com
        </Link>
      </div>
    </footer>
  );
}

export default SalesFooter;
