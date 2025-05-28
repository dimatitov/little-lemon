import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import importMapPlugin from "vite-plugin-module-alias";
import vitePluginCreate from "vite-plugin-create";

export default defineConfig({
  plugins: [
    react(),
    importMapPlugin({
      imports: {
        components: "/src/components",
        constants: "/src/constants",
        types: "/src/types",
        pages: "/src/pages",
        assets: "/src/assets",
      },
      tsconfigPath: "./tsconfig.app.json",
    }),
    vitePluginCreate(),
  ],
});
