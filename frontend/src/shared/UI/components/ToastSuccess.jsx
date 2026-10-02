import { Check } from "lucide-react";
import React from "react";

const ToastSuccess = ({toastMsg}) => {
  return (
    <div className="mb-6 p-4 absolute bg-emerald-50 border-l-4 border-emerald-500 text-emerald-950 flex items-center justify-between text-xs font-medium top-20 right-0">
      <div className="flex items-center gap-2">
        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>{toastMsg}.</span>
      </div>
      <button
        onClick={() => setSubmittedData(null)}
        className="text-emerald-700 hover:text-emerald-950 font-bold ml-2 text-xs"
      >
        DISMISS
      </button>
    </div>
  );
};

export default ToastSuccess;
