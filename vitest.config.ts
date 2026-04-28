import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "node",
    globals: false,
    include: [
      "src/**/__tests__/**/*.test.ts",
      "src/**/*.test.ts",
      "scripts/__tests__/**/*.test.js",
    ],
    exclude: ["**/node_modules/**", "**/.next/**", "**/dist/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/lib/**/*.ts", "scripts/**/*.js"],
      exclude: ["**/*.test.ts", "**/*.d.ts", "src/lib/email-templates/**"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
