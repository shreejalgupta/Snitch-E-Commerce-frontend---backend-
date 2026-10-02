import React, { useRef } from "react";
import { Trash2, UploadCloud, Image as ImageIcon, Check, AlertCircle } from "lucide-react";

const EditorialMediaCard = ({
  images,
  imageError,
  onImageFiles,
  onRemoveImage,
}) => {
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onImageFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white border border-neutral-200/90 p-6 sm:p-7 shadow-xs">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            onImageFiles(e.target.files);
            e.target.value = ""; // Reset input so re-selecting same file works
          }
        }}
      />

      {/* Header Strip */}
      <div className="flex items-center justify-between pb-5 mb-5 border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <span className="font-label bg-black text-white text-[10px] font-black px-2 py-0.5 tracking-widest">
            02
          </span>
          <h2 className="font-headline text-sm font-black uppercase tracking-wider text-black">
            EDITORIAL MEDIA SLOTS
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-label text-[10px] uppercase font-mono font-bold bg-[#e11d48] text-white px-2 py-1 tracking-wider">
            MAX 1MB / IMAGE
          </span>
          <span className="font-label text-[10px] uppercase font-mono font-bold bg-black text-white px-2 py-1 tracking-wider">
            [{images.length} / 5 SLOTS]
          </span>
        </div>
      </div>

      {/* 1MB Exceeded Error Notification */}
      {imageError && (
        <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-[#e11d48] text-xs font-body flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{imageError}</span>
        </div>
      )}

      {/* Guideline */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-neutral-500 mb-5">
        <p className="font-body text-[11.5px]">
          Schema specification allows <strong className="text-black">1 to 5 images</strong>. Aspect ratio locked to 3:4. Max file size is <strong className="text-[#e11d48]">1MB per image</strong>.
        </p>
        <div className="font-label text-[10px] font-bold uppercase bg-neutral-100 border border-neutral-200 px-2 py-1 flex items-center gap-1.5 self-start shrink-0">
          <ImageIcon className="w-3 h-3 text-neutral-500" />
          <span>3:4 PORTRAIT RATIO</span>
        </div>
      </div>

      {/* 5 Slots Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
        {/* Uploaded Image Cards */}
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-3/4 bg-neutral-100 border border-neutral-300 overflow-hidden flex flex-col justify-between"
          >
            <img
              src={image.preview}
              alt={`Slot ${index + 1}`}
              className="w-full h-full object-cover object-top"
            />

            {/* Slot Pill */}
            <div className="absolute top-2 left-2 z-10">
              <span
                className={`font-label text-[8px] font-black tracking-widest uppercase px-1.5 py-0.5 shadow-xs ${
                  index === 0
                    ? "bg-black text-white"
                    : "bg-white/90 text-black backdrop-blur-xs"
                }`}
              >
                {index === 0 ? "PRIMARY" : `SLOT 0${index + 1}`}
              </span>
            </div>

            {/* Remove Action */}
            <button
              type="button"
              onClick={() => onRemoveImage(index)}
              className="absolute top-2 right-2 w-6 h-6 bg-black/80 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Remove image"
            >
              <Trash2 className="w-3 h-3" />
            </button>

            <div className="absolute bottom-0 inset-x-0 bg-neutral-900/80 backdrop-blur-xs text-white p-1 text-[8px] font-mono truncate">
              SLOT_0{index + 1}_ASSET
            </div>
          </div>
        ))}

        {/* Empty Slots */}
        {Array.from({ length: 5 - images.length }).map((_, idx) => {
          const slotNum = images.length + idx + 1;
          const isNextAvailable = idx === 0;

          return (
            <div
              key={idx}
              onDrop={isNextAvailable ? handleDrop : undefined}
              onDragOver={isNextAvailable ? handleDragOver : undefined}
              onClick={() => {
                if (isNextAvailable) fileInputRef.current?.click();
              }}
              className={`aspect-3/4 border-2 border-dashed flex flex-col items-center justify-center p-3 text-center transition-all ${
                isNextAvailable
                  ? "border-neutral-300 hover:border-black bg-neutral-50/70 hover:bg-neutral-100 cursor-pointer text-neutral-600 hover:text-black"
                  : "border-neutral-200 bg-neutral-50/40 text-neutral-300 cursor-not-allowed"
              }`}
            >
              <UploadCloud className="w-5 h-5 mb-1.5" />
              <span className="font-label text-[9px] font-bold uppercase tracking-wider block">
                {isNextAvailable ? "UPLOAD IMAGE" : `SLOT 0${slotNum}`}
              </span>
              <span className="font-body text-[8px] text-neutral-400 block mt-0.5">
                {isNextAvailable ? "MAX 1MB" : "LOCKED"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer Meta */}
      <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between text-[11px] text-neutral-500">
        <span className="font-body flex items-center gap-1.5 text-neutral-600">
          <Check className="w-3.5 h-3.5 text-[#65a30d]" />
          Max file size: 1MB per image (JPG, PNG, WEBP).
        </span>
        <span className="font-mono text-neutral-400 text-[10px]">
          {images.length} / 5 UPLOADED
        </span>
      </div>
    </div>
  );
};

export default EditorialMediaCard;