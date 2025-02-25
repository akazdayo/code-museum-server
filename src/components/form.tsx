export default function Form() {
  return (
    <div className="flex justify-center">
      <form>
        <textarea defaultValue="タイトル" className="textarea" name="text"/>
        <br/>
        <textarea defaultValue="説明" className="textarea" name="text"/>
        <br/>
        <textarea defaultValue="コード" className="textarea" name="text"/>
        <br/>
        <textarea defaultValue="typescript" className="textarea" name="text"/>
        
        <button className="btn" type="submit" onClick={(e) => {
          e.preventDefault();
          const form = e.currentTarget.closest("form");
          if (form) {
            const textareas = form.querySelectorAll("textarea");
            fetch("/api/upload", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: textareas[0].value,
                description: textareas[1].value,
                code: textareas[2].value,
                lang: textareas[3].value,
            })
            });}
        }}>
          submit
        </button>
      </form>
    </div>
  );
}
