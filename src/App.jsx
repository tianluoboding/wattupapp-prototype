import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pub } from "./utils/pub.js";

import { Search, Mic, Camera, Route, Bot, Gauge, BatteryFull, Users, Plug, Shield, MapPin } from "lucide-react";

import BottomSheet from "./components/BottomSheet.jsx";
import ScreenShell from "./components/ScreenShell.jsx"; // used by imported screens
import ListItem from "./components/ListItem.jsx";       // if still used locally
import LogoMark from "./components/LogoMark.jsx";

import SmartRouteScreen from "./screens/SmartRouteScreen.jsx";
import AISupportScreen from "./screens/AISupportScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import SubscriptionsScreen from "./screens/profile/SubscriptionsScreen.jsx";
import SavedScreen from "./screens/profile/SavedScreen.jsx";
import OrdersScreen from "./screens/profile/OrdersScreen.jsx";
import SettingsScreen from "./screens/profile/SettingsScreen.jsx";

import { titleMap } from "./constants/titleMap.js";
import { navItems } from "./constants/navItems.js";
import HomeScreen from "./screens/HomeScreen.jsx";
import Toast from "./components/Toast.jsx";

const Splash = ({ onDone, logoText = "EmissaryBot" }) => {
  const [imgOk, setImgOk] = React.useState(true);

  useEffect(() => {
    const t = setTimeout(onDone, 2000); // ~2s
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", mass: 0.7 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="relative h-20 w-20 rounded-3xl bg-white flex items-center justify-center shadow-xl ring-1 ring-black/10">
          {imgOk ? (
            <img
              src={pub("logo.jpg")}
              alt="EmissaryBot"
              className="h-16 w-16 object-contain"
              onError={() => setImgOk(false)}
            />
          ) : (
            <Zap className="h-10 w-10 text-emerald-500" />
          )}
        </div>
        <div className="text-xl font-bold tracking-tight text-slate-900">{logoText}</div>
        <div className="mt-1 text-base">
          <span className="italic font-bold text-slate-900">Yo, </span>
          <span className="text-emerald-700 italic font-extrabold text-xl">WattUp!</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HeroCTA = ({ icon: Icon, title, blurb, onClick }) => (
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

const CompactCard = ({ icon: Icon, title, onClick }) => (
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

export default function App() {
  const [tab, setTab] = useState("home");
  const [screen, setScreen] = useState("home");
  const [sheet, setSheet] = useState({ open: false, title: "", content: null });
  const [showSplash, setShowSplash] = useState(true);
  const [toast, setToast] = useState({ open: false, message: "" });

  // Toast state
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const toastTimerRef = useRef(null);

  function showToast(message, duration = 900) {
    setToastMsg(message);
    setToastOpen(true);

    // reset any previous timer
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = setTimeout(() => {
      setToastOpen(false);
      toastTimerRef.current = null;
    }, duration);
  }

  const openTool = (title, content) => setSheet({ open: true, title, content });

  const cn = (...cls) => cls.filter(Boolean).join(" ");

  function openPreview(type) {
    if (type === "saved") {
      setSheet({
        open: true,
        title: "Saved (preview)",
        content: (
          <div className="space-y-3 text-emerald-100/90">
            <div className="rounded-xl p-3 bg-white/5 ring-1 ring-white/10">
              Recent route • Brooklyn → SoHo
            </div>
            <div className="rounded-xl p-3 bg-white/5 ring-1 ring-white/10">
              Charging spot • 7th Ave & 23rd
            </div>

            <button
              onClick={() => { setSheet({ open:false, title:"", content:null }); setScreen("saved"); }}
              className="w-full mt-1 rounded-xl px-4 py-2 bg-emerald-500 text-slate-900 font-semibold"
            >
              View All
            </button>
          </div>
        ),
      });
    }

    if (type === "orders") {
      setSheet({
        open: true,
        title: "Orders (preview)",
        content: (
          <div className="space-y-3 text-emerald-100/90">
            <div className="rounded-xl p-3 bg-white/5 ring-1 ring-white/10">
              #2381 • Tire service • $49
            </div>
            <div className="rounded-xl p-3 bg-white/5 ring-1 ring-white/10">
              #2375 • Controller check • $0
            </div>

            <button
              onClick={() => { setSheet({ open:false, title:"", content:null }); setScreen("orders"); }}
              className="w-full mt-1 rounded-xl px-4 py-2 bg-emerald-500 text-slate-900 font-semibold"
            >
              View All
            </button>
          </div>
        ),
      });
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-950 to-black p-4">
      <div className="relative w-[390px] h-[844px] rounded-[2.5rem] border-[10px] border-black shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden bg-slate-900">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-emerald-500/20 blur-[80px]" />

        {showSplash ? (
          <AnimatePresence><Splash onDone={() => setShowSplash(false)} /></AnimatePresence>
        ) : (
          <>
            {/* Status bar */}
            <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-black/40 to-transparent z-10" />

            {/* Header */}
            <div className="relative z-10 px-5 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <LogoMark />
                  <div>
                    <div className="text-[24px] font-extrabold tracking-tight text-emerald-300/80 drop-shadow-[0_0_6px_rgba(16,185,129,0.45)]">WattUp</div>
                    
                  </div>
                </div>
                <button onClick={() => setShowSplash(true)} className="text-xs text-emerald-300/70 hover:text-emerald-200/90 underline">Splash</button>
              </div>

              {/* Search – only on home */}
              {screen === "home" && (
                <div className="mt-3">
                  <div className="flex items-center rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 h-11">
                    <Search className="h-4 w-4 text-emerald-300/80 mr-2 shrink-0" />
                    <input className="flex-1 bg-transparent outline-none text-emerald-100/90" />
                    <div className="flex items-center gap-1.5 pl-1 shrink-0">
                      <Mic className="h-4 w-4 text-emerald-300/80" />
                      <Camera className="h-4 w-4 text-emerald-300/80" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Main area: home vs screen */}
            <AnimatePresence mode="wait">
              {screen === "home" ? (
                <HomeScreen go={setScreen} />
              ) : (
                <>
                  {screen === "smartRoute" && <SmartRouteScreen onBack={() => setScreen("home")} onToast={showToast} />}
                  {screen === "aiSupport"   && <AISupportScreen   onBack={() => setScreen("home")} />}
                  {screen === "profile" && (
                    <ProfileScreen onBack={() => setScreen("home")} go={setScreen} openPreview={openPreview} />
                  )}
                  {screen === "subscriptions" && <SubscriptionsScreen onBack={() => setScreen("profile")} />}
                  {screen === "saved"         && <SavedScreen         onBack={() => setScreen("profile")} />}
                  {screen === "orders"        && <OrdersScreen        onBack={() => setScreen("profile")} />}
                  {screen === "settings"      && <SettingsScreen      onBack={() => setScreen("profile")} />}

                  {["speedometer","batteryScan","groupRides","chargingMap","reportStolen","bathrooms"].includes(screen) && (
                    <ScreenShell title={titleMap[screen] ?? "Screen"} onBack={() => setScreen("home")}>
                      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 text-emerald-200/80">
                        This is a placeholder for <span className="text-emerald-100 font-semibold">{titleMap[screen]}</span>.
                        We’ll wire the real UI next.
                      </div>
                    </ScreenShell>
                  )}
                </>
              )}
            </AnimatePresence>

            {/* Bottom Nav */}
            <nav className="absolute bottom-0 inset-x-0 h-16 bg-slate-900/95 backdrop-blur ring-1 ring-white/10">
              <div className="grid grid-cols-5 h-full">
                {navItems.map(({ key, label, Icon, screen: sc }) => {
                  const active = tab === key;
                  return (
                    <button key={key} aria-label={label} aria-current={active ? "page" : undefined}
                            onClick={() => { setTab(key); setScreen(sc || "home"); }}
                            className={cn("flex flex-col items-center justify-center", active ? "text-emerald-300" : "text-emerald-200/60")}>
                      <Icon className={cn("h-6 w-6 transition-transform", active && "scale-110 drop-shadow-[0_0_6px_rgba(16,185,129,0.45)]")} />
                    </button>
                  );
                })}
              </div>
            </nav>

            <Toast open={toastOpen} message={toastMsg} />

            <BottomSheet open={sheet.open} onClose={() => setSheet({ open: false, title: "", content: null })} title={sheet.title}>
              {sheet.content}
            </BottomSheet>

            
          </>
        )}
      </div>
    </div>
  );
}