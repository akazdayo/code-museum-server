// ランキングにする
// fetchの制限が5/sなので、10個くらい一つのファイルにまとめる
export const prerender = false;
import { GetRankings } from "../../../util/prisma";

export async function GET() {
	const rankings = await GetRankings();
	// JSON形式に変換して返す
	return new Response(JSON.stringify(rankings), {
		headers: { "Content-Type": "application/json" },
	});
}
