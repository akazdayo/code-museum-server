export default function Form() {
	return (
		<button
			class="btn"
			type="submit"
			onClick={(e) => {
				e.preventDefault();
				const form = e.currentTarget.closest("form");
				if (form) {
					// 各入力フィールドを明示的にIDで取得
					const titleInput = document.getElementById(
						"title-input",
					) as HTMLInputElement;
					const descInput = document.getElementById(
						"desc-input",
					) as HTMLInputElement;
					const codeInput = document.getElementById(
						"code-input",
					) as HTMLInputElement;
					const languageSelect = form.querySelector(
						"#language-select",
					) as HTMLSelectElement;

					fetch("/api/upload", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							title: titleInput.value,
							description: descInput.value,
							code: codeInput.value,
							lang: languageSelect.value,
						}),
					});
				}
			}}
		>
			submit
		</button>
	);
}
