import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
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
