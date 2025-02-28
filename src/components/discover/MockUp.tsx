import { createSignal } from "solid-js";
import { toPlain } from "../../libs/syntax";
import type { SelectCode } from "../../schema";
import Code from "../Code";
import CodeViewer from "./CodeViewer";

export default function MockUp(props: { codes: SelectCode }) {
	const [plain, setPlain] = createSignal("");

	const result = toPlain(props.codes.code);
	if (result) {
		let limitedCode = null;
		const lines = result.split("\n");
		if (lines.length > 15) {
			// 15行より多い場合は切り詰める
			limitedCode = lines.slice(0, 16).join("\n");
		} else {
			// 15行より少ない場合は空行を追加
			const emptyLinesToAdd = 17 - lines.length;
			limitedCode = lines.concat(Array(emptyLinesToAdd).fill("")).join("\n");
		}
		setPlain(limitedCode);

		return (
			<div>
				<dialog id={`_${props.codes.id}`} class="modal">
					<div class="modal-box max-w-none w-5/6 rounded-2xl">
						<CodeViewer
							codes={{
								...props.codes,
								code: plain(),
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
							document.getElementById(`_${props.codes.id}`) as HTMLDialogElement
						).showModal()
					}
				>
					<div class="mockup-browser-toolbar">
						<div>{props.codes.title}</div>
					</div>
					<Code code={plain()} lang={props.codes.lang} />
				</div>
			</div>
		);
	}
}
