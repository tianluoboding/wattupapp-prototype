import { useEffect, useState } from "react";
import ScreenShell from "../../components/ScreenShell.jsx";
import Skeleton from "../../components/Skeleton.jsx";

export default function SubscriptionsScreen({ onBack }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(t);
  }, []);

  return (
    <ScreenShell title="Subscriptions" onBack={onBack}>
      {loading ? (
        <div className="space-y-3">
          <Skeleton className="h-24" />
          <Skeleton className="h-14" />
        </div>
      ) : (
        <div className="rounded-2xl p-4 bg-white/5 ring-1 ring-white/10">
          <div className="text-emerald-100 font-semibold">WattUp Pro</div>
          <div className="text-emerald-200/70 text-sm">Next bill: Sep 20 • $4.99</div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <button className="rounded-xl px-3 py-2 bg-white/5 ring-1 ring-white/10 text-emerald-100">
              Manage plan
            </button>
            <button className="rounded-xl px-3 py-2 bg-emerald-500 text-slate-900 font-semibold">
              Upgrade
            </button>
          </div>
        </div>
      )}
    </ScreenShell>
  );
}