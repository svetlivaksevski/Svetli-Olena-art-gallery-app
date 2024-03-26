export default function CommentForm({ onSubmitComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("writing comment", event.target);
    onSubmitComment(data, slug);
    event.target.reset();
  }
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="comment">Add new comment:</label>
      <textarea
        className="comment-text-input"
        name="comment"
        id="comment"
        rows="5"
        cols="45"
        required
      />
      <button className="comment-button-style" type="submit">
        Send
      </button>
    </form>
  );
}
