import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

type ViteConfig = {
  command: string;
  mode: string;
};

const baseDefault = "/components/gnivc_development_navigator/web";

export default defineConfig(({ mode }: ViteConfig) => {
  const base = mode === "production" ? baseDefault : "/";

  return {
    base: base,
    resolve: {
      alias: {
        components: "/src/components",
        api: "/src/api",
        constants: "/src/constants",
      },
    },
    plugins: [react(), svgr({ include: "**/*.svg?r" })],
  };
});
