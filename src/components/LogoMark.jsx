// src/components/LogoMark.jsx
import { Zap } from "lucide-react";
import { pub } from "../utils/pub";

export default function LogoMark({ className = "h-10 w-10 rounded-xl" }) {
  return (
    <img
      src={pub("logo.jpg")}        // works locally and on GitHub Pages
      alt="WattUp"
      className={className + " object-contain ring-1 ring-white/10 bg-white/5"}
      onError={(e) => {
        // if the image can't load, fall back to the Zap icon
        e.currentTarget.replaceWith(
          Object.assign(document.createElement("span"), {
            innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"
              style="color: rgb(16 185 129);"></svg>`
          })
        );
      }}
    />
  );
}