import { defineConfig } from "astro/config";
import deno from "npm:@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: deno(),
});
