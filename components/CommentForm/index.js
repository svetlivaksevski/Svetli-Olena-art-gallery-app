export default function CommentForm({ onSubmitComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmitComment(data, slug);
    event.target.reset();
  }
  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="comment">Add new comment:</label>

        <textarea
          className="comment-text-input"
          name="comment"
          id="comment"
          rows="5"
          cols="45"
          placeholder="Write your comment here..."
          required
        />

        <button className="comment-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
