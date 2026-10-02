import KickserveProduct from "./features/KickserveProduct";
import PetlogsProduct from "./features/PetlogsProduct";

export function ProductShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
      <KickserveProduct />
      <PetlogsProduct />
    </div>
  );
}

export default ProductShowcase;
