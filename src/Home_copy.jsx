import { motion } from "framer-motion";
import { Route, Bot, Gauge, BatteryFull, Users, Plug, Shield, MapPin } from "lucide-react";

const HeroCTA = ({ icon: Icon, title, blurb, onClick }) => (
  <motion.button whileHover={{ y:-2, scale:1.01 }} whileTap={{ scale:0.98 }}
    onClick={onClick}
    className="w-full rounded-3xl p-4 text-left bg-emerald-900/30 ring-1 ring-white/10
               shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)]
               hover:ring-emerald-400/30 transition-colors"
  >
    <div className="flex items-center gap-3">
      <div className="rounded-2xl p-3 bg-emerald-500/15 ring-1 ring-emerald-400/30">
        <Icon className="h-6 w-6 text-emerald-300" />
      </div>
      <div className="min-w-0">
        <div className="text-base font-semibold text-emerald-100">{title}</div>
        <div className="text-emerald-200/70 text-xs mt-0.5 line-clamp-1">{blurb}</div>
      </div>
    </div>
  </motion.button>
);

const CompactCard = ({ icon: Icon, title, onClick }) => (
  <motion.button whileHover={{ y:-2, scale:1.02 }} whileTap={{ scale:0.98 }}
    onClick={onClick}
    className="w-full rounded-2xl p-4 text-left bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/30 transition-colors"
  >
    <div className="flex items-center gap-3">
      <div className="rounded-xl p-2 bg-emerald-500/15 ring-1 ring-emerald-400/30">
        <Icon className="h-5 w-5 text-emerald-300" />
      </div>
      <div className="text-emerald-100 font-medium text-[13px] leading-tight whitespace-normal break-words">
        {title}
      </div>
    </div>
  </motion.button>
);

export default function Home({ go }) {
  return (
    <motion.div
      key="home"
      className="relative z-0 mt-4 h-[844px] overflow-y-auto pb-28 px-5"
      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}
    >
      <div className="grid grid-cols-1 gap-3">
        <HeroCTA icon={Route} title="Smart Route" blurb="Optimize your ride by your battery." onClick={() => go("smartRoute")} />
        <HeroCTA icon={Bot}   title="AI Support"  blurb="Diagnose & fix in seconds."         onClick={() => go("aiSupport")} />
      </div>

      <div className="mt-6">
        <div className="text-emerald-200/70 text-xs uppercase tracking-wider mb-2">Tools</div>
        <div className="grid grid-cols-2 gap-3">
          <CompactCard icon={Gauge}       title={<><span className="block">Speed</span><span className="block">Meter</span></>} onClick={() => go("speedometer")} />
          <CompactCard icon={BatteryFull} title="Battery Scan"  onClick={() => go("batteryScan")} />
          <CompactCard icon={Users}       title="Group Rides"   onClick={() => go("groupRides")} />
          <CompactCard icon={Plug}        title="Charging Map"  onClick={() => go("chargingMap")} />
        </div>
      </div>

      <div className="mt-6">
        <div className="text-emerald-200/70 text-xs uppercase tracking-wider mb-2">Utilities</div>
        <div className="grid grid-cols-2 gap-3">
          <CompactCard icon={Shield} title="Report Stolen" onClick={() => go("reportStolen")} />
          <CompactCard icon={MapPin} title="Bathroom"      onClick={() => go("bathrooms")} />
        </div>
      </div>

      <div className="h-10" />
    </motion.div>
  );
}