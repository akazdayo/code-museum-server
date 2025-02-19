// ランキングにする
// fetchの制限が5/sなので、10個くらい一つのファイルにまとめる
export const prerender = false;
import type { APIRoute } from "astro";
import { drizzle } from "drizzle-orm/d1";
import { codeTable } from "../../../db/schema";
import type { Runtime } from "@astrojs/cloudflare";

export async function GET({ locals }: { locals: Runtime }) {
	const envDB = locals.runtime.env.DB as D1Database;
	const db = drizzle(envDB);

	const rankings = await db.select().from(codeTable);

	return new Response(
		JSON.stringify({
			body: { rankings },
		}),
		{ status: 200 },
	);
}
