import React from "react";
import styled from "styled-components";

const Heading = styled.div`
  font-size: 24px;
`;
export default function Comments({ comments, slug }) {
  const filteredComments = comments.filter((comment) => comment.id === slug);

  return (
    <div className="comments-container">
      <Heading>Comments</Heading>
      {filteredComments?.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {filteredComments?.map((comment) => (
            <li key={comment.comment}>
              <div className="comment-text">{comment.comment}</div>
              <div>({comment.date})</div>
              <div className="dots"></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
