export const prerender = false;
import type { APIRoute } from "astro";
import { sql } from "drizzle-orm";
import { db } from "../../db";
import { type InsertCode, codeTable } from "../../schema";

export const GET: APIRoute = async ({ request }) => {
	const url = new URL(request.url);
	const codeId = url.searchParams.get("id");

	if (!codeId) {
		return new Response("Code ID is required", { status: 400 });
	}

	try {
		await db
			.update(codeTable)
			.set({
				likes: sql`${codeTable.likes} + 1`,
			})
			.where(sql`id = ${codeId}`);
		return new Response("Like added successfully", { status: 200 });
	} catch (error) {
		return new Response("Error adding like", { status: 500 });
	}
};
