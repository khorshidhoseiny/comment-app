import React from "react";
import "./comment.css";
function Comment({ name, email, onClick }) {
  return (
    <div className="comment" onClick={onClick}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default Comment;
