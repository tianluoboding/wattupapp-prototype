import { FileText, CalendarDays, MapPin, Image } from "lucide-react";
import ScreenShell from "../../components/ScreenShell.jsx";

const FakeField = ({ icon: Icon, label, value = "Tap to select" }) => (
  <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3 flex items-center gap-3">
    <div className="rounded-lg p-2 bg-emerald-500/15 ring-1 ring-emerald-400/30">
      <Icon className="h-4 w-4 text-emerald-300" />
    </div>
    <div className="min-w-0">
      <div className="text-emerald-100/90 text-sm">{label}</div>
      <div className="text-emerald-200/60 text-xs">{value}</div>
    </div>
  </div>
);

export default function ClaimStartScreen({ onBack, go }) {
  return (
    <ScreenShell title="Start a claim" onBack={onBack}>
      <div className="space-y-3">
        <FakeField icon={FileText} label="Incident type" value="Accident" />
        <FakeField icon={CalendarDays} label="Date & time" value="Today, 3:15 PM" />
        <FakeField icon={MapPin} label="Location" value="Brooklyn, NY" />
        <FakeField icon={Image} label="Photos" value="Add up to 3 (mock)" />

        <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
          <div className="text-emerald-100/90 text-sm mb-1">What happened?</div>
          <div className="text-emerald-200/60 text-xs">
            Tell us briefly. (This is a mock field in the prototype.)
          </div>
        </div>

        <button
          onClick={() => go("claimStatus")}
          className="w-full mt-2 rounded-2xl px-4 py-3 bg-emerald-500 text-slate-900 font-semibold ring-1 ring-white/10"
        >
          Submit claim
        </button>
      </div>
    </ScreenShell>
  );
}