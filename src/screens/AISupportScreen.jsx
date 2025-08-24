import { useState } from "react";
import ScreenShell from "../components/ScreenShell.jsx";

export default function AISupportScreen({ onBack }) {
  const [q, setQ] = useState("");
  const [show, setShow] = useState(false);

  return (
    <ScreenShell title="AI Support" onBack={onBack}>
      <div className="space-y-4">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
          <label className="block text-xs text-emerald-200/70 mb-1">Describe the issue</label>
          <textarea value={q} onChange={(e) => setQ(e.target.value)} rows={4}
                    className="w-full bg-transparent outline-none text-emerald-100"
                    placeholder="e.g., Wheel vibrates at 20mph…" />
        </div>
        <button onClick={() => setShow(true)} className="w-full rounded-2xl bg-emerald-500 text-slate-900 font-semibold py-3">
          Get Suggestions
        </button>

        {show && (
          <div className="rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-400/30 p-4 space-y-2">
            <div className="text-emerald-100 font-semibold">Likely causes</div>
            <ul className="text-emerald-200/80 text-sm list-disc pl-5">
              <li>Tire imbalance or loose axle nut</li>
              <li>Worn bearings</li>
              <li>Misaligned wheel</li>
            </ul>
            <div className="text-emerald-100 font-semibold mt-3">Try this</div>
            <ul className="text-emerald-200/80 text-sm list-disc pl-5">
              <li>Check/torque axle nut; inspect bearings</li>
              <li>Re-seat tire; balance if needed</li>
              <li>Nearest shop: “PEV NYC” on 7th Ave</li>
            </ul>
          </div>
        )}
      </div>
    </ScreenShell>
  );
}