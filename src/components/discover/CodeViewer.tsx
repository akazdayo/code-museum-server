import type { SelectCode } from "../../schema";
import Code from "../Code";

export default function CodeViewer(props: { codes: SelectCode }) {
	return (
		<div class="flex justify-center m-5 gap-4">
			<div class="mockup-window bg-base-300 border w-1/3 flex-3/4">
				<div class="max-h-[500px] overflow-y-auto">
					<Code code={props.codes.code} lang={props.codes.lang} />
				</div>
			</div>

			<div class="flex-1/4 border rounded-xl">
				<h1 class="text-3xl">{props.codes.title}</h1>
			</div>
		</div>
	);
}
