// ランキングにする
// fetchの制限が5/sなので、10個くらい一つのファイルにまとめる
export const prerender = false;
import { codeTable } from "../../../schema";
import { db } from "../../../db";

export async function GET() {
	const result = await db
		.select()
		.from(codeTable)
		.orderBy(codeTable.likes)
		.limit(10);

	return new Response(JSON.stringify(result), { status: 200 });
}
