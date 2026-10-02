import React, { useState, useEffect } from "react";
import { Navigate, NavLink,  } from "react-router";
import { Menu, X, LogOut, ShoppingBag } from "lucide-react";
import CartDrawer from "../../../features/cart/UI/pages/CartDrawer";
import { useSelector } from "react-redux";
import { useAuth } from "../../../features/auth/hooks/authHook";
import useNav from "../../hooks/navbarHook";

const Navbar = () => {
 const { 
    isOpen,
    setIsOpen,
    scrolled,
    isCartOpen,
    setIsCartOpen,
    navLinks,
    cart, 
    totalItems,
    logoutHandle
  } =  useNav()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 font-body ${
          scrolled
            ? "border-b border-neutral-200/80 shadow-sm backdrop-blur-md bg-white/90"
            : "border-b border-neutral-100"
        }`}
      >
        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* 1. BRAND LOGO - font-headline (Syne) */}
            <NavLink
              to="/"
              className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            >
              <div className="flex items-baseline">
                <span className="font-headline text-2xl sm:text-3xl font-black tracking-tight text-black uppercase transition-transform duration-200 group-hover:scale-[1.02]">
                  SNITCH
                </span>
                <span className="w-2.5 h-2.5 bg-[#e11d48] rounded-[1px] ml-0.5 animate-pulse" />
              </div>
            </NavLink>

            {/* 2. DESKTOP NAVIGATION - font-label (Space Grotesk) */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-label relative px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-200 group ${
                      isActive
                        ? "text-black"
                        : "text-neutral-500 hover:text-black"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10 flex items-center gap-1.5">
                        {link.name}
                        {link.badge !== undefined && link.badge > 0 && (
                          <span className="font-label inline-flex items-center justify-center h-4 min-w-4 px-1.5 text-[10px] font-bold bg-black text-[#cbfb45] rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </span>

                      {/* Smooth Underline Indicator */}
                      <span
                        className={`absolute bottom-0 left-4 right-4 h-0.5 bg-black transition-transform duration-300 ease-out origin-left ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
              <li
                className="font-label relative px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-200 group text-neutral-500 hover:text-black cursor-pointer list-none"
                onClick={() => setIsCartOpen(true)}
              >
                Cart
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-black transition-transform duration-300 ease-out origin-left ${
                    isCartOpen
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
                {totalItems > 0 && (
                  <span className="font-label absolute top-1 right-0 h-3.5 w-3.5 bg-black text-[#cbfb45] text-[9px] font-bold flex items-center justify-center">
                    {totalItems}
                  </span>
                ) }
              </li>
            </nav>

            {/* 3. DESKTOP ACTIONS - font-label (Space Grotesk) */}
            <div className="hidden md:flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  logoutHandle()
                 
                  }}
                className="font-label group relative inline-flex items-center gap-2 border border-neutral-200 hover:border-black bg-white hover:bg-black text-black hover:text-white px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 cursor-pointer shadow-sm hover:shadow"
              >
                <span>Logout</span>
                <LogOut className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* 4. MOBILE HAMBURGER BUTTON */}
            <div className="flex md:hidden items-center gap-2">
              <div
                className="relative p-2 text-neutral-800 hover:text-black"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="font-label absolute top-1 right-1 h-3.5 w-3.5 bg-black text-[#cbfb45] text-[9px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-black hover:bg-neutral-100 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 transition-transform duration-200 rotate-90" />
                ) : (
                  <Menu className="w-6 h-6 transition-transform duration-200" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 5. MOBILE ACCORDION / DRAWER MENU */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out border-t border-neutral-100 bg-white ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-4 py-5 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-label flex items-center justify-between p-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-neutral-100 text-black border-l-2 border-black"
                      : "text-neutral-600 hover:bg-neutral-50 hover:text-black"
                  }`
                }
              >
                <span>{link.name}</span>
                {link.badge !== undefined && link.badge > 0 && (
                  <span className="font-label px-2 py-0.5 text-xs font-bold bg-black text-[#cbfb45]">
                    {link.badge} Items
                  </span>
                )}
              </NavLink>
            ))}

            {/* Mobile Logout Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  if (logoutHandle){ 
                    logoutHandle()
                  };
                }}
                className="font-label w-full flex items-center justify-center gap-2 bg-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs md:hidden transition-opacity"
        />
      )}
      {isCartOpen && (
        <div className="absolute z-auto">
          <CartDrawer setIsCartOpen={setIsCartOpen} />
        </div>
      )}
    </>
  );
};

export default Navbar;
