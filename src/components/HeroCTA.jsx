import { motion } from "framer-motion";
import React from "react";

export default function HeroCTA({ icon: Icon, title, blurb, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full rounded-3xl p-4 text-left bg-emerald-900/30 ring-1 ring-white/10
                 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)]"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-2xl p-3 bg-emerald-500/15 ring-1 ring-emerald-400/30">
          <Icon className="h-6 w-6 text-emerald-300" />
        </div>
        <div className="min-w-0">
          <div className="text-base font-semibold text-emerald-100">{title}</div>
          <div className="text-emerald-200/70 text-xs mt-0.5">{blurb}</div>
        </div>
      </div>
    </motion.button>
  );
}