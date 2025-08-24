import { Zap } from "lucide-react";
import React from "react";

export default function LogoMark() {
  const [ok, setOk] = React.useState(true);
  return (
    <div className="h-11 w-11 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center overflow-hidden">
      {ok ? (
        <img src="/logo.jpg" alt="EmissaryBot" className="h-11 w-11 object-contain" onError={() => setOk(false)} />
      ) : (
        <Zap className="h-6 w-6 text-emerald-300" />
      )}
    </div>
  );
}