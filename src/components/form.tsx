export default function Form() {
	return (
		<button
			class="btn"
			type="submit"
			onClick={(e) => {
				e.preventDefault();
				const form = e.currentTarget.closest("form");
				if (form) {
					const textareas = form.querySelectorAll("textarea");
					const languageSelect = form.querySelector(
						"#language-select",
					) as HTMLSelectElement;

					fetch("/api/upload", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							title: textareas[0].value,
							description: textareas[1].value,
							code: textareas[2].value,
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
