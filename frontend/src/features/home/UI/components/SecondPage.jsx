import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ShoppingBag, 
  Heart, 
  Eye, 
  Check, 
  Sparkles,
  Zap
} from 'lucide-react';
import productHook from '../../../../shared/hooks/ProductHook';
import { CategoryCard } from '../../../../shared/UI/components/CategoryCard';




/* =======================================================================
   3. MAIN SECTION: SHOP BY CATEGORY (Matches Reference Image)
   ======================================================================= */

export default function SecondPage() {
  const [activeTab, setActiveTab] = useState('category'); // 'category' | 'productDemo'
  const sliderRef = useRef(null);

  // Exact 5 Categories from the reference image
  const categories = [
    {
      id: 1,
      title: 'OVERSIZED BOXY TEES',
      subtitle: 'STYLES AVAILABLE',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      
    },
    {
      id: 2,
      title: 'CUBAN & TEXTURED SHIRTS',
      subtitle: 'STYLES AVAILABLE',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
      
    },
    {
      id: 3,
      title: 'PARACHUTE & KOREAN CARGOS',
      subtitle: 'STYLES AVAILABLE',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
      
    },
    {
      id: 4,
      title: 'LUXE KNITWEAR & POLOS',
      subtitle: 'STYLES AVAILABLE',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
      
    },
    {
      id: 5,
      title: 'STREET CO-ORD SETS',
      subtitle: 'STYLES AVAILABLE',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      
    },
  ];

  const { getAllProduct } = productHook();

  useEffect(() => { getAllProduct() }, [])

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-black font-body antialiased selection:bg-[#cbfb45] selection:text-black ">

      {/* Showcase Mode Switcher (Demonstrating both components) */}
      <div className="bg-neutral-100 border-b border-neutral-200 px-4 py-2.5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#cbfb45]" />
            <span className="font-label text-[11px] font-bold uppercase tracking-wider text-neutral-600">
              COMPONENT VIEW MODE:
            </span>
          </div>

          <div className="flex items-center gap-1 font-label">
            <button
              onClick={() => setActiveTab('category')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'category'
                  ? 'bg-black text-white'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Shop by Category Section
            </button>
            
          </div>
        </div>
      </div>

     
        {/* =======================================================================
           ACTUAL "SHOP BY CATEGORY" SECTION (IMAGE ACCURATE)
           ======================================================================= */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
          
          {/* Header Area */}
          <div className="flex items-end justify-between mb-8 sm:mb-10 pb-2">
            <div>
              {/* Catalogue Deconstruction Subtitle */}
              <p className="font-label text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-neutral-500 uppercase mb-1">
                CATALOGUE DECONSTRUCTION
              </p>

              {/* Main Headline */}
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
                SHOP BY CATEGORY
              </h2>
            </div>

            {/* Slider Navigation Buttons (< and >) */}
            <div className="flex items-center gap-1 font-label">
              <button
                type="button"
                onClick={scrollLeft}
                aria-label="Previous slide"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-neutral-100 hover:bg-black text-black hover:text-white flex items-center justify-center transition-colors duration-200 cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={scrollRight}
                aria-label="Next slide"
                className="w-10 h-10 sm:w-11 sm:h-11 bg-neutral-100 hover:bg-black text-black hover:text-white flex items-center justify-center transition-colors duration-200 cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Cards Carousel Container */}
          <div
            ref={sliderRef}
            className="flex items-stretch gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => (
              <CategoryCard
                key={cat.id}
                title={cat.title}
                subtitle={cat.subtitle}
                image={cat.image}
                
                href={`#${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
              />
            ))}
          </div>

          {/* Bottom Mobile Scroll Indicator Helper */}
          <div className="mt-4 flex sm:hidden items-center justify-center gap-1.5 text-neutral-400 font-label text-[10px] uppercase tracking-widest">
            <span>Swipe horizontally to view all</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </section>
   
        

    </div>
  );
}