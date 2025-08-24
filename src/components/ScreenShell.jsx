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
      <div className="flex items-center justify-between mb-8">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/logo.jpg" 
            alt="WattUp Logo" 
            className="w-6 h-6 object-contain"
          />
          <span className="font-bold text-emerald-300">WattUp</span>
        </div>

        {/* Middle: title */}
        <div className="text-sm text-emerald-300/70">{title}</div>

        {/* Right: placeholder spacing */}
        <div className="w-16" />
      </div>
      {children}
    </motion.div>
  );
}