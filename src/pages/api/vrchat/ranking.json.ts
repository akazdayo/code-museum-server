// ランキングにする
// fetchの制限が5/sなので、10個くらい一つのファイルにまとめる
export const prerender = false;
import type { APIRoute } from "astro";
import { GetRankings } from "../../../libs/prisma.ts";

export const GET: APIRoute = async (req) => {
	const rankings = await GetRankings();
	// JSON形式に変換して返す
	return new Response(JSON.stringify(rankings), {
		headers: { "Content-Type": "application/json" },
	});
};
