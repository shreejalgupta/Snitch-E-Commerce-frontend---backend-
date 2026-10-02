import React from "react";
import { Plus, Minus } from "lucide-react";

const InventoryAllocationCard = ({
  sizes,
  setSizes,
  totalStock,
  onStockDelta,
  onClearStock,
  onBatchAdjust,
}) => {
  return (
    <div className="bg-white border border-neutral-200/90 p-6 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-5 border-b border-neutral-100 gap-3">
        <div className="flex items-center gap-2.5">
          <span className="font-label bg-black text-white text-[10px] font-black px-2 py-0.5 tracking-widest">
            04
          </span>
          <h2 className="font-headline text-sm font-black uppercase tracking-wider text-black">
            SIZE ENUM & STOCK INVENTORY ALLOCATION
          </h2>
        </div>
        <span className="font-label text-[10px] uppercase font-mono font-bold bg-[#e11d48] text-white px-2.5 py-1 tracking-wider self-start sm:self-auto">
          TOTAL STOCK: {totalStock} UNITS
        </span>
      </div>

      {/* Batch Shortcuts */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <p className="font-body text-xs text-neutral-500">
          Full enum schema distribution:{" "}
          <strong className="text-black font-mono">
            ["XS", "S", "M", "L", "XL", "XXL"]
          </strong>
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onBatchAdjust(20)}
            className="font-label text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 text-black transition-colors cursor-pointer"
          >
            +20 ALL SIZES
          </button>
          <button
            type="button"
            onClick={() => onBatchAdjust(50)}
            className="font-label text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 text-black transition-colors cursor-pointer"
          >
            +50 ALL SIZES
          </button>
          <button
            type="button"
            onClick={() => onBatchAdjust(-10000)}
            className="font-label text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-neutral-100 hover:bg-rose-100 hover:text-rose-600 text-neutral-500 transition-colors cursor-pointer"
          >
            RESET ZERO
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-neutral-200 text-[10px] font-label font-bold text-neutral-400 uppercase tracking-widest">
              <th className="py-2.5 px-3">SIZE BADGE</th>
              <th className="py-2.5 px-3">SKU GENERATOR (LIVE)</th>
              <th className="py-2.5 px-3 text-center">ALLOCATED UNITS</th>
              <th className="py-2.5 px-3 text-center">STOCK STATUS</th>
              <th className="py-2.5 px-3 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 font-body text-xs">
            {sizes.map((item) => {
              const skuCode = `SNT-25-RAW-OVR-${item.size}`;
              const stock = Number(item.stock) || 0;

              let statusLabel = "HEALTHY";
              let statusBg = "bg-neutral-100 text-neutral-700";

              if (stock > 50) {
                statusLabel = "HOT VOLUME";
                statusBg = "bg-[#cbfb45] text-black font-bold";
              } else if (stock <= 10 && stock > 0) {
                statusLabel = "LOW BATCH";
                statusBg = "bg-rose-100 text-[#e11d48] font-bold";
              } else if (stock === 0) {
                statusLabel = "DEPLETED";
                statusBg = "bg-neutral-200 text-neutral-400";
              }

              return (
                <tr key={item.size} className="hover:bg-neutral-50/50 transition-colors">
                  <td className="py-3 px-3">
                    <span className="font-label w-8 h-8 bg-black text-white text-xs font-black flex items-center justify-center uppercase">
                      {item.size}
                    </span>
                  </td>

                  <td className="py-3 px-3 font-mono text-[11px] text-neutral-600 font-medium">
                    {skuCode}
                  </td>

                  <td className="py-3 px-3">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => onStockDelta(item.size, -5)}
                        className="w-7 h-7 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center cursor-pointer transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <input
                        type="number"
                        min="0"
                        value={stock}
                        onChange={(e) =>
                          setSizes((prev) =>
                            prev.map((s) =>
                              s.size === item.size
                                ? { ...s, stock: Math.max(0, parseInt(e.target.value) || 0) }
                                : s
                            )
                          )
                        }
                        className="w-14 text-center font-mono font-bold text-xs bg-[#f4f4f7] py-1 border border-neutral-200 outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => onStockDelta(item.size, 5)}
                        className="w-7 h-7 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center cursor-pointer transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </td>

                  <td className="py-3 px-3 text-center">
                    <span className={`font-label text-[9.5px] uppercase tracking-wider px-2 py-0.5 ${statusBg}`}>
                      {statusLabel}
                    </span>
                  </td>

                  <td className="py-3 px-3 text-right">
                    <button
                      type="button"
                      onClick={() => onClearStock(item.size)}
                      className="font-label text-[10px] uppercase font-bold text-neutral-400 hover:text-black tracking-wider cursor-pointer"
                    >
                      CLEAR
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryAllocationCard;