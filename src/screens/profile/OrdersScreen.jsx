import ScreenShell from "../../components/ScreenShell.jsx";

export default function OrdersScreen({ onBack }) {
  return (
    <ScreenShell title="Orders & Cards" onBack={onBack}>
      <div className="rounded-2xl p-4 bg-white/5 ring-1 ring-white/10 text-emerald-200/80">
        No recent orders. Add a card in Settings → Payments.
      </div>
    </ScreenShell>
  );
}