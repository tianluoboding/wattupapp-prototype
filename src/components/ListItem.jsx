export default function ListItem({ icon: Icon, title, desc, onClick, right }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 py-3 bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/30 transition-colors"
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="rounded-xl p-2 bg-emerald-500/15 ring-1 ring-emerald-400/30">
            <Icon className="h-5 w-5 text-emerald-300" />
          </div>
        )}
        <div className="text-left">
          <div className="text-emerald-100 font-medium">{title}</div>
          {desc && <div className="text-xs text-emerald-200/70 mt-0.5">{desc}</div>}
        </div>
      </div>
      {right ?? <span className="text-emerald-200/60">›</span>}
    </button>
  );
}