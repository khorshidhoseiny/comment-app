import React, { useEffect, useState } from "react";
import FullComment from "../components/FullComment/FullComment";
import NewComment from "../components/NewComment/NewComment";
import Comment from "./../components/Comment/Comment";
import "./discussion.css";
import http from "../services/httpService";
import { getAllComments } from "../services/getAllCommentsService";
import { Link } from "react-router-dom";

function Discussion() {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    console.log("im here");
    getComments();
  }, []);

  const getComments = async () => {
    const { data } = await getAllComments();
    console.log(data);
    setComments(data);
  };

  const renderComments = () => {
    return (
      <>
        {comments ? (
          comments.map((c) => (
            <Link to={`/full-comment/${c.id}`} key={c.id}>
              <Comment name={c.name} email={c.email} />
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };
  return (
    <div className="container">
      <section className="section comment-section">{renderComments()}</section>
      {/* <section className="section">
        <FullComment selectedComment={selectedId} getComments={getComments} />
      </section>
      <section>
        <NewComment onClick={getComments} />
      </section> */}
    </div>
  );
}

export default Discussion;
