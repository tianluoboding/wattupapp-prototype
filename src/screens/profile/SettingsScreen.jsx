import ScreenShell from "../../components/ScreenShell.jsx";

export default function SettingsScreen({ onBack }) {
  return (
    <ScreenShell title="Settings" onBack={onBack}>
      <div className="space-y-3">
        <div className="rounded-2xl p-4 bg-white/5 ring-1 ring-white/10">
          <div className="text-emerald-100 font-semibold mb-2">General</div>
          <div className="flex items-center justify-between py-2">
            <span className="text-emerald-200/80">Haptics</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-emerald-200/80">Dark Mode</span>
            <input type="checkbox" defaultChecked />
          </div>
        </div>
        <div className="rounded-2xl p-4 bg-white/5 ring-1 ring-white/10">
          <div className="text-emerald-100 font-semibold mb-2">Account</div>
          <button className="rounded-xl px-3 py-2 bg-white/5 ring-1 ring-white/10 text-emerald-100">
            Sign out
          </button>
        </div>
      </div>
    </ScreenShell>
  );
}