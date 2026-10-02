import React, { useState } from "react";

const LiveStoreSimulator = ({
  title,
  description,
  price,
  currency,
  images,
  sizes,
  totalStock,
}) => {
  const [selectedSize, setSelectedSize] = useState("L");

  return (
    <div className="bg-white border border-neutral-200/90 p-5 shadow-xs">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="font-label text-[10px] font-black uppercase tracking-wider text-black">
            LIVE STORE CARD SIMULATOR
          </span>
        </div>
        <span className="font-label text-[9px] uppercase font-mono text-neutral-400 tracking-widest">
          DESKTOP // MOBILE
        </span>
      </div>

      {/* Product Image Canvas */}
      <div className="relative aspect-4/5 w-full bg-neutral-100 overflow-hidden border border-neutral-200 mb-4">
        {images.length > 0 ? (
          <img
            src={images[0].preview}
            alt="Drop Preview"
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 bg-neutral-50 p-4 text-center">
            <span className="font-label text-xs uppercase font-bold">No Image Uploaded</span>
            <span className="font-body text-[10px] text-neutral-400 mt-1">Upload in Slot 01 to preview</span>
          </div>
        )}

        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          <span className="font-label bg-[#cbfb45] text-black text-[8px] font-black tracking-widest px-2 py-0.5 uppercase shadow-xs">
            NEW DROP
          </span>
          <span className="font-label bg-black text-white text-[8px] font-black tracking-widest px-2 py-0.5 uppercase shadow-xs">
            OVERSIZED BOX FIT
          </span>
        </div>

        {/* Sizes Bar */}
        <div className="absolute inset-x-0 bottom-0 bg-black/90 text-white p-2 flex items-center justify-around font-label text-[10px] font-bold">
          {sizes.map((s) => (
            <button
              key={s.size}
              type="button"
              onClick={() => setSelectedSize(s.size)}
              className={`px-1.5 py-0.5 ${
                selectedSize === s.size
                  ? "text-[#cbfb45] underline font-black"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {s.size}
            </button>
          ))}
        </div>
      </div>

      {/* Metadata Preview */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] font-label text-neutral-500 uppercase tracking-widest">
          <span>SNITCH DROP // CREATOR EDITION</span>
          <span className="font-bold text-[#e11d48]">{totalStock} IN STOCK</span>
        </div>

        <h3 className="font-headline text-sm font-black uppercase text-black line-clamp-2 leading-snug">
          {title || "UNNAMED DROP PRODUCT..."}
        </h3>

        {/* Price Row */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="font-headline text-lg font-black text-black">
            {currency === "INR" ? "₹" : "$"}{Number(price || 0).toLocaleString("en-IN")}
          </span>
          {Number(price) > 0 && (
            <>
              <span className="font-body text-xs text-neutral-400 line-through">
                {currency === "INR" ? "₹" : "$"}{(Number(price) + 1300).toLocaleString("en-IN")}
              </span>
              <span className="font-label text-[10px] font-bold text-[#e11d48]">
                (37% off)
              </span>
            </>
          )}
        </div>

        <p className="font-body text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
          {description || "No description provided yet."}
        </p>
      </div>
    </div>
  );
};

export default LiveStoreSimulator;