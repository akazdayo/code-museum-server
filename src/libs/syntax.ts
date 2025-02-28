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
					if (colorMatch && colorMatch[1]) {
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
