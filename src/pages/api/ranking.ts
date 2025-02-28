// ランキングにする
// fetchの制限が5/sなので、10個くらい一つのファイルにまとめる
export const prerender = false;
import { sql } from "drizzle-orm";
import { db } from "../../db";
import { codeTable } from "../../schema";

export async function GET() {
	const result = await db
		.select()
		.from(codeTable)
		.orderBy(sql`${codeTable.likes} desc`);

	return new Response(JSON.stringify(result), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
