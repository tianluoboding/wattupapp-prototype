import { CheckCircle2, Clock } from "lucide-react";
import ScreenShell from "../../components/ScreenShell.jsx";

export default function ClaimStatusScreen({ onBack }) {
  return (
    <ScreenShell title="Claim submitted" onBack={onBack}>
      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 space-y-2 mb-4">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-6 w-6 text-emerald-300" />
          <div className="text-emerald-100 font-semibold">Claim #1002 created</div>
        </div>
        <div className="flex items-center gap-2 text-emerald-200/70 text-sm">
          <Clock className="h-4 w-4" />
          Under review — we’ll email you if we need more info.
        </div>
      </div>

      <button
        onClick={onBack}
        className="w-full rounded-2xl px-4 py-3 bg-white/5 text-emerald-100 ring-1 ring-white/10"
      >
        Back to Insurance
      </button>
    </ScreenShell>
  );
}