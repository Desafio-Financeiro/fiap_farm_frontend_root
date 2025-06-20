import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    federation({
      name: "host",
      remotes: {
        inventory:
          process.env.INVENTORY_REMOTE_URL ??
          "http://localhost:5002/assets/remoteEntry.js",
        analytics:
          process.env.ANALYTICS_REMOTE_URL ??
          "http://localhost:5001/assets/remoteEntry.js",
        sales:
          process.env.SALES_REMOTE_URL ??
          "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
    tailwindcss(),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
