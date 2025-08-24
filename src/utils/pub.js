// src/utils/pub.js
export const PUB = import.meta.env.BASE_URL;
export const pub = (p = "") => `${PUB}${String(p).replace(/^\/+/, "")}`;