import type { APIRoute } from "astro";
import sharp from "sharp";
import { UploadImage } from "../../util/prisma";

export const post: APIRoute = async ({ request }) => {
	try {
		const body = await request.json();
		const base64_image = `data:image/jpeg;base64, ${body.image.toString("base64")}`;
		UploadImage(body.title, body.description, base64_image);
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
