import React from "react";
import { Info } from "lucide-react";

const PricingArchitectureCard = ({ price, setPrice, currency, setCurrency }) => {
  const quickModifiers = [-100, -50, 50, 100];

  const handleAdjustPrice = (delta) => {
    setPrice((prev) => Math.max(0, Number(prev || 0) + delta));
  };

  return (
    <div className="bg-white border border-neutral-200/90 p-6 sm:p-7 shadow-xs">
      <div className="flex items-center justify-between pb-5 mb-6 border-b border-neutral-100">
        <div className="flex items-center gap-2.5">
          <span className="font-label bg-black text-white text-[10px] font-black px-2 py-0.5 tracking-widest">
            03
          </span>
          <h2 className="font-headline text-sm font-black uppercase tracking-wider text-black">
            COMMERCIAL PRICING ARCHITECTURE
          </h2>
        </div>
        <span className="font-label text-[10px] uppercase font-mono tracking-widest text-neutral-400">
          SCHEMA::PRICE OBJECT
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Amount */}
        <div className="md:col-span-7">
          <div className="flex items-center justify-between mb-2">
            <label className="font-label text-[11px] font-bold uppercase tracking-wider text-neutral-800">
              PRICE AMMOUNT (REQUIRED NUMBER) <span className="text-red-500">*</span>
            </label>
            <span className="font-label text-[10px] font-mono text-neutral-400">
              STEP: 50
            </span>
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-headline text-xl font-black text-black">
              {currency === "INR" ? "₹" : "$"}
            </span>
            <input
              type="number"
              value={price || ""}
              onChange={(e) => setPrice(Number(e.target.value) || 0)}
              className="font-headline w-full bg-[#f4f4f7] border border-neutral-300 focus:border-black rounded-none pl-10 pr-4 py-3 text-2xl font-black text-black outline-none tracking-tight"
            />
          </div>

          {/* Steppers */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3">
            {quickModifiers.map((mod) => (
              <button
                key={mod}
                type="button"
                onClick={() => handleAdjustPrice(mod)}
                className="font-mono text-[10px] font-bold px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
              >
                {mod > 0 ? `+${mod}` : mod}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPrice(2499)}
              className="font-label text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-black text-white hover:bg-neutral-800 cursor-pointer ml-auto"
            >
              SET 2,499
            </button>
          </div>
        </div>

        {/* Currency Enum */}
        <div className="md:col-span-5">
          <div className="flex items-center justify-between mb-2">
            <label className="font-label text-[11px] font-bold uppercase tracking-wider text-neutral-800">
              CURRENCY ENUM [INR, USD] <span className="text-red-500">*</span>
            </label>
            <span className="font-label text-[10px] font-mono text-[#65a30d] font-bold">
              DEFAULT: INR
            </span>
          </div>

          <div className="grid grid-cols-2 bg-[#f4f4f7] p-1 border border-neutral-300">
            <button
              type="button"
              onClick={() => setCurrency("INR")}
              className={`font-label text-xs font-bold uppercase tracking-wider py-2.5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                currency === "INR"
                  ? "bg-black text-white shadow-xs"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  currency === "INR" ? "bg-[#cbfb45]" : "bg-neutral-400"
                }`}
              />
              <span>INR (₹ RETAIL)</span>
            </button>

            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`font-label text-xs font-bold uppercase tracking-wider py-2.5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                currency === "USD"
                  ? "bg-black text-white shadow-xs"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  currency === "USD" ? "bg-[#cbfb45]" : "bg-neutral-400"
                }`}
              />
              <span>USD ($ GLOBAL)</span>
            </button>
          </div>

          <p className="font-body text-[11px] text-neutral-500 mt-3 flex items-start gap-1.5 leading-relaxed">
            <Info className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
            <span>
              Domestic GST (12%) and warehouse fulfillment duties automatically compiled into retail display.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingArchitectureCard;