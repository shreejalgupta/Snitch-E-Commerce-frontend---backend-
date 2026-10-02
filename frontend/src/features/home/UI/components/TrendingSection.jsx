import React, { useState } from "react";
import { Flame, ArrowRight } from "lucide-react";
import { ProductCard } from "../../../../shared/UI/components/ProductCard";
import { useSelector } from "react-redux";

// Mock dataset for Trending / Best Sellers
const TRENDING_PRODUCTS = [
  {
    id: "p1",
    title: "WASHED CHARCOAL ACID TEE",
    subtitle: "OVERSIZED STREETWEAR FIT",
    category: "oversized",
    price: 1299,
    originalPrice: 1999,
    discount: "35% OFF",
    rating: "4.8",
    reviewsCount: 340,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    badges: [
      { text: "BESTSELLER", bg: "bg-black text-white" },
      { text: "TRENDING", bg: "bg-[#cbfb45] text-black" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "p2",
    title: "TEXTURED CUBAN COLLAR SHIRT",
    subtitle: "RELAXED RESORT SILHOUETTE",
    category: "shirts",
    price: 1899,
    originalPrice: 2499,
    discount: "24% OFF",
    rating: "4.9",
    reviewsCount: 112,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    badges: [{ text: "NEW DROP", bg: "bg-[#cbfb45] text-black" }],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "p3",
    title: "WIDE LEG RAW EDGE JEANS",
    subtitle: "WIDE SKATER FIT",
    category: "bottoms",
    price: 2799,
    originalPrice: 3599,
    discount: "22% OFF",
    rating: "4.7",
    reviewsCount: 98,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    badges: [{ text: "HOT SELLER", bg: "bg-[#e11d48] text-white" }],
    sizes: ["30", "32", "34", "36"],
  },
  {
    id: "p4",
    title: "LUXE TEXTURED WAFFLE KNIT POLO",
    subtitle: "BREATHABLE TEXTURED KNIT",
    category: "shirts",
    price: 1699,
    originalPrice: 2299,
    discount: "26% OFF",
    rating: "4.9",
    reviewsCount: 86,
    image:
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
    badges: [{ text: "LIMITED", bg: "bg-black text-white" }],
    sizes: ["S", "M", "L", "XL"],
  },
];

const TrendingSection = () => {
  const { products } = useSelector((store) => store.allProduct);
  const trendingProduct = products?.slice(0, 4);
  return (
    <section className="w-full bg-[#f8f9fa] py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            {/* Top Velocity Tag */}
            <div className="flex items-center gap-1.5 text-[#e11d48] font-label text-[11px] font-bold uppercase tracking-[0.2em] mb-2.5">
              <Flame className="w-3.5 h-3.5 fill-[#e11d48]" />
              <span>HIGH DEMAND VELOCITY</span>
            </div>

            {/* Headline */}
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
              TRENDING NOW{" "}
              <span className="text-neutral-400 font-light">//</span> BEST
              SELLERS
            </h2>
          </div>

          {/* Category Filter Tabs */}
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid place-items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-4  gap-6 ">
          {trendingProduct?.map((product) => (
            <ProductCard
              title={product.title}
              price={product.price.ammount}
              image={product.images[0]}
              id={product._id}
              sizes={product.sizes}
            />
          ))}
        </div>

        {/* --- BOTTOM ARCHIVE CTA BUTTON --- */}
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            className="font-label group inline-flex items-center justify-center gap-3 bg-black hover:bg-neutral-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>VIEW COMPLETE ARCHIVE (280+ ITEMS)</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
