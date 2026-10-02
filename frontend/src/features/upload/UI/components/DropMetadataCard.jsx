import React from "react";
import { Check } from "lucide-react";

const DropMetadataCard = ({
  title,
  setTitle,
  description,
  setDescription,
  isTitleValid,
  isDescValid,
}) => {
  return (
    <div className="bg-white border border-neutral-200/90 p-6 sm:p-7 shadow-xs">
      <div className="flex items-center justify-between pb-5 mb-6 border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <span className="font-label bg-black text-white text-[10px] font-black px-2 py-0.5 tracking-widest">
            01
          </span>
          <h2 className="font-headline text-sm font-black uppercase tracking-wider text-black">
            DROP METADATA & CORE COPY
          </h2>
        </div>
        <span className="font-label text-[10px] uppercase font-mono tracking-widest text-neutral-400">
          MONGOOSE::PRODUCTSCHEMA
        </span>
      </div>

      <div className="space-y-6">
        {/* Title */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="font-label text-[11px] font-bold uppercase tracking-wider text-neutral-800">
              PRODUCT TITLE <span className="text-red-500">*</span>
            </label>
            <span className="font-label text-[10.5px] font-mono font-medium text-neutral-400">
              {title.length} / 100 CHARS
            </span>
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Heavyweight Raw-Edge Washed Oversized Utility Overshirt"
            className="font-headline w-full bg-[#f4f4f7] border border-neutral-300 focus:border-black rounded-none px-4 py-3.5 text-sm sm:text-base font-bold text-black outline-none transition-colors"
          />
          <div className="flex items-center justify-between mt-2 text-[10.5px]">
            <span className="font-body text-neutral-400">
              Required string: minlength: 2, maxlength: 100 characters
            </span>
            {isTitleValid && (
              <span className="font-label font-bold text-[#65a30d] flex items-center gap-1 uppercase tracking-wider">
                <Check className="w-3.5 h-3.5" /> VALID TITLE
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="font-label text-[11px] font-bold uppercase tracking-wider text-neutral-800">
              EDITORIAL SPECIFICATION & FIT COPY <span className="text-red-500">*</span>
            </label>
            <span className="font-label text-[10.5px] font-mono font-medium text-neutral-400">
              {description.length} / 500 CHARS
            </span>
          </div>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Crafted from custom 380 GSM heavyweight diagonal twill with a mineral stone acid wash..."
            className="font-body w-full bg-[#f4f4f7] border border-neutral-300 focus:border-black rounded-none p-4 text-xs sm:text-sm text-neutral-800 leading-relaxed outline-none transition-colors resize-y"
          />
          <div className="flex items-center justify-between mt-2 text-[10.5px]">
            <span className="font-body text-neutral-400">
              Required string: minlength: 20, maxlength: 500 characters
            </span>
            {isDescValid && (
              <span className="font-label font-bold text-[#65a30d] flex items-center gap-1 uppercase tracking-wider">
                <Check className="w-3.5 h-3.5" /> PASSED ({description.length} CHARS)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropMetadataCard;