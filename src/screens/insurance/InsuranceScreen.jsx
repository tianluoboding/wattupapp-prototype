import { ShieldCheck, BadgeCheck } from "lucide-react";
import ScreenShell from "../../components/ScreenShell.jsx";

export default function InsuranceScreen({ onBack, go }) {
  return (
    <ScreenShell title="Insurance" onBack={onBack}>
      {/* Coverage card */}
      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl p-2 bg-emerald-500/15 ring-1 ring-emerald-400/30">
              <ShieldCheck className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <div className="text-emerald-100 font-semibold">Premium Rider Protection</div>
              <div className="text-emerald-200/70 text-xs">Boosted Rev • Jan 01, 2025 → Dec 31, 2025</div>
            </div>
          </div>
          <span className="text-xs px-2 py-0.5 rounded-lg bg-emerald-400/20 ring-1 ring-emerald-300/30 text-emerald-100">
            Active
          </span>
        </div>
      </div>

      {/* Primary CTA */}
      <button
        onClick={() => go("claimStart")}
        className="w-full rounded-2xl px-4 py-3 bg-emerald-500 text-slate-900 font-semibold ring-1 ring-white/10 mb-4"
      >
        Start a claim
      </button>

      {/* Recent claims (dummy) */}
      <div className="text-emerald-200/70 text-xs mb-2">Recent claims</div>
      <div className="space-y-2">
        <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 flex items-center justify-between">
          <div>
            <div className="text-emerald-100/90 font-medium">#1001 • Accident</div>
            <div className="text-emerald-200/60 text-xs">Submitted Jan 15 • Under review</div>
          </div>
          <BadgeCheck className="h-4 w-4 text-emerald-300/80" />
        </div>
      </div>
    </ScreenShell>
  );
}