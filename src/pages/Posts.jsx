import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comments from "../components/Comments";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        setPosts(response.data);
      });
  }, [userId]);
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p className="wer">{post.body}</p>
            <Comments postId={post.id} />
          </div>
        );
      })}
    </>
  );
};

export default Posts;
