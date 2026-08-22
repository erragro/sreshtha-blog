import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

// Zero framework: Vite treats index.html as the entry, Tailwind v4 handles
// the CSS pipeline (matches the Sreshtha app's setup verbatim).
//
// `base` is driven by the BASE_PATH env var so the GitHub Pages workflow
// can set it to /<repo-name>/ at build time. Local dev and Vercel deploys
// leave it unset, which resolves to '/'.
export default defineConfig({
  plugins: [tailwindcss()],
  base: process.env.BASE_PATH || "/",
})
