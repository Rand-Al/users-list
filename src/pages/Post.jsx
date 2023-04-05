import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../components/Comments";
import { capitalize } from "../methods/methods";

const Post = () => {
  const [post, setPost] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const { id } = useParams();

  const saveEdit = () => {
    post.title = titleValue;
    post.body = bodyValue;
    setIsEdit(false);
  };
  const editPost = (title, body) => {
    setIsEdit(true);
    setTitleValue(title);
    setBodyValue(body);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
      .then((response) => {
        setPost(response.data[0]);
      });
  }, [id]);
  return (
    <div className="border p-5 my-10 container mx-auto bg-indigo-800 bg-opacity-60">
      {isEdit ? (
        <div className="flex flex-col gap-3 ">
          <input
            className=" font-bold text-2xl bg-white bg-opacity-25 pl-3 rounded"
            type="text"
            value={capitalize(titleValue)}
            onChange={(e) => setTitleValue(e.target.value)}
          />
          <input
            className=" bg-white bg-opacity-25 pl-3   rounded"
            type="text"
            value={capitalize(bodyValue)}
            onChange={(e) => setBodyValue(e.target.value)}
          />
          <button
            className="hover:bg-indigo-900 transition-all bg-indigo-600 self-start px-8 py-2"
            onClick={() => saveEdit()}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <h2 className=" font-bold text-2xl pl-3">{capitalize(post.title)}</h2>
          <p className="pl-3">{capitalize(post.body)}</p>
          <button
            className="hover:bg-indigo-900 transition-all bg-indigo-600 self-start px-8 py-2"
            onClick={() => editPost(post.title, post.body)}
          >
            Edit
          </button>
        </div>
      )}
      <Comments postId={post.id} />
    </div>
  );
};

export default Post;
