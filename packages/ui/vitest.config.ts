import { defineConfig } from "vitest/config";

const vitestConfig = defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
});

export default vitestConfig;
