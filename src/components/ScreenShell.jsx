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
      <div className="flex items-center justify-between mb-4">
        <button onClick={onBack} className="inline-flex items-center gap-1 text-emerald-300/80 hover:text-emerald-200">
          <ChevronLeft className="h-5 w-5" />
          <span className="text-sm">Back</span>
        </button>
        <div className="text-sm text-emerald-300/70">{title}</div>
        <div className="w-16" />
      </div>
      {children}
    </motion.div>
  );
}