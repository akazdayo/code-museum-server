// ランダムで画像を配置する
export const prerender = false;
import type { APIRoute } from "astro";

export const GET: APIRoute = async (req) => {
	// JSON形式に変換して返す
	return new Response("aaa", {
		headers: { "Content-Type": "text/plain" },
	});
};
