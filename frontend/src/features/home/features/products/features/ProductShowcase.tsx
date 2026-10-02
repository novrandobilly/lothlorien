import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProductItem, productsData } from "../constants";

interface ProductShowcaseCardProps {
  product: ProductItem;
}

export function ProductShowcaseCard({ product }: ProductShowcaseCardProps) {
  const {
    eyebrow,
    badgeType,
    partner,
    title,
    headline,
    description,
    specs,
    ctaText,
    ctaUrl,
    isExternal,
    image,
    imageAlt,
  } = product;

  const isLinkExternal =
    isExternal ?? (ctaUrl ? /^https?:\/\//.test(ctaUrl) : false);

  return (
    <div className="group/card relative w-full bg-white rounded-2xl sm:rounded-3xl border border-stone-200/80 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-stone-300 hover:shadow-md">
      {/* =========================================================
          TOP: TITLE, HEADLINE, DESCRIPTION, SPECS & CTA
         ========================================================= */}
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col items-start text-left flex-1 justify-between">
        {/* Upper narrative content */}
        <div className="w-full">
          {/* Title & Partner Logo Header Row */}
          <div className="flex items-start justify-between w-full gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-tight">
                {title}
              </h3>
              <p className="mt-1 text-sm sm:text-base font-semibold text-stone-800 font-sans leading-snug">
                {headline}
              </p>
            </div>

            {/* Prominent Partner Logo (Edge-to-edge icon without container border/padding) */}
            {partner?.logo && (
              <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center transition-transform hover:scale-105">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-stone-500 font-sans leading-relaxed">
            {description}
          </p>
        </div>

        {/* Lower content: Specs & CTA Button (aligned to the same baseline) */}
        <div className="w-full mt-6">
          {/* Compact Specs list */}
          {specs && specs.length > 0 && (
            <div className="pt-3.5 border-t border-stone-200/70 w-full space-y-1.5 text-xs font-sans min-h-19 flex flex-col justify-start">
              {specs.map((spec, idx) => (
                <div key={idx} className="flex items-baseline gap-2">
                  <span className="font-semibold uppercase tracking-wider text-stone-400 shrink-0 min-w-22 text-[11px]">
                    {spec.label}:
                  </span>
                  <span className="text-stone-700 font-medium truncate">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <div className="mt-5 w-full">
            <Link
              href={ctaUrl}
              target={isLinkExternal ? "_blank" : undefined}
              rel={isLinkExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-950 text-white hover:bg-stone-800 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-stone-950/15 group/btn active:scale-95"
            >
              <span>{ctaText}</span>
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover/btn:translate-x-0.5">
                {isLinkExternal ? (
                  <ArrowUpRight className="w-2.5 h-2.5 text-white" />
                ) : (
                  <ArrowRight className="w-2.5 h-2.5 text-white" />
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM: COMPACT SMARTPHONE VIEWPORT MOCKUP
         ========================================================= */}
      <div className="px-5 sm:px-6 lg:px-7 pb-6 pt-3 flex justify-center items-center w-full bg-stone-50/50 border-t border-stone-100">
        <Link
          href={ctaUrl}
          target={isLinkExternal ? "_blank" : undefined}
          rel={isLinkExternal ? "noopener noreferrer" : undefined}
          className="group/device relative block w-full max-w-44 sm:max-w-50 md:max-w-48 lg:max-w-54 xl:max-w-58 rounded-[30px] sm:rounded-[36px] p-2 sm:p-2.5 bg-stone-950 border-[3px] sm:border-4 border-stone-800/90 shadow-xl shadow-stone-950/10 ring-1 ring-stone-950/20 transition-all duration-300 hover:scale-[1.03] active:scale-98 mt-1"
        >
          {/* Dynamic Island / Speaker Notch */}
          <div className="w-14 sm:w-16 h-2.5 sm:h-3 bg-stone-900 rounded-full mx-auto mb-1.5 sm:mb-2 flex items-center justify-end px-1.5">
            <div className="w-1 h-1 rounded-full bg-stone-800" />
          </div>

          {/* Smartphone Screen Viewport */}
          <div className="relative w-full aspect-750/1334 rounded-b-[20px] sm:rounded-b-[26px] overflow-hidden bg-stone-900 border border-stone-800/40 shadow-inner">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover/device:scale-105"
              sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 240px"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

interface ProductShowcaseProps {
  products?: ProductItem[];
}

export function ProductShowcase({
  products = productsData,
}: ProductShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
      {products.map((product) => (
        <ProductShowcaseCard key={product.id} product={product} />
      ))}
    </div>
  );
}
