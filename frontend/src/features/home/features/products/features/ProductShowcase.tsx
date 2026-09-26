import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { flagshipProduct } from "../constants";

export function ProductShowcase() {
  const {
    eyebrow,
    headline,
    description,
    specs,
    ctaText,
    ctaUrl,
    image,
    imageAlt,
  } = flagshipProduct;

  return (
    <div className="bg-white rounded-3xl border border-stone-200/80 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
        {/* Left Column: Product Narrative, Specs & CTA */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow */}
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-400 font-sans">
            {eyebrow}
          </span>

          {/* Headline */}
          <h3 className="mt-2 sm:mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-stone-950 tracking-tight leading-[1.18]">
            {headline}
          </h3>

          {/* Description */}
          <p className="mt-3 sm:mt-3.5 text-sm sm:text-base text-stone-600 font-sans leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Minimal Specs */}
          {specs && specs.length > 0 && (
            <div className="mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-stone-200/80 w-full space-y-2.5">
              {specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs sm:text-sm font-sans"
                >
                  <span className="font-semibold uppercase tracking-wider text-stone-400 shrink-0 min-w-28">
                    {spec.label}:
                  </span>
                  <span className="text-stone-700 font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button (Desktop) */}
          <div className="mt-7 sm:mt-9 hidden lg:block">
            <Link
              href={ctaUrl}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-stone-950 text-white hover:bg-stone-800 text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-stone-950/15 group active:scale-95"
            >
              <span>{ctaText}</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Portrait PWA Showcase */}
        <div className="lg:col-span-6 xl:col-span-5 flex items-center justify-center w-full py-2">
          <Link
            href={ctaUrl}
            className="group/device relative block w-full max-w-65 sm:max-w-71.25 md:max-w-76.25 lg:max-w-70 xl:max-w-76.25 rounded-[38px] sm:rounded-[44px] p-2.5 sm:p-3 bg-stone-950 border-4 border-stone-800/90 shadow-2xl shadow-stone-950/15 ring-1 ring-stone-950/20 transition-all duration-300 hover:scale-[1.02] active:scale-98"
          >
            {/* Dynamic Island / Speaker Notch */}
            <div className="w-18 sm:w-22 h-3.5 sm:h-4 bg-stone-900 rounded-full mx-auto mb-2 sm:mb-2.5 flex items-center justify-end px-2">
              <div className="w-1.5 h-1.5 rounded-full bg-stone-800" />
            </div>

            {/* Smartphone Screen Viewport (750 x 1334 portrait) */}
            <div className="relative w-full aspect-750/1334 rounded-b-[26px] sm:rounded-b-4xl overflow-hidden bg-stone-900 border border-stone-800/40 shadow-inner">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/device:scale-105"
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 305px, 320px"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Mobile CTA: Placed at the bottom of the container after the screenshot, horizontally centered */}
        <div className="flex justify-center w-full lg:hidden">
          <Link
            href={ctaUrl}
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-stone-950 text-white hover:bg-stone-800 text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-stone-950/15 group active:scale-95"
          >
            <span>{ctaText}</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
