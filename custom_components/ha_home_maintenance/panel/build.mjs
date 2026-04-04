import { build } from "esbuild";

build({
  entryPoints: ["src/main.ts"],
  bundle: true,
  outfile: "dist/main.js",
  format: "esm",
  target: "es2020",
  minify: true,
  external: [],
}).catch(() => process.exit(1));
