// ランキングにする
// fetchの制限が5/sなので、10個くらい一つのファイルにまとめる
export const prerender = false;
import { codeTable } from "../../schema";
import { db } from "../../db";
import { sql } from "drizzle-orm";

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
