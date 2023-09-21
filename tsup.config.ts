import { defineConfig } from "tsup";

const config = defineConfig({
  entry: ["./src/"],
  minify: true,
  outDir: "./out/",
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true
});

export default config;
