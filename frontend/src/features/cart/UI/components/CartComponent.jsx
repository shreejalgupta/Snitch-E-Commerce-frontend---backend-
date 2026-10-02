import { Minus, Plus, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import productHook from "../../../../shared/hooks/ProductHook";
import useCart from "../../hook/cartHook";
import { useDispatch, useSelector } from "react-redux";
import { setCartValue } from "../../state/cartSlice";

const CartComponent = ({
  id,
  size,
  quantity,
  handleRemove,
  title,
  images,
  price,
  stock
}) => {
  const {handleQuantity, handleQuantityDec, isLoding} = useCart()
  const stocks = stock?.find(p => p.size === size);
  return (
    <div key={id} className="py-4 flex gap-3.5 group">
      {/* Item Thumbnail */}
      <div className="w-20 h-24 bg-neutral-100 shrink-0 overflow-hidden border border-neutral-200">
        <img
          src={images}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Item Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-headline text-[11.5px] font-bold uppercase tracking-tight text-neutral-900 line-clamp-1">
              {title}
            </h3>
            <p className="font-label text-[10px] text-neutral-500 uppercase tracking-wider mt-0.5">
              SIZE: {size} <span className="mx-1 text-neutral-300">|</span>{" "}
            </p>
          </div>

          {/* Remove Button */}
          <button
            type="button"
            disabled={isLoding}
            onClick={() => handleRemove(id, size)}
            className="text-neutral-400 hover:text-neutral-900 p-0.5 transition-colors cursor-pointer"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Quantity & Price Row */}
        <div className="flex items-center justify-between mt-3">
          {/* Stepper */}
          <div className="flex items-center border border-neutral-200 bg-white">
            <button
              type="button"
              disabled={isLoding || quantity <= 1}
              onClick={() => handleQuantityDec(id, size, quantity)}
              className="p-1 text-neutral-500 hover:text-black cursor-pointer"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="font-label text-xs font-bold px-2.5 py-0.5 text-black">
              {quantity}
            </span>
            <button
              type="button"
              disabled={isLoding || quantity === stocks.stock }
              onClick={() => handleQuantity(id, size, quantity, stock=stocks.stock)}
              className="p-1 text-neutral-500 hover:text-black cursor-pointer"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <span className="font-headline text-xs font-black text-black">
              ₹{(price * quantity).toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
