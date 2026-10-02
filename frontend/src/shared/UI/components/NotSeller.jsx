import React from "react";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const NotSeller = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[50vh] min-h-[360px] flex items-center justify-center bg-[#fafafa] px-4 selection:bg-[#cbfb45] selection:text-black">
      <div className="max-w-md w-full bg-white border border-neutral-200/90 p-8 shadow-xs text-center flex flex-col items-center justify-center">
        
        {/* Warning Icon Badge */}
        <div className="w-12 h-12 rounded-none bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-4">
          <ShieldAlert className="w-6 h-6 text-[#e11d48]" />
        </div>

        {/* Status Tag */}
        <span className="font-label text-[10px] font-black uppercase tracking-[0.25em] text-neutral-400 mb-2">
          ACCESS RESTRICTED // 403
        </span>

        {/* Main Text */}
        <h1 className="font-headline text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 leading-tight mb-2">
          You are not a seller
        </h1>

        {/* Explanation Copy */}
        <p className="font-body text-xs text-neutral-500 leading-relaxed max-w-sm mb-6">
          This portal is reserved exclusively for verified SNITCH merchant accounts and creator studios.
        </p>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="font-label inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-900 active:scale-[0.98] text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-all cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO HOME</span>
        </button>

      </div>
    </div>
  );
};

export default NotSeller;