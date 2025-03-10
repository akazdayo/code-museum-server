import * as cheerio from "cheerio";
import { codeToHtml } from "shiki";

// Unity Rich Textに変換する関数
export async function convertToUnityRichText(
	code: string,
	lang = "javascript",
	theme = "vitesse-dark",
): Promise<string> {
	// ShikiでHTMLを生成
	const html = await codeToHtml(code, {
		lang,
		theme,
	});

	// cheerioでHTMLを解析
	const $ = cheerio.load(html);
	let unityRichText = "";

	// 各行を処理
	$("code .line").each((_, line) => {
		// 各行のspan要素を処理
		$(line)
			.find("span")
			.each((_, span) => {
				const text = $(span).text();
				const styleAttr = $(span).attr("style");
				let color = "#dbd7caee"; // デフォルト色

				// style属性から色情報を抽出
				if (styleAttr) {
					const colorMatch = styleAttr.match(/color:(#[a-fA-F0-9]+)/);
					if (colorMatch?.[1]) {
						color = colorMatch[1];
					}
				}

				// Unity Rich Text形式に変換
				unityRichText += `<color=${color}>${text}</color>`;
			});
		unityRichText += "\n";
	});

	return unityRichText;
}

export function toPlain(code: string): string {
	// Unity Rich Textのタグを削除してプレーンテキストを取得
	let plainText = code;
	// すべてのタグが削除されるまで繰り返し処理
	const regex = /<color=(?:[^>])+>([\s\S]*?)<\/color>/g;
	while (regex.test(plainText)) {
		plainText = plainText.replace(regex, "$1");
	}
	return plainText;
}

export function to15Lines(code: string): string {
	let result = code;
	const lines = code.split("\n");
	if (lines.length > 15) {
		// 16行目以降を削除
		result = lines.slice(0, 16).join("\n");
	} else {
		// 15行に満たない場合は空行を追加
		const emptyLinesToAdd = 17 - lines.length; // 本当は15にしたいけど、なんか17じゃないと高さが揃わなかった
		result = lines.concat(Array(emptyLinesToAdd).fill("")).join("\n");
	}
	return result;
}
