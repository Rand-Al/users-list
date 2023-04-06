import axios from "axios";
import React, { useEffect, useState } from "react";
import { capitalize } from "../methods/methods.js";
import LoaderSmall from "./LoaderSmall.jsx";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => {
        setComments(response.data);
        setIsLoading(false);
      });
  }, [postId]);
  return (
    <>
      {isLoading ? (
        <LoaderSmall />
      ) : (
        <div className=" pl-8 w-3/4 mx-auto ">
          <h2 className="font-bold">Comments:</h2>
          {comments.map((comment) => {
            return (
              <>
                <div key={comment.id}>
                  <span className="font-bold">Email:</span> {comment.email}
                </div>
                <div className="pl-9">{capitalize(comment.body)}</div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Comments;
