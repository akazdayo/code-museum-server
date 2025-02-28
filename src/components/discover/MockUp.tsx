import { createEffect, createSignal } from "solid-js";
import { to15Lines, toPlain } from "../../libs/syntax";
import type { SelectCode } from "../../schema";
import Code from "../Code";
import CodeViewer from "./CodeViewer";

export default function MockUp() {
	const [codes, setCodes] = createSignal<SelectCode[]>();

	createEffect(async () => {
		try {
			const response = await fetch("/api/ranking");
			const data = await response.json();
			setCodes(data);
		} catch (error) {
			console.error("Failed to fetch data:", error);
		}
	});

	return (
		<>
			{codes() ? (
				codes()?.map((item) => (
					// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
					<div class="w-full h-full">
						<dialog id={`_${item.id}`} class="modal">
							<div class="modal-box max-w-none w-5/6 rounded-2xl">
								<CodeViewer
									codes={{
										...item,
										code: toPlain(item.code),
									}}
								/>
							</div>
							<form method="dialog" class="modal-backdrop">
								<button type="submit">close</button>
							</form>
						</dialog>

						<div
							class="mockup-browser bg-base-300 border border-base-200"
							onclick={() =>
								(
									document.getElementById(`_${item.id}`) as HTMLDialogElement
								).showModal()
							}
						>
							<div class="mockup-browser-toolbar">
								<div>{item.title}</div>
							</div>
							<Code code={to15Lines(toPlain(item.code))} lang={item.lang} />
						</div>
					</div>
				))
			) : (
				<div>Loading...</div>
			)}
		</>
	);
}
