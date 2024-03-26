import styled from "styled-components";

const Textarea = styled.div`
  border: none;
  outline: none;
  width: 100%;
  padding: 20px 60px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const Button = styled.div`
  width: 60px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #008080;
  color: #ffffff;
  padding: 15px;
  border-radius: 10px;
`;

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
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="comment">Add new comment:</label>
        <Textarea>
          <textarea
            className="comment-text-input"
            name="comment"
            id="comment"
            rows="5"
            cols="45"
            required
          />
        </Textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
