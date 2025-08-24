import { motion, AnimatePresence } from "framer-motion";

export default function BottomSheet({ open, onClose, title, children, variant = "bottom" }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/60 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {variant === "bottom" ? (
            <motion.div
              className="absolute inset-x-0 bottom-0 z-[70]"
              initial={{ y: 360 }}
              animate={{ y: 0 }}
              exit={{ y: 360 }}
              transition={{ type: "spring", bounce: 0.25 }}
            >
              <div className="rounded-t-3xl bg-slate-900/95 backdrop-blur ring-1 ring-white/10 p-5 pb-[env(safe-area-inset-bottom)]">
                {title && <div className="text-emerald-100 font-semibold text-lg">{title}</div>}
                <div className="mt-4">{children}</div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-5 z-[70]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", bounce: 0.25 }}
            >
              <div className="mx-auto max-w-sm rounded-2xl bg-slate-900/95 backdrop-blur ring-1 ring-white/10 p-1">
                {title && <div className="text-emerald-100 font-semibold text-lg">{title}</div>}
                <div className="mt-4">{children}</div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}