import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(({ mode }) => ({
  base: mode === "github-pages" ? "/faze-developpement_1/" : "/",
  plugins: [react()]
}))
