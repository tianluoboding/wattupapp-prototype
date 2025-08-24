import { useState } from "react";
import ScreenShell from "../components/ScreenShell.jsx";

export default function SmartRouteScreen({ onBack, onToast }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [battery, setBattery] = useState(70);
  const [planned, setPlanned] = useState(false);

  return (
    <ScreenShell title="Smart Route" onBack={onBack}>
      <div className="space-y-4">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
          <label className="block text-xs text-emerald-200/70 mb-1">From</label>
          <input value={from} onChange={(e) => setFrom(e.target.value)}
                 className="w-full bg-transparent outline-none text-emerald-100"
                 placeholder="e.g., Washington Square Park" />
        </div>
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
          <label className="block text-xs text-emerald-200/70 mb-1">To</label>
          <input value={to} onChange={(e) => setTo(e.target.value)}
                 className="w-full bg-transparent outline-none text-emerald-100"
                 placeholder="e.g., Central Park" />
        </div>
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
          <label className="block text-xs text-emerald-200/70 mb-2">Battery % (estimated)</label>
          <input type="range" min={5} max={100} value={battery} onChange={(e) => setBattery(Number(e.target.value))}
                 className="w-full" />
          <div className="text-emerald-200/80 text-sm mt-1">{battery}%</div>
        </div>
        <button onClick={() => { 
                  setPlanned(true); 
                  onToast?.("Planning… (mock)"); 
                }} className="w-full rounded-2xl bg-emerald-500 text-slate-900 font-semibold py-3">
          Plan Route
        </button>

        {planned && (
          <div className="rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-400/30 p-4">
            <div className="text-emerald-100 font-semibold">Suggested plan</div>
            <ul className="text-emerald-200/80 text-sm mt-2 list-disc pl-5 space-y-1">
              <li>Range fit: ~14–18 mi on current battery.</li>
              <li>1 charge stop recommended near Midtown.</li>
              <li>Avoids steep hills; favors protected lanes.</li>
            </ul>
          </div>
        )}
      </div>
    </ScreenShell>
  );
}