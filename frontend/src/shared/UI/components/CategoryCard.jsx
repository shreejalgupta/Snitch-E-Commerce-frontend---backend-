/* =======================================================================
   1. REUSABLE CATEGORY CARD COMPONENT
   ======================================================================= */

import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

/**
 * CategoryCard
 * Reusable card tailored for high-street collections & lookbook discovery.
 * 
 * @param {string} title - Primary category title
 * @param {string} subtitle - Styles available count or descriptor
 * @param {string} image - High-res editorial photo URL
 * @param {string} href - Link target or onClick action
 */
export function CategoryCard({
  title,
  subtitle,
  image,
  href = '#',
  onClick
}) {
  const getBadgeStyles = (color) => {
    switch (color) {
      case 'lime':
        return 'bg-[#cbfb45] text-black';
      case 'crimson':
        return 'bg-[#e11d48] text-white';
      case 'black':
        return 'bg-black text-white';
      case 'white':
      default:
        return 'bg-white text-black shadow-sm';
    }
  };

  return (
    <NavLink
      to={'/products'}
      onClick={onClick}
      className="group block flex-shrink-0 w-[240px] sm:w-[260px] lg:w-[280px] xl:w-auto xl:flex-1 cursor-pointer select-none transition-all duration-300"
    >
      {/* Editorial Image Wrapper with subtle zoom effect */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center grayscale-[15%] contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
          loading="lazy"
        />


        {/* Subtle hover gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Card Info Section */}
      <div className="pt-3.5 pb-2 flex flex-col justify-between min-h-[108px]">
        <div>
          <h3 className="font-headline text-[13px] sm:text-[14px] font-black uppercase tracking-tight text-neutral-900 group-hover:text-black line-clamp-2 leading-snug">
            {title}
          </h3>
          <p className="font-label text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-500 mt-1">
            {subtitle}
          </p>
        </div>

        {/* Explore link row with smooth translating arrow */}
        <div className="pt-3 mt-1 flex items-center justify-between border-t border-transparent group-hover:border-neutral-100">
          <span className="font-label text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-neutral-900 transition-colors">
            EXPLORE
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-neutral-900 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
        </div>
      </div>
    </NavLink>
  );
}
