import axios from "axios";
import React, { useEffect, useState } from "react";
import { capitalize } from "../methods/methods.js";

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
    <div className=" pl-8 w-3/4 mx-auto ">
      <h2 className="font-bold">Comments:</h2>
      {comments.map((comment) => {
        return (
          <>
            <div>
              <span className="font-bold">Email:</span> {comment.email}
            </div>
            <div className="pl-9">{capitalize(comment.body)}</div>
          </>
        );
      })}
    </div>
  );
};

export default Comments;
