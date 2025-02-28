import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare(),
	output: "static",

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [solidJs()],

	markdown: {
		shikiConfig: {
			theme: "vitesse-dark",
		},
	},
});
