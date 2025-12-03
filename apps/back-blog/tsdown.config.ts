import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"],
  minify: true,
  clean: true,
  sourcemap: true,
  tsconfig: "./tsconfig.json",
  shims: true,
  platform: "node",
  target: "node20",
  external: [/^express$/, /^@.*/],
  treeshake: true,
});
