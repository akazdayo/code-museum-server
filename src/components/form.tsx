export default function Form() {
  return (
    <div className="flex justify-center">
      <form>
        <textarea className="textarea" name="text"></textarea>
        <button className="btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
