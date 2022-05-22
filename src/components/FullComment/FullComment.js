import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { deleteComment } from "../../services/deleteCommentService";
import { getAllComments } from "../../services/getAllCommentsService";
import getOneComment from "../../services/getOneCommentService";
import http from "../../services/httpService";
import "./fullComment.css";
function FullComment({ match }) {
  const commentId = match.params.id;
  console.log(commentId);
  const [comment, setComment] = useState(null);
  const [one, setOne] = useState(null);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const { data } = await getOneComment(commentId);
    setComment(data);
    // console.log("fetch");
  };
  const history = useHistory();
  const deleteHandler = async (id) => {
    console.log(id);
    await deleteComment(id).then();
    history.push("/");
  };

  return (
    <div className="container">
      <div className="full-comment">
        {comment ? (
          <>
            <h2>{comment.name}</h2>
            <h3>{comment.email}</h3>
            <p>{comment.body}</p>
            <div>
              <button onClick={(e) => deleteHandler(comment.id)}>
                {" "}
                Delete{" "}
              </button>
            </div>
          </>
        ) : (
          <>
            <h2>select a comment</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default FullComment;
