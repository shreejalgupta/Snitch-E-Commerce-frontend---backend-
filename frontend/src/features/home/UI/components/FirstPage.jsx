import React, { useState } from 'react';
import { 
  Zap, 
  ArrowUpRight, 
  Sparkles, 
  Flame, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Compass, 
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

export default function FirstPage() {
  const [soldPercentage, setSoldPercentage] = useState(82);

  return (
    <div className=" bg-[#f1f2f6] text-[#0d0d0e] flex items-center justify-center p-3 sm:p-6 lg:p-10  font-body antialiased selection:bg-[#cbfb45] selection:text-black ">

      <div className="w-full max-w-[1580px] bg-white rounded-none shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-200/90 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] xl:min-h-[700px]">
          
          <div className="lg:col-span-7 xl:col-span-7 p-6 sm:p-10 md:p-12 xl:p-16 flex flex-col justify-between relative z-10">
            <div>
              {/* 1. Header Badges Row */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 font-label">
                <span className="bg-black text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] px-3.5 py-1.5 shadow-sm">
                  SPRING / SUMMER '25
                </span>
                <span className="bg-[#cbfb45] text-black text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] px-3 py-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  LIMITED QUANTITIES
                </span>
                <span className="bg-neutral-100 text-neutral-600 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 border border-neutral-200/70">
                  FAST DISPATCH
                </span>
              </div>

              {/* 2. Main Tiered Headline */}
              <div className="select-none font-headline font-black uppercase tracking-tight leading-[0.88] mb-6 sm:mb-8 text-left">
                {/* Line 1: Primary Dark */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-[5.4rem] text-black tracking-[-0.04em]">
                  REDEFINING
                </h1>

                {/* Line 2: Translucent Ghost Headline */}
                <div className="text-4xl sm:text-6xl md:text-7xl xl:text-[5.4rem] text-neutral-300/80 tracking-[-0.04em] transition-colors hover:text-neutral-400/90 duration-300">
                  THE
                </div>

                {/* Line 3: Translucent Ghost Headline */}
                <div className="text-4xl sm:text-6xl md:text-7xl xl:text-[5.4rem] text-neutral-300/80 tracking-[-0.04em] transition-colors hover:text-neutral-400/90 duration-300">
                  MODERN
                </div>

                {/* Line 4: Primary Dark with extended visual overlap */}
                <div className="text-4xl sm:text-6xl md:text-7xl xl:text-[5.4rem] text-black tracking-[-0.04em] relative lg:w-[115%]">
                  SILHOUETTE
                </div>
              </div>

              {/* 3. Description Subtext */}
              <p className="font-body text-xs sm:text-sm md:text-[15px] leading-relaxed text-neutral-600 max-w-xl mb-8 sm:mb-10 font-normal">
                Drop 04 // Spring Summer '25 Collection. Raw textures, relaxed tailoring, 
                and oversized aesthetics built for the global pavement.
              </p>

              {/* 4. Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12">
                <button
                  type="button"
                  className="font-label group bg-black hover:bg-neutral-900 active:scale-[0.98] text-white text-xs font-bold uppercase tracking-[0.2em] px-7 py-4 flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
                >
                  <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                  <span>SHOP NEW ARRIVALS</span>
                </button>

                <button
                  type="button"
                  className="font-label group bg-white hover:bg-neutral-50 active:scale-[0.98] text-neutral-900 border border-neutral-300 hover:border-black text-xs font-bold uppercase tracking-[0.2em] px-7 py-4 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                >
                  <span>EXPLORE LOOKBOOK</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* 5. Bottom 3-Column Metric Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 border-t border-neutral-100 font-label">
              {/* Stat 1 */}
              <div className="space-y-1">
                <div className="text-base sm:text-xl font-black tracking-tight text-neutral-950 font-headline">
                  380 GSM
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                  HEAVYWEIGHT KNIT
                </div>
              </div>

              {/* Stat 2 */}
              <div className="space-y-1 border-l border-neutral-100 pl-3 sm:pl-6">
                <div className="text-base sm:text-xl font-black tracking-tight text-neutral-950 font-headline">
                  24 HRS
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                  DISPATCH WINDOW
                </div>
              </div>

              {/* Stat 3 */}
              <div className="space-y-1 border-l border-neutral-100 pl-3 sm:pl-6">
                <div className="text-base sm:text-xl font-black tracking-tight text-neutral-950 font-headline">
                  4.9 / 5
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500">
                  STREET CERTIFIED
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-5 relative bg-neutral-950 min-h-[460px] lg:min-h-full overflow-visible flex items-end justify-center">
            
            {/* Streetwear Model High Contrast Editorial Photo */}
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-95 transition-transform duration-1000 ease-out hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80')`,
              }}
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Top Right Floating City Pin Tag */}
            <div className="absolute top-6 right-6 z-20">
              <div className="font-label bg-black/90 backdrop-blur-sm text-white px-3.5 py-2 border border-white/20 text-[10.5px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 shadow-lg">
                <Zap className="w-3.5 h-3.5 text-[#cbfb45] fill-[#cbfb45]" />
                <span>PARIS / TOKYO / MUMBAI</span>
              </div>
            </div>

            {/* Bottom Overlapping Live Metric Floating Card */}
            <div className="relative z-30 w-[90%] sm:w-[84%] lg:w-[105%] lg:-ml-[15%] mb-6 sm:mb-8 lg:-mb-3 bg-white p-5 sm:p-6 shadow-[0_20px_45px_rgba(0,0,0,0.18)] border border-neutral-200">
              
              {/* Header with Live Pulse */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-label text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#e11d48]">
                  LIVE METRIC
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11d48] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e11d48]" />
                </span>
              </div>

              {/* Status Text */}
              <div className="font-headline text-xs sm:text-sm font-black uppercase tracking-tight text-neutral-900 mb-3">
                DROP 04 IS {soldPercentage}% SOLD OUT
              </div>

              {/* Progress Track & Fill */}
              <div className="w-full bg-neutral-100 h-1.5 overflow-hidden mb-3">
                <div 
                  className="bg-black h-full transition-all duration-700 ease-out"
                  style={{ width: `${soldPercentage}%` }}
                />
              </div>

              {/* Sub descriptor */}
              <div className="font-body text-[11px] text-neutral-500 font-medium">
                Next batch restock scheduled in 14 days
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}