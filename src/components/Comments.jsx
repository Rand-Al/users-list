import axios from "axios";
import React, { useEffect, useState } from "react";
import { capitalize } from "../methods/methods.js";
import LoaderSmall from "./LoaderSmall.jsx";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const commentsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      setComments(commentsResponse.data);
      setIsLoading(false);
    }
    fetchData();
  }, [postId]);
  return (
    <>
      {isLoading ? (
        <LoaderSmall />
      ) : (
        <div className=" pl-8 w-3/4 mx-auto ">
          <h2 className="font-bold">Comments:</h2>
          {comments.map((comment) => (
            <>
              <div key={comment.id}>
                <span className="font-bold">Email:</span> {comment.email}
              </div>
              <div className="pl-9">{capitalize(comment.body)}</div>
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
