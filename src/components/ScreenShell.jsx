// src/components/ScreenShell.jsx
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

export default function ScreenShell({ title, onBack, children }) {
  return (
    <motion.div
      key={title}
      className="absolute inset-x-0 top-[80px] bottom-[80px] px-5 overflow-y-auto"
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      transition={{ type: "spring", bounce: 0.2, mass: 0.8 }}
    >
      {/* Header row: Back (optional) + centered title */}
      <div className="relative flex items-center justify-center mb-6">
        {onBack && (
          <button
            onClick={onBack}
            className="absolute left-0 inline-flex items-center gap-1 text-emerald-300/80 hover:text-emerald-200/90"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
        )}
        <div className="text-sm text-emerald-300/70 ml-auto">{title}</div>
      </div>

      {children}
    </motion.div>
  );
}