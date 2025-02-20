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

export async function POST({
	request,
	locals,
}: { request: Request; locals: Runtime }) {
	try {
		const body = await request.json();

		// 必要なフィールドの検証
		if (!body.title || !body.description || !body.code || !body.lang) {
			return new Response("Missing required fields", { status: 400 });
		}

		const envDB = locals.runtime.env.DB as D1Database;
		const db = await drizzle(envDB);

		// 新しいレコードを挿入
		await db.insert(codeTable).values({
			title: body.title,
			description: body.description,
			code: body.code,
			lang: body.lang,
		});

		return new Response("Created successfully", { status: 201 });
	} catch (error) {
		return new Response("Error creating record", { status: 500 });
	}
}
