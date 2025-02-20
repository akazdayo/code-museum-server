// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	output: "static",

	vite: {
		plugins: [tailwindcss()],
		ssr: {
			external: ["path", "os", "crypto"],
		},
	},

	integrations: [react()],
});
