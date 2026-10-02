/* =======================================================================
   2. REUSABLE E-COMMERCE PRODUCT CARD COMPONENT
   ======================================================================= */

import { Check, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import productHook from "../../hooks/ProductHook";

/**
 * ProductCard
 * Standard high-street e-commerce item card with hover sizes, quick-add,
 * pricing.
 */
export function ProductCard({
  title,
  price,
  id,
  colorway = "VINTAGE WASH CHARCOAL",
  image,
  sizes = ["S", "M", "L", "XL"],
  onAddToCart,
}) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { added, handleAdd } = productHook();
  const size = sizes?.map((s) => s.size);
  const [selectedSize, setSelectedSize] = useState(size[0]);
  const stock = sizes?.find((s) => s.size === selectedSize);
  

  return (
    <div className="group relative w-full max-w-[320px] bg-white border border-neutral-200/80 overflow-hidden font-body select-none transition-shadow hover:shadow-lg">
      {/* Product Image Frame */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
        <NavLink key={id} to={`/products/${id}`}>
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center grayscale-[20%] transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
        </NavLink>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label="Wishlist item"
          className="absolute top-2.5 right-2.5 z-10 p-2 bg-white/90 hover:bg-white text-black transition-colors rounded-none shadow-sm cursor-pointer"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${
              isWishlisted
                ? "fill-[#e11d48] text-[#e11d48]"
                : "text-neutral-700"
            }`}
          />
        </button>

        {/* Hover Quick Size Selection Shelf (Slide up on desktop) */}
        <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 via-black/50 to-transparent translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col gap-2">
          <span className="font-label text-[9.5px] font-bold uppercase tracking-widest text-neutral-300">
            SELECT SIZE:
          </span>
          <div className="flex items-center gap-1.5 font-label">
            {size.map((s) => (
              <button
                key={s}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(s);
                }}
                className={`flex-1 py-1 text-[10px] font-black uppercase transition-colors ${
                  selectedSize === s
                    ? "bg-[#cbfb45] text-black"
                    : "bg-black/60 text-white hover:bg-black/90"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Meta */}
      <div className="p-3.5">
        <p className="font-label text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">
          {colorway}
        </p>

        <h4 className="font-headline text-xs sm:text-[13px] font-black uppercase tracking-tight text-neutral-900 mt-0.5 line-clamp-1">
          {title}
        </h4>

        {/* Price & Discount Bar */}
        <div className="mt-2 flex justify-between items-baseline gap-2 font-label">
          <span className="text-sm font-black text-black">
            ₹{price.toLocaleString()}
          </span>
          <span className="text-sm font-black text-black">
            {stock.stock !== 0 ? (
              <span>{stock.stock} Stock</span>
            ) : (
              <span className="text-red-600">Unavailable</span>
            )}
          </span>
        </div>

        {/* Quick Add Button */}
        <button
          type="button"
          onClick={(e) =>
            handleAdd(e, {
              id,
              size: selectedSize,
              title,
              price,
              image,
              stock,
              onAddToCart,
            })
          }
          className={`font-label mt-3 w-full py-2.5 text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all cursor-pointer ${
            added
              ? "bg-[#cbfb45] text-black"
              : "bg-black text-white hover:bg-neutral-900 active:scale-[0.98]"
          }`}
        >
          {added ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>ADDED TO BAG</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>QUICK ADD</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
