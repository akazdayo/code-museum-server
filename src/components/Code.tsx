import { codeToHtml } from "shiki";
import { Show, createResource } from "solid-js";

export default function Code(props: { code: string; lang: string }) {
	// createResourceを使用して非同期処理を扱う
	const [html] = createResource(async () => {
		return await codeToHtml(props.code, {
			lang: props.lang.toLowerCase(),
			theme: "dracula",
		});
	});

	return (
		<Show when={html()} fallback={<div>Loading...</div>}>
			<div innerHTML={html()} />
		</Show>
	);
}
