import React, { useState } from "react";
import {
  Camera,
  Truck,
  RotateCcw,
  Sparkles,
  Store,
  
  ArrowUpRight,
} from "lucide-react";

const GALLERY_POSTS = [
  {
    id: 1,
    handle: "@rohit_rawfit",
    city: "Bandra, Mumbai",
    fit: "Washed Boxy Tee + Raw Denim",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    handle: "@kabir.styles",
    city: "Indiranagar, BLR",
    fit: "Sage Cuban Shirt + Relaxed Chino",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    handle: "@aryan.vault",
    city: "Hauz Khas, DEL",
    fit: "Backprint Streetwear Graphic Tee",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    handle: "@dev_sharma",
    city: "Colaba, Mumbai",
    fit: "Oversized Polo + Relaxed Trouser",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    handle: "@tanya.urban",
    city: "Koramangala, BLR",
    fit: "Charcoal Boxy Hoodie + Parachute Cargo",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    handle: "@zack_snitch",
    city: "Cyber City, GGN",
    fit: "Resort Knit Polo + Tailored Pleats",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80",
  },
];

const TRUST_BENEFITS = [
  {
    icon: Truck,
    title: "FREE EXPRESS SHIPPING",
    description: "Automated on all drop carts above ₹999 across India.",
  },
  {
    icon: RotateCcw,
    title: "7-DAY ZERO FRICTION",
    description: "Doorstep reverse pick-ups & instant exchange credits.",
  },
  {
    icon: Sparkles,
    title: "100% COMBED COTTON",
    description: "Pre-shrunk, bio-washed, and colorfast guaranteed.",
  },
  {
    icon: Store,
    title: "TRY & BUY SERVICE",
    description: "Available across 28 flagship retail stores nationwide.",
  },
];

const StyleGallery = () => {
  return (
    <section className="w-full bg-white text-black py-14 px-4 sm:px-6 lg:px-10 border-t border-neutral-100 selection:bg-[#cbfb45] selection:text-black">
      <div className="max-w-[1580px] mx-auto">
        
        {/* ================= 1. HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.22em] text-[#e11d48] mb-1.5">
              COMMUNITY DISPATCH // 120K+ POSTS
            </p>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
              STYLE GALLERY <span className="text-black">#SNITCHFAM</span>
            </h2>
          </div>

          <p className="font-body text-xs sm:text-sm text-neutral-500 max-w-md font-normal leading-relaxed lg:text-right">
            Real fits, raw city streets. Tap any look to inspect fit specs and shop exact item coordinates.
          </p>
        </div>

        {/* ================= 2. 6-COLUMN IMAGE GALLERY ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {GALLERY_POSTS.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4.2] w-full bg-neutral-100 overflow-hidden cursor-pointer border border-neutral-100 hover:border-black transition-all"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.fit}
                className="w-full h-full object-cover object-center filter grayscale-[25%] contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 ease-out"
              />

              {/* Dark Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <div className="flex items-center justify-between text-white mb-1">
                  <span className="font-label text-[10px] font-bold tracking-wider uppercase text-[#cbfb45]">
                    {item.handle}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
                <p className="font-body text-[10px] text-neutral-200 line-clamp-1 font-medium">
                  {item.fit}
                </p>
                <span className="font-label text-[9px] uppercase tracking-widest text-neutral-400 mt-0.5">
                  {item.city}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= 3. COMMUNITY FEATURE PROMO BANNER ================= */}
        <div className="bg-[#f4f4f6] border border-neutral-200/70 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mb-14">
          <div className="flex items-center gap-3.5 text-left w-full sm:w-auto">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-label text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                WANT TO BE FEATURED ON OUR GLOBAL FEED?
              </h4>
              <p className="font-body text-[11px] sm:text-xs text-neutral-500 leading-snug">
                Post your fit with tag <span className="font-semibold text-black">#SNITCHFAM</span> & mention <span className="font-semibold text-black">@snitch.co.in</span> to get credited and win ₹5,000 monthly store credits.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="w-full sm:w-auto font-label text-[11px] font-bold uppercase tracking-[0.18em] bg-white hover:bg-black text-black hover:text-white border border-neutral-300 hover:border-black px-6 py-2.5 transition-colors duration-200 cursor-pointer shrink-0 shadow-xs"
          >
            UPLOAD FIT
          </button>
        </div>

        {/* ================= 4. TRUST & VALUE PROPOSITIONS (FOOTER CARDS) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-[#f8f9fa] border border-neutral-200/70 p-4 sm:p-5 flex items-start gap-3.5 hover:border-black/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-none bg-neutral-200/80 flex items-center justify-center text-black shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div>
                  <h5 className="font-label text-xs font-bold uppercase tracking-wider text-black mb-1">
                    {benefit.title}
                  </h5>
                  <p className="font-body text-[11px] leading-relaxed text-neutral-500 font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StyleGallery;