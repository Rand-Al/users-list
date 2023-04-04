import axios from "axios";
import React, { useEffect, useState } from "react";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => {
        setComments(response.data);
        console.log(response.data);
      });
  }, [postId]);
  return (
    <div>
      {comments.map((comment) => {
        return <div className="wer">{comment.body}</div>;
      })}
    </div>
  );
};

export default Comments;
