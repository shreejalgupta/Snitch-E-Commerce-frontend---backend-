import React from "react";
import { Check, Rocket, Trash } from "lucide-react";

const SchemaComplianceCard = ({
  title,
  description,
  images,
  price,
  sizes,
  totalStock,
  validCount,
  isTitleValid,
  isDescValid,
  isImagesValid,
  isPriceValid,
  isSizesValid,
  isFormValid,
  loading,
  error,
  success,
  onPublish,
  onDiscard,
}) => {
  return (
    <div className="space-y-4">
      {/* Schema Compliance Checklist */}
      <div className="bg-white border border-neutral-200/90 p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#65a30d]" />
            <h3 className="font-headline text-xs font-black uppercase tracking-wider text-black">
              SCHEMA COMPLIANCE ENGINE
            </h3>
          </div>
          <span className="font-label text-[10px] font-black bg-[#cbfb45] text-black px-2 py-0.5 tracking-wider">
            {validCount} / 5 READY
          </span>
        </div>

        {/* Feedback Message Banners */}
        {error && (
          <div className="mb-3 p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-body font-semibold">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-3 p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-body font-bold">
            ✓ Product published to live registry successfully!
          </div>
        )}

        <div className="space-y-3 font-body text-xs">
          {/* Title Spec */}
          <div className="flex items-center justify-between p-2 bg-[#f8f9fa] border border-neutral-100">
            <div>
              <span className="font-label text-[10px] font-bold uppercase text-black block">
                TITLE SPECIFICATION
              </span>
              <span className="text-[10px] text-neutral-400">minlength: 2, maxlength: 100</span>
            </div>
            <span
              className={`font-mono text-[10.5px] font-bold ${
                isTitleValid ? "text-[#65a30d]" : "text-neutral-400"
              }`}
            >
              {isTitleValid ? `VALID (${title.length})` : "INCOMPLETE"}
            </span>
          </div>

          {/* Description Spec */}
          <div className="flex items-center justify-between p-2 bg-[#f8f9fa] border border-neutral-100">
            <div>
              <span className="font-label text-[10px] font-bold uppercase text-black block">
                DESCRIPTION COPY
              </span>
              <span className="text-[10px] text-neutral-400">minlength: 20, maxlength: 500</span>
            </div>
            <span
              className={`font-mono text-[10.5px] font-bold ${
                isDescValid ? "text-[#65a30d]" : "text-neutral-400"
              }`}
            >
              {isDescValid ? `VALID (${description.length})` : "INCOMPLETE"}
            </span>
          </div>

          {/* Images Spec */}
          <div className="flex items-center justify-between p-2 bg-[#f8f9fa] border border-neutral-100">
            <div>
              <span className="font-label text-[10px] font-bold uppercase text-black block">
                LOOKBOOK ASSETS ARRAY
              </span>
              <span className="text-[10px] text-neutral-400">min: 1, max: 5 image URLs</span>
            </div>
            <span
              className={`font-mono text-[10.5px] font-bold ${
                isImagesValid ? "text-[#65a30d]" : "text-neutral-400"
              }`}
            >
              {images.length} / 5 SLOTS
            </span>
          </div>

          {/* Price Spec */}
          <div className="flex items-center justify-between p-2 bg-[#f8f9fa] border border-neutral-100">
            <div>
              <span className="font-label text-[10px] font-bold uppercase text-black block">
                PRICE & CURRENCY ENUM
              </span>
              <span className="text-[10px] text-neutral-400">ammount &gt; 0, enum: [INR, USD]</span>
            </div>
            <span
              className={`font-mono text-[10.5px] font-bold ${
                isPriceValid ? "text-[#65a30d]" : "text-neutral-400"
              }`}
            >
              {Number(price) > 0 ? `₹${Number(price).toLocaleString("en-IN")}` : "NOT SET"}
            </span>
          </div>

          {/* Sizes Spec */}
          <div className="flex items-center justify-between p-2 bg-[#f8f9fa] border border-neutral-100">
            <div>
              <span className="font-label text-[10px] font-bold uppercase text-black block">
                SIZES ALLOCATION MATRIX
              </span>
              <span className="text-[10px] text-neutral-400">Enum ["XS"..."XXL"], min: 0</span>
            </div>
            <span
              className={`font-mono text-[10.5px] font-bold ${
                isSizesValid ? "text-[#65a30d]" : "text-neutral-400"
              }`}
            >
              {totalStock} UNITS
            </span>
          </div>
        </div>
      </div>

      {/* Publishing Actions */}
      <div className="space-y-2">
        {/* Publish Action Button */}
        <button
          type="button"
          onClick={onPublish}
          disabled={loading}
          className="w-full font-label bg-black hover:bg-neutral-900 active:scale-[0.99] text-white py-4 px-6 text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Rocket className="w-4 h-4 text-[#cbfb45]" />
          <span>
            {loading ? "UPLOADING PRODUCT..." : "PUBLISH TO LIVE DROP REGISTRY"}
          </span>
        </button>

        {/* Discard Action Button (Clears all fields) */}
        <button
          type="button"
          onClick={onDiscard}
          className="w-full font-label bg-neutral-200/80 hover:bg-rose-100 hover:text-rose-600 text-neutral-800 text-[10px] font-bold uppercase tracking-wider py-3 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <Trash className="w-3.5 h-3.5" />
          <span>DISCARD PRODUCT & START FRESH</span>
        </button>

        <p className="font-body text-[10px] text-neutral-400 text-center leading-relaxed pt-1">
          Product images are uploaded before the product is published.
        </p>
      </div>
    </div>
  );
};

export default SchemaComplianceCard;