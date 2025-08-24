// src/utils/pub.js
export function pub(path = "") {
  // works locally (/) and on GitHub Pages (/repo-name/)
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${String(path).replace(/^\/+/, "")}`;
}