import React, { useEffect, useState } from "react";
import {
  X,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import CartComponent from "../components/CartComponent";
import useCart from "../../hook/cartHook";
import { useSelector } from "react-redux";

const CartDrawer = ({ setIsCartOpen }) => {
  const {
    handleRemove,
    cartIs,
    totalPrice,
    bagCurrentTotal,
    shippingFee,
    finalPayable,
  } = useCart();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-body selection:bg-[#cbfb45] selection:text-black">
      {/* Dimmed Background Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <aside className="w-screen max-w-md bg-white text-black flex flex-col shadow-2xl relative border-l border-neutral-200">
          {/* ================= 1. HEADER ================= */}
          <div className="p-4 sm:p-5 flex items-center justify-between border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <h2 className="font-headline text-lg sm:text-xl font-black uppercase tracking-tight text-neutral-900">
                YOUR BAG
              </h2>
              <span className="font-label text-[10px] font-black bg-black text-[#cbfb45] px-2 py-0.5 rounded-none tracking-widest">
                {cartIs?.cart?.reduce((acc, curr) => acc + curr.quantity, 0)}{" "}
                ITEMS
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-neutral-600 hover:text-black transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ================= 2. FREE SHIPPING NOTIFIER ================= */}
          <div className="bg-[#fbfbfb] border-b border-neutral-200/80 px-4 py-3">
            <div className="flex items-center justify-between text-[11px] font-label font-bold uppercase mb-1.5">
              <span className="flex items-center gap-1.5 text-neutral-800">
                <Sparkles className="w-3.5 h-3.5 text-[#e11d48]" />
                YOU'VE UNLOCKED{" "}
                <span className="text-[#e11d48]">FREE EXPRESS SHIPPING!</span>
              </span>
              <span className="text-neutral-400 font-medium">MIN. ₹999</span>
            </div>
            {/* Progress Track */}
            <div className="w-full h-1.5 bg-neutral-200 rounded-none overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-500"
                style={{
                  width: `${Math.min(100, (bagCurrentTotal / 999) * 100)}%`,
                }}
              />
            </div>
          </div>

          {/* ================= 3. SCROLLABLE CART ITEMS & EXTRAS ================= */}
          <div className="flex-1 overflow-y-auto divide-y divide-neutral-100 px-4 sm:px-5">
            {/* List of Cart Items */}
            <div className="divide-y divide-neutral-100">
              {cartIs?.cart?.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="font-headline text-sm font-bold uppercase tracking-wider text-neutral-400">
                    Your drop bag is empty.
                  </p>
                </div>
              ) : (
                cartIs?.cart?.map((item) => (
                  <CartComponent
                    id={item?.productId}
                    title={item?.product?.title}
                    size={item?.size}
                    quantity={item?.quantity}
                    handleRemove={handleRemove}
                    images={item?.product?.images[0]}
                    price={item?.product?.price?.ammount}
                    stock={item?.product?.sizes}
                  />
                ))
              )}
            </div>

            {/* Order Breakdown / Bill Details */}
            <div className="py-4 space-y-2 text-xs font-body">
              <h4 className="font-label text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                ORDER BREAKDOWN
              </h4>
              <div className="flex justify-between text-neutral-600">
                <span>Bag Total (MRP)</span>
                <span className="font-medium text-neutral-900">
                  ₹{totalPrice}
                </span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Bag Discount</span>
                <span className="font-medium text-[#e11d48]">-₹0</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Delivery Fee</span>
                <span className="font-medium">
                  {shippingFee === 0 ? (
                    <span className="text-emerald-600 uppercase font-bold">
                      FREE{" "}
                      <span className="line-through text-neutral-400 font-normal">
                        ₹149
                      </span>
                    </span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>

              {/* Total Savings Highlight Pill */}
              <div className="bg-[#cbfb45] text-black font-label text-[10px] font-bold px-3 py-1.5 flex items-center justify-between uppercase tracking-wider mt-3">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  TOTAL SAVINGS
                </span>
                <span>You save ₹0 on this order!</span>
              </div>
            </div>
          </div>

          {/* ================= 4. FOOTER & CHECKOUT CTA ================= */}
          <div className="p-4 sm:p-5 border-t border-neutral-200 bg-white">
            <div className="flex items-baseline justify-between mb-3.5">
              <span className="font-label text-xs font-bold uppercase tracking-wider text-neutral-800">
                SUBTOTAL PAYABLE
              </span>
              <span className="font-headline text-2xl font-black text-black">
                ₹{finalPayable.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Checkout Action Button */}
            <button
              type="button"
              disabled={cartIs?.cart?.length === 0}
              className="w-full font-label bg-black hover:bg-neutral-900 active:scale-[0.99] text-white py-4 px-6 text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <span>PROCEED TO SECURE CHECKOUT</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Trust Micro-Row */}
            <div className="flex items-center justify-center gap-4 text-[9.5px] font-label uppercase text-neutral-500 tracking-wider pt-3">
              <span className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-black" />
                EXPRESS DISPATCH
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <RotateCcw className="w-3 h-3 text-black" />7 DAYS RETURN &
                EXCHANGE
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-black" />
                100% SECURE
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CartDrawer;
