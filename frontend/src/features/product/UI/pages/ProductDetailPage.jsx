import React, { useState } from "react";
import {
  Star,
  Heart,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  Ruler,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Tag,
  Zap,
  Info,
  Maximize2,
  Check,
} from "lucide-react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

// Mock data matching your exact database schema
const SAMPLE_PRODUCT = {
  _id: "6ab789490b5a97f30f420a5b",
  title: "Classic Cotton Casual T-Shirt",
  description:
    "A comfortable and breathable 100% organic cotton t-shirt, perfect for everyday casual wear. Features a modern fit and durable stitching.",
  images: [
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=80",
  ],
  price: {
    current: 2199,
    original: 3499,
  },
  sizes: [
    { size: "S", stock: 15 },
    { size: "M", stock: 30 },
    { size: "L", stock: 25 },
  ],
};

const ProductDetailsPage = ( ) => {

    const { id } = useParams()
    const { products } = useSelector(store => store.allProduct);

    const product = products.find(p => p._id === id)
    console.log(product)

  // 1. Gallery State
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // 2. Size & Stock State (Defaults to first size available)
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]?.size || "M");
  const [isWishlisted, setIsWishlisted] = useState(false);

  // 3. Pincode Check State
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState(null);

  // 4. Accordion States
  const [openAccordion, setOpenAccordion] = useState("craftsmanship");

  // Calculate discount percentage dynamically from price object
  const currentPrice = product?.price?.ammount;
  const originalPrice = product?.price?.ammount ?? 3499;
  const discountPercent = originalPrice > currentPrice
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  // Find currently selected size object to check stock
  const currentSizeObj = product?.sizes?.find((s) => s.size === selectedSize);
  const totalStock = product?.sizes?.reduce((acc, curr) => acc + (curr.stock || 0), 0) || 0;

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      setPincodeStatus("Available! Delivery in 3-5 business days across India.");
    } else {
      setPincodeStatus("Please enter a valid 6-digit PIN code.");
    }
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <main className="w-full bg-[#fafafa] text-black min-h-screen py-6 sm:py-10 px-4 sm:px-6 lg:px-12 selection:bg-[#cbfb45] selection:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: PRODUCT IMAGERY (Sticky on Desktop)          */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4 lg:sticky lg:top-24 h-fit">
            
            {/* Thumbnail Strip */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible shrink-0 pb-2 sm:pb-0 scrollbar-none">
              {product.images?.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-20 sm:w-20 sm:h-24 bg-neutral-100 overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-black shadow-sm"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>

            {/* Main Featured Image Canvas */}
            <div className="relative flex-1 aspect-3/4 sm:aspect-4/5 w-full bg-neutral-100 overflow-hidden border border-neutral-200">
              <img
                src={product.images?.[activeImageIndex] || product.images?.[0]}
                alt={product.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
              />

              {/* Top-Left Streetwear Drop Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                <span className="font-label bg-black text-white text-[9px] font-black tracking-widest px-2.5 py-1 uppercase shadow-sm">
                  BESTSELLER
                </span>
                <span className="font-label bg-[#cbfb45] text-black text-[9px] font-black tracking-widest px-2.5 py-1 uppercase shadow-sm">
                  NEW DROP
                </span>
              </div>

              {/* Bottom Image Counter */}
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-xs text-white font-label text-[10px] font-bold tracking-widest px-2.5 py-1">
                {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                {String(product.images?.length || 1).padStart(2, "0")}
              </div>

              {/* Fullscreen Zoom Icon */}
              <button
                type="button"
                className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-xs flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors shadow-sm cursor-pointer"
                aria-label="Inspect Full Image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: PRODUCT META, SIZES, ACTIONS & ACCORDIONS   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            
            {/* Top Inventory & SKU Bar */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                {totalStock > 0 && totalStock <= 70 && (
                  <span className="inline-flex items-center gap-1.5 bg-rose-50 text-[#e11d48] border border-rose-200/60 px-2.5 py-1 text-[10px] font-label font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48] animate-ping" />
                    SELLING FAST: {totalStock} LEFT
                  </span>
                )}
                <span className="font-label text-[10px] uppercase text-neutral-400 font-semibold tracking-wider">
                  SKU: {String(product._id).slice(-8).toUpperCase()}
                </span>
              </div>

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="p-1.5 text-neutral-600 hover:text-black transition-colors"
                aria-label="Save to wishlist"
              >
                <Heart
                  className={`w-5 h-5 transition-transform active:scale-90 ${
                    isWishlisted ? "fill-[#e11d48] text-[#e11d48]" : "text-black"
                  }`}
                />
              </button>
            </div>

            {/* Product Title */}
            <h1 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-900 leading-[1.08] mb-3">
              {product.title}
            </h1>

            {/* Rating & Recommendation Tag */}
            <div className="flex items-center gap-3 pb-4 border-b border-neutral-200 text-xs">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-label font-bold text-neutral-900 ml-1">4.9</span>
                <span className="font-body text-neutral-500">(482 REVIEWS)</span>
              </div>
              <span className="text-neutral-300">•</span>
              <span className="font-label text-[10px] font-bold text-neutral-600 uppercase tracking-wider bg-neutral-100 px-2 py-0.5">
                96% RECOMMENDED FIT
              </span>
            </div>

            {/* Pricing Section */}
            <div className="py-5 flex items-baseline gap-3">
              <span className="font-headline text-3xl sm:text-4xl font-black text-black tracking-tight">
                ₹{currentPrice.toLocaleString("en-IN")}
              </span>
              {originalPrice > currentPrice && (
                <span className="font-body text-sm sm:text-base text-neutral-400 line-through">
                  ₹{originalPrice.toLocaleString("en-IN")}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="font-label text-xs font-black bg-[#e11d48] text-white px-2 py-0.5 uppercase tracking-wider">
                  {discountPercent}% OFF
                </span>
              )}
              <span className="font-body text-[11px] text-neutral-400 uppercase tracking-wider ml-auto">
                INCLUSIVE OF ALL TAXES
              </span>
            </div>

            {/* Size Selector Strip */}
            <div className="pt-2 pb-6 border-b border-neutral-200">
              <div className="flex items-center justify-between mb-3">
                <span className="font-label text-xs font-bold uppercase tracking-wider text-black">
                  SELECT SIZE: <span className="font-black text-black ml-1">{selectedSize}</span>
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="font-label text-[11px] font-bold uppercase tracking-wider text-neutral-600 hover:text-black flex items-center gap-1 underline underline-offset-4"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>SIZE GUIDE</span>
                  </button>
                  <button
                    type="button"
                    className="font-label text-[11px] font-bold uppercase tracking-wider text-[#e11d48] flex items-center gap-1"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FIND FIT (AI)</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Size Buttons mapped from product.sizes */}
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {product.sizes?.map((item) => {
                  const isSelected = selectedSize === item.size;
                  const isOutOfStock = item.stock <= 0;

                  return (
                    <button
                      key={item.size}
                      type="button"
                      disabled={isOutOfStock}
                      onClick={() => setSelectedSize(item.size)}
                      className={`relative py-3.5 flex flex-col items-center justify-center text-xs font-label font-bold uppercase transition-all border cursor-pointer ${
                        isSelected
                          ? "bg-black text-white border-black shadow-sm"
                          : isOutOfStock
                          ? "bg-neutral-100 text-neutral-300 border-neutral-200 cursor-not-allowed line-through"
                          : "bg-white text-black border-neutral-300 hover:border-black"
                      }`}
                    >
                      {/* Popular pill or low-stock warning */}
                      {item.stock > 0 && item.stock <= 15 && (
                        <span className="absolute -top-2 bg-[#e11d48] text-white text-[8px] font-black px-1.5 py-0.2 tracking-tighter uppercase shadow-xs">
                          {item.stock} LEFT
                        </span>
                      )}
                      <span>{item.size}</span>
                    </button>
                  );
                })}
              </div>

              {/* Fit Guidance Note */}
              <div className="mt-3 flex items-start gap-2 text-[11.5px] font-body text-neutral-500">
                <Info className="w-3.5 h-3.5 mt-0.5 text-neutral-400 shrink-0" />
                <span>
                  Model is 6'1" (185cm), wearing size <strong>{selectedSize}</strong> (Modern Casual Cut).
                </span>
              </div>
            </div>

            {/* CTA Buttons: Add to Bag & Buy Now */}
            <div className="grid py-6">
              <button
                type="button"
                onClick={() => onAddToCart && onAddToCart(product, selectedSize)}
                className="font-label bg-black hover:bg-neutral-900 active:scale-[0.98] text-white py-4 px-6 text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#cbfb45]" />
                <span>ADD TO BAG — ₹{currentPrice.toLocaleString("en-IN")}</span>
              </button>

            
            </div>

            {/* Trust Proposition Badges */}
            <div className="grid grid-cols-3 gap-2 bg-[#f4f4f6] p-3 text-center border border-neutral-200/80 mb-6">
              <div className="flex flex-col items-center">
                <Truck className="w-4 h-4 text-black mb-1" />
                <span className="font-label text-[10px] font-bold uppercase text-black">FREE SHIPPING</span>
                <span className="font-body text-[9px] text-neutral-500">On prepaid orders</span>
              </div>
              <div className="flex flex-col items-center border-x border-neutral-200">
                <RotateCcw className="w-4 h-4 text-black mb-1" />
                <span className="font-label text-[10px] font-bold uppercase text-black">7-DAY RETURNS</span>
                <span className="font-body text-[9px] text-neutral-500">Doorstep pickups</span>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-4 h-4 text-black mb-1" />
                <span className="font-label text-[10px] font-bold uppercase text-black">100% GENUINE</span>
                <span className="font-body text-[9px] text-neutral-500">Direct from factory</span>
              </div>
            </div>

            {/* Pincode Estimate & COD Checker */}
            <div className="mb-6">
              <label className="font-label text-[11px] font-bold uppercase tracking-wider text-black block mb-1.5">
                CHECK PINCODE ESTIMATE & COD
              </label>
              <form onSubmit={handlePincodeCheck} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                  placeholder="ENTER 6-DIGIT PINCODE"
                  className="font-label w-full bg-white border border-neutral-300 focus:border-black rounded-none px-4 py-3 text-xs tracking-wider text-black placeholder:text-neutral-400 outline-none uppercase"
                />
                <button
                  type="submit"
                  className="font-label bg-black text-white hover:bg-neutral-800 px-6 py-3 text-xs font-bold uppercase tracking-widest cursor-pointer shrink-0"
                >
                  CHECK
                </button>
              </form>
              {pincodeStatus && (
                <p className="font-body text-[11px] text-neutral-600 mt-2 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  {pincodeStatus}
                </p>
              )}
            </div>

            {/* Promo & Offer Callout Cards */}
            <div className="space-y-2.5 mb-8">
              <div className="bg-rose-50/70 border border-rose-200/80 p-3.5 flex items-start gap-3">
                <Tag className="w-4 h-4 text-[#e11d48] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-label text-xs font-bold uppercase tracking-wider text-neutral-900">
                    USE CODE: SNITCH15
                  </h4>
                  <p className="font-body text-[11px] text-neutral-600">
                    Get extra 15% OFF on minimum drop carts over ₹2,999.
                  </p>
                </div>
              </div>

              <div className="bg-lime-50/80 border border-lime-200/80 p-3.5 flex items-start gap-3">
                <Zap className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-label text-xs font-bold uppercase tracking-wider text-neutral-900">
                    BUY 2 DROP STYLES, GET 10% OFF
                  </h4>
                  <p className="font-body text-[11px] text-neutral-600">
                    Automatic markdown at checkout. Mix and match across all streetwear drops.
                  </p>
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* PRODUCT ACCORDIONS (Fabric, Styling, Care, Returns)       */}
            {/* ========================================================= */}
            <div className="border-t border-neutral-200 divide-y divide-neutral-200">
              
              {/* Accordion 1: Fabric & Craftsmanship (uses description from DB) */}
              <div className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion("craftsmanship")}
                  className="w-full flex items-center justify-between font-label text-xs font-bold uppercase tracking-wider text-black cursor-pointer text-left"
                >
                  <span>FABRIC & CRAFTSMANSHIP</span>
                  {openAccordion === "craftsmanship" ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {openAccordion === "craftsmanship" && (
                  <div className="pt-4 space-y-4">
                    {/* Specification Grid */}
                    <div className="grid grid-cols-2 gap-3 bg-[#f8f9fa] p-3 text-xs">
                      <div>
                        <span className="font-label text-[10px] text-neutral-400 uppercase block font-bold">
                          FABRIC WEIGHT
                        </span>
                        <span className="font-body text-neutral-900 font-semibold">240 GSM Organic</span>
                      </div>
                      <div>
                        <span className="font-label text-[10px] text-neutral-400 uppercase block font-bold">
                          MATERIAL BLEND
                        </span>
                        <span className="font-body text-neutral-900 font-semibold">100% Combed Cotton</span>
                      </div>
                      <div>
                        <span className="font-label text-[10px] text-neutral-400 uppercase block font-bold">
                          WASH TREATMENT
                        </span>
                        <span className="font-body text-neutral-900 font-semibold">Bio-Washed Finish</span>
                      </div>
                      <div>
                        <span className="font-label text-[10px] text-neutral-400 uppercase block font-bold">
                          HEMLINE
                        </span>
                        <span className="font-body text-neutral-900 font-semibold">Reinforced Flatlock</span>
                      </div>
                    </div>

                    {/* Database description mapped here */}
                    <p className="font-body text-xs text-neutral-600 leading-relaxed font-normal">
                      {product.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Fit & Styling Notes */}
              <div className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion("fit")}
                  className="w-full flex items-center justify-between font-label text-xs font-bold uppercase tracking-wider text-black cursor-pointer text-left"
                >
                  <span>FIT & STYLING NOTES</span>
                  {openAccordion === "fit" ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {openAccordion === "fit" && (
                  <div className="pt-3 font-body text-xs text-neutral-600 leading-relaxed">
                    Designed with relaxed dropped shoulders and a boxy torso cut. Style with wide-leg carpenter cargos or raw-edge denim for an effortless street silhouette.
                  </div>
                )}
              </div>

              {/* Accordion 3: Wash Care */}
              <div className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion("care")}
                  className="w-full flex items-center justify-between font-label text-xs font-bold uppercase tracking-wider text-black cursor-pointer text-left"
                >
                  <span>WASH CARE</span>
                  {openAccordion === "care" ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {openAccordion === "care" && (
                  <div className="pt-3 font-body text-xs text-neutral-600 leading-relaxed">
                    Cold machine wash with like colors inside out. Do not tumble dry. Medium warm iron avoiding prints and labels.
                  </div>
                )}
              </div>

              {/* Accordion 4: Easy 7-Day Returns */}
              <div className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion("returns")}
                  className="w-full flex items-center justify-between font-label text-xs font-bold uppercase tracking-wider text-black cursor-pointer text-left"
                >
                  <span>EASY 7-DAY RETURNS & EXCHANGES</span>
                  {openAccordion === "returns" ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {openAccordion === "returns" && (
                  <div className="pt-3 font-body text-xs text-neutral-600 leading-relaxed">
                    Hassle-free reverse pick-up within 7 days of delivery. Instant store credits or bank transfer refunds upon doorstep item handover.
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;