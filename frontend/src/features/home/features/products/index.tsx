import React from "react";
import { SectionHeader } from "./features/SectionHeader";
import { ProductShowcase } from "./features/ProductShowcase";

interface ProductsSectionProps {
  title?: string;
  className?: string;
}

export function ProductsSection({
  title = "In-House Product",
  className = "",
}: ProductsSectionProps) {
  return (
    <section
      id="products"
      className={`scroll-mt-20 relative bg-[#f4f3ee] border-y border-stone-200/60 py-10 sm:py-14 lg:py-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Uniform Centered Section Header */}
        <SectionHeader title={title} />

        {/* Flagship Product Showcase */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <ProductShowcase />
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
