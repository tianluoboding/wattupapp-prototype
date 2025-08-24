import { motion } from "framer-motion";
import React from "react";

export default function CompactCard({ icon: Icon, title, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full rounded-2xl p-4 text-left bg-white/5 ring-1 ring-white/10"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl p-2 bg-emerald-500/15 ring-1 ring-emerald-400/30">
          <Icon className="h-5 w-5 text-emerald-300" />
        </div>
        <div className="text-emerald-100 font-medium">{title}</div>
      </div>
    </motion.button>
  );
}