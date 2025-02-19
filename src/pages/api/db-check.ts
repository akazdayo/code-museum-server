export const prerender = false;

import type { APIRoute } from "astro";
import { drizzle } from "drizzle-orm/d1";
import type { Runtime } from "@astrojs/cloudflare";
import { codeTable } from "../../db/schema";
import type { D1Database } from "@cloudflare/workers-types";

export async function GET({ locals }: { locals: Runtime }) {
	const envDB = locals.runtime.env.DB as D1Database;
	const db = await drizzle(envDB);
	const result = await db.select().from(codeTable).all();
	return new Response(JSON.stringify(result), { status: 200 });
}
