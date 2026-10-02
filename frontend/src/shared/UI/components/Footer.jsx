import React, { useState } from "react";

const FOOTER_LINKS = {
  collections: [
    { label: "New Drops", href: "#new-drops" },
    { label: "Oversized Tees", href: "#oversized-tees" },
    { label: "Cargo & Parachute", href: "#cargo-parachute" },
    { label: "Resort & Cuban Shirts", href: "#resort-cuban-shirts" },
    { label: "Co-ord Sets", href: "#co-ord-sets" },
    { label: "Luxe Formals", href: "#luxe-formals" },
  ],
  assistance: [
    { label: "Track Order", href: "#track-order" },
    { label: "Return & Exchange", href: "#return-exchange" },
    { label: "Size Guide", href: "#size-guide" },
    { label: "Shipping Policy", href: "#shipping-policy" },
    { label: "Customer Support", href: "#customer-support" },
  ],
  brandStory: [
    { label: "About Snitch", href: "#about" },
    { label: "Store Locator", href: "#stores" },
    { label: "Conscious Craft", href: "#craft" },
    { label: "Careers at Snitch", href: "#careers" },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="w-full bg-[#171717] text-white pt-16 pb-10 px-6 sm:px-10 lg:px-16 selection:bg-[#cbfb45] selection:text-black border-t border-neutral-800">
      <div className="max-w-[1580px] mx-auto">
        {/* ================= 1. VIP ACCESS & NEWSLETTER SUBSCRIPTION ROW ================= */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 pb-16 border-b border-neutral-800/80">
          {/* Left: VIP Access Headline & Copy */}
          <div className="max-w-xl">
            <span className="font-label text-[11px] font-bold uppercase tracking-[0.25em] text-[#cbfb45] block mb-2.5">
              VIP ACCESS
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] text-white mb-4">
              GET 15% OFF YOUR FIRST DROP
            </h2>
            <p className="font-body text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
              Sign up to unlock secret street drops, private lookbooks, and early access codes.
            </p>
          </div>

          {/* Right: Newsletter Input Field + Join Drop Button */}
          <div className="w-full lg:w-auto lg:min-w-[480px]">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full gap-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL ADDRESS"
                className="w-full bg-[#2a2a2a] text-white placeholder:text-neutral-500 font-label text-xs tracking-wider px-5 py-4 uppercase outline-none border border-[#2a2a2a] focus:border-neutral-500 transition-colors"
              />
              <button
                type="submit"
                className="font-label bg-white hover:bg-neutral-200 active:scale-[0.99] text-black text-xs font-black uppercase tracking-[0.2em] px-8 py-4 shrink-0 transition-colors cursor-pointer shadow-sm mt-2 sm:mt-0"
              >
                {isSubscribed ? "JOINED ✓" : "JOIN DROP"}
              </button>
            </form>
          </div>
        </div>

        {/* ================= 2. 4-COLUMN SITEMAP & COMMUNITY SECTION ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-neutral-800/80">
          {/* Column 1: Collections */}
          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-white mb-5">
              COLLECTIONS
            </h3>
            <ul className="space-y-3 font-body text-xs text-neutral-400">
              {FOOTER_LINKS.collections.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Assistance */}
          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-white mb-5">
              ASSISTANCE
            </h3>
            <ul className="space-y-3 font-body text-xs text-neutral-400">
              {FOOTER_LINKS.assistance.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Brand Story */}
          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-white mb-5">
              BRAND STORY
            </h3>
            <ul className="space-y-3 font-body text-xs text-neutral-400">
              {FOOTER_LINKS.brandStory.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Community & Social Buttons */}
          <div>
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-white mb-5">
              COMMUNITY
            </h3>
            <p className="font-body text-xs text-neutral-400 leading-relaxed mb-6 font-normal">
              Tag @snitch.co.in in your raw street fits to be featured across our global lookbook.
            </p>

            {/* Social Block Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="font-label bg-[#262626] hover:bg-neutral-800 text-neutral-300 hover:text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 transition-colors duration-200"
              >
                INSTAGRAM
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="font-label bg-[#262626] hover:bg-neutral-800 text-neutral-300 hover:text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 transition-colors duration-200"
              >
                YOUTUBE
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="font-label bg-[#262626] hover:bg-neutral-800 text-neutral-300 hover:text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 transition-colors duration-200"
              >
                PINTEREST
              </a>
            </div>
          </div>
        </div>

        {/* ================= 3. BOTTOM COPYRIGHT & LEGAL BAR ================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-[11px] font-label text-neutral-500 uppercase tracking-widest">
          <p>© 2025 SNITCH APPAREL PVT. LTD. ALL RIGHTS RESERVED.</p>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#privacy" className="hover:text-neutral-300 transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#terms" className="hover:text-neutral-300 transition-colors">
              TERMS OF SERVICE
            </a>
            <a href="#security" className="hover:text-neutral-300 transition-colors">
              SECURITY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;