import { defineConfig } from 'vite'
import { viteExternalsPlugin } from "vite-plugin-externals";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    viteExternalsPlugin(
      {
        react: "React",
        "react-dom": "ReactDOM",
        "react-router-dom": "ReactRouterDOM",
        antd: "Antd",
      },
      {
        filter: () => true,
      }
    ),
  ],
});
