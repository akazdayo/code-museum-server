import type { APIRoute } from "astro";
import sharp from "sharp";
import { UploadSource } from "../../util/prisma";

export const post: APIRoute = async ({ request }) => {
	try {
		const body = await request.json();
		const source_code = body.source_code;
		UploadSource(body.title, body.description, source_code);
		return new Response(JSON.stringify({ success: "Image Uploaded" }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Invalid Request" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}
};
