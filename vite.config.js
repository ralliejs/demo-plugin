import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  resolve: {
    alias: {
      react: path.resolve(__dirname, "src/lib/react.js"),
      // "react-router-dom": path.resolve(
      //   __dirname,
      //   "src/lib/react-router-dom.js"
      // ),
    },
  },
});
