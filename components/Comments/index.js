import React from "react";

export default function Comments({ comments = [] }) {
  return (
    <div className="comments-container">
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <div className="comment-text">"{comment.text}"</div>
              <div className="comment-date-time">
                ({comment.date}, {comment.time})
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
