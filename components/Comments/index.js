import React from "react";

export default function Comments({ comments, slug }) {
  const filteredComments = comments.filter((comment) => comment.slug === slug);

  return (
    <div className="comments-container">
      <h3>Comments</h3>
      {filteredComments?.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {filteredComments?.map((comment) => (
            <li>
              <div className="comment-text">"{comment.comment}"</div>
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
