import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { capitalize } from "../methods/methods.js";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import Search from "../components/Search.jsx";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const { userId } = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  useEffect(() => {
    async function fetchData() {
      const commentsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      const postsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      setComments(commentsResponse.data);
      setPosts(postsResponse.data);
      setIsLoading(false);
    }
    fetchData();
  }, [userId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className=" container mx-auto my-5 posts px-5">
            {filteredPosts.map((post) => {
              return (
                <div
                  className=" border p-5 my-5 bg-indigo-800 bg-opacity-60"
                  key={post.id}
                >
                  <div className="flex flex-col gap-3">
                    <h2 className=" font-bold text-2xl pl-3">
                      {capitalize(post.title)}
                    </h2>
                    <p className="pl-3">{capitalize(post.body)}</p>
                    <div>
                      <NavLink
                        className=" hover:bg-indigo-900 transition-all bg-indigo-600 self-start ml-3 px-8 py-2"
                        to={`/post/${post.id}`}
                      >
                        More
                      </NavLink>
                    </div>
                    <p className="ml-3 text-white opacity-75">
                      {
                        comments.filter((comment) => {
                          return comment.postId === post.id;
                        }).length
                      }{" "}
                      comments
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Posts;
