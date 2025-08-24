import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import React from "react";

export default function Splash({ onDone, logoText = "EmissaryBot" }) {
  const [imgOk, setImgOk] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
      initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", mass: 0.7 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="relative h-20 w-20 rounded-3xl bg-white flex items-center justify-center shadow-xl ring-1 ring-black/10">
          {imgOk ? (
            <img src="/logo.jpg" alt="EmissaryBot" className="h-16 w-16 object-contain" onError={() => setImgOk(false)} />
          ) : (
            <Zap className="h-10 w-10 text-emerald-500" />
          )}
        </div>
        <div className="text-xl font-bold tracking-tight text-slate-900">{logoText}</div>
        <div className="mt-2">
          <span className="font-extrabold text-slate-900 text-lg">Yo, </span>
          <span className="text-emerald-700 italic font-black text-2xl">WattUp!</span>
        </div>
      </motion.div>
    </motion.div>
  );
}