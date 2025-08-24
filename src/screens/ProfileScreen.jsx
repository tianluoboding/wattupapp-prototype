import ScreenShell from "../components/ScreenShell.jsx";
import ListItem from "../components/ListItem.jsx";
import { CreditCard, Bookmark, Settings, Package, Edit3 } from "lucide-react";
import pub from "../utils/pub.js";

const mockUser = {
  nickname: "Kyle",
  accountId: "emissary_kyle",
  avatar: pub("logo.jpg"),
  status: "Ready to ride ⚡️",
};

export default function ProfileScreen({ onBack, go, openPreview = () => {} }) {
  return (
    <ScreenShell title="Profile" onBack={onBack}>
      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 mb-4 flex items-center gap-4">
        <img src={mockUser.avatar} alt={mockUser.nickname}
             className="h-14 w-14 rounded-2xl object-cover ring-1 ring-white/10"
             onError={(e) => (e.currentTarget.src = pub("react.svg"))}
        />
        <div className="min-w-0 flex-1">
          <div className="text-emerald-100 font-semibold text-lg truncate">{mockUser.nickname}</div>
          <div className="text-emerald-200/70 text-xs truncate">ID: {mockUser.accountId}</div>
          <div className="text-emerald-200/70 text-xs mt-0.5">{mockUser.status}</div>
        </div>
        <button onClick={() => go("profileEdit")}
                className="inline-flex items-center gap-1 rounded-xl px-3 py-1.5 bg-white/5 ring-1 ring-white/10 text-emerald-100 text-sm">
          <Edit3 className="h-4 w-4" /> Edit
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
        <ListItem icon={CreditCard} title="Pay & Subscriptions" desc="Manage plan & billing" onClick={() => go("subscriptions")} />
        <div className="h-px bg-white/10" />
        <ListItem icon={Bookmark} title="Saved" desc="Routes, spots, posts" onClick={() => openPreview("saved")} />
        <div className="h-px bg-white/10" />
        <ListItem icon={Package} title="Orders & Cards" desc="Receipts, service, cards" onClick={() => openPreview("orders")} />
        <div className="h-px bg-white/10" />
        <ListItem icon={Settings} title="Settings" desc="Preferences & privacy" onClick={() => go("settings")} />
      </div>
    </ScreenShell>
  );
}