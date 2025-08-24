import { useEffect, useState } from "react";
import ScreenShell from "../../components/ScreenShell.jsx";
import Skeleton from "../../components/Skeleton.jsx";

export default function SavedScreen({ onBack }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600); // 500–700ms
    return () => clearTimeout(t);
  }, []);

  return (
    <ScreenShell title="Saved" onBack={onBack}>
      {loading ? (
        <div className="space-y-3">
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
        </div>
      ) : (
        <div className="rounded-2xl p-4 bg-white/5 ring-1 ring-white/10 text-emerald-200/80">
          Your saved routes and places will appear here.
        </div>
      )}
    </ScreenShell>
  );
}