// src/screens/HomeScreen.jsx
import React from "react";
import { motion } from "framer-motion";
import { Route, Bot, Gauge, BatteryFull, Users, Plug, Shield, MapPin } from "lucide-react";

// re-use your components
import HeroCTA from "../components/HeroCTA.jsx";
import CompactCard from "../components/CompactCard.jsx";

export default function HomeScreen({ go }) {
  return (
    <motion.div
      key="home"
      className="relative z-0 mt-4 h-[844px] overflow-y-auto pb-28 px-5"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.15 }}
    >
      {/* HERO: two big CTAs */}
      <div className="grid grid-cols-1 gap-3">
        <HeroCTA icon={Route} title="Smart Route" blurb="Optimize your ride" onClick={() => go("smartRoute")} />
        <HeroCTA icon={Bot}   title="AI Support"  blurb="Diagnose & fix"     onClick={() => go("aiSupport")} />
      </div>

      {/* Tools grid */}
      <div className="mt-6">
        <div className="text-emerald-200/70 text-xs uppercase tracking-wider mb-2">Tools</div>
        <div className="grid grid-cols-2 gap-3">
          <CompactCard icon={Gauge}       title={<><span className="block">Speed</span><span className="block">Meter</span></>} onClick={() => go("speedometer")} />
          <CompactCard icon={BatteryFull} title="Battery Scan" onClick={() => go("batteryScan")} />
          <CompactCard icon={Users}       title="Group Rides"  onClick={() => go("groupRides")} />
          <CompactCard icon={Plug}        title="Charging Map" onClick={() => go("chargingMap")} />
        </div>
      </div>

      {/* Utilities grid */}
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