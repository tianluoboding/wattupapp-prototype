// src/components/Toast.jsx
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ open, message }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed left-1/2 -translate-x-1/2 bottom-24 z-[60]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.25, duration: 0.25 }}
        >
          <div className="rounded-xl bg-slate-900/95 text-emerald-100 px-4 py-2 ring-1 ring-white/10 shadow-lg">
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}