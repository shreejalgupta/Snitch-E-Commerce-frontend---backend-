import React from "react";
import { ArrowUpRight } from "lucide-react";

const ReadPage = () => {
  return (
    <section id="lookbook" className="w-full bg-[#171717] text-white py-20 px-4 sm:px-8 lg:px-16 selection:bg-[#cbfb45] selection:text-black">
      <div className="max-w-[1580px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ================= LEFT COLUMN: DUAL STAGGERED EDITORIAL IMAGES ================= */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-[480px] h-[480px] sm:h-[540px]">
            
            {/* 1. Behind / Left Image: Close-up Fabric Texture */}
            <div className="absolute left-0 top-12 sm:top-16 w-[62%] sm:w-[65%] aspect-4/5 bg-white p-2 shadow-2xl z-10 transition-transform duration-500 hover:scale-[1.02]">
              <div className="w-full h-full overflow-hidden bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80"
                  alt="Raw textured denim / heavyweight knit close up"
                  className="w-full h-full object-cover filter contrast-125 brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* 2. Foreground / Right Image: Streetwear Lookbook Magazine Card */}
            <div className="absolute right-0 top-0 w-[58%] sm:w-[60%] aspect-3/4 bg-white p-2 shadow-2xl z-20 transition-transform duration-500 hover:-translate-y-1">
              {/* Magazine Top Header strip */}
              <div className="bg-white px-2 py-1 flex items-center justify-between text-[7px] sm:text-[8px] font-label font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100">
                <span>SNITCH // NEW DROPS</span>
                <span>VOL. 04</span>
              </div>

              {/* Magazine Cover Photo */}
              <div className="relative w-full h-[calc(100%-20px)] overflow-hidden bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
                  alt="Snitch baggy fit model"
                  className="w-full h-full object-cover filter contrast-115 hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Glowing SNITCH Branding Overlay */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="font-headline text-lg sm:text-xl font-black tracking-tighter text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    SNITCH
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT COLUMN: PHILOSOPHY CONTENT ================= */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
          
          {/* Top Manifesto Chip */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#212121] border border-neutral-700/60 px-3 py-1.5 rounded-none text-[#cbfb45] text-[10.5px] font-label font-bold uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cbfb45]" />
              <span>MANUFACTURING MANIFESTO</span>
            </div>
          </div>

          {/* Staggered Heading */}
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05]">
            <span className="text-white block">THE SNITCH FIT</span>
            <span className="text-white block">PHILOSOPHY:</span>
            <span className="text-neutral-400 block mt-1">
              TAILORED FOR INDIAN CLIMATES, SIZED FOR GLOBAL STREETS.
            </span>
          </h2>

          {/* Body Description */}
          <p className="font-body text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl font-normal">
            We tore up conventional high-street sizing. Our garments are re-engineered
            from the yarn up: breathing through tropical humidity while retaining
            structural weight, boxy silhouettes, and dramatic drops.
          </p>

          {/* Two Dark Micro Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Feature 1 */}
            <div className="bg-[#212121] border border-neutral-800/80 p-5 rounded-none hover:border-neutral-700 transition-colors">
              <h3 className="font-headline text-xs font-bold uppercase tracking-wider text-white mb-2">
                ANTI-CLING FABRIC
              </h3>
              <p className="font-body text-[11.5px] text-neutral-400 leading-relaxed font-normal">
                Custom open-structure weaves engineered for maximum ventilation and zero cling.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#212121] border border-neutral-800/80 p-5 rounded-none hover:border-neutral-700 transition-colors">
              <h3 className="font-headline text-xs font-bold uppercase tracking-wider text-white mb-2">
                MICRO-RESTOCKS ONLY
              </h3>
              <p className="font-body text-[11.5px] text-neutral-400 leading-relaxed font-normal">
                Never overproduced. Every silhouette is capped to prevent fast-fashion overflow.
              </p>
            </div>
          </div>

          {/* Neon Action CTA Button */}
          <div className="pt-2">
            <a
              href="#blueprint"
              className="font-label group inline-flex items-center justify-center gap-2.5 bg-[#cbfb45] hover:bg-[#bbf030] text-black px-7 py-4 text-xs font-black uppercase tracking-[0.2em] transition-all duration-200 active:scale-[0.98] shadow-lg cursor-pointer"
            >
              <span>READ THE DESIGN BLUEPRINT</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ReadPage;