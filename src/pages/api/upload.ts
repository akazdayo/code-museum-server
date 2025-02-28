export const prerender = false;
import type { APIRoute } from "astro";
import { db } from "../../db";
import { convertToUnityRichText } from "../../libs/syntax";
import { type InsertCode, codeTable } from "../../schema";

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get("Content-Type") === "application/json") {
		const body = await request.json();
		const data: InsertCode = body;
		data.code = await convertToUnityRichText(
			data.code,
			data.lang.toLowerCase(),
		);
		await db.insert(codeTable).values(data);
		return new Response(
			JSON.stringify({
				success: true,
			}),
			{
				status: 200,
			},
		);
	}
	return new Response(null, { status: 400 });
};
