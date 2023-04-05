import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const TableRow = ({ usersList }) => {
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const postsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const albumsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/albums`
      );
      const todosResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`
      );
      setPosts(postsResponse.data);
      setAlbums(albumsResponse.data);
      setTodos(todosResponse.data);
    }
    fetchData();
  });
  return (
    <tbody>
      {usersList.map((user) => (
        <tr key={user.id}>
          <td className="font-semibold">{user.name}</td>
          <td>
            <NavLink
              className="hover:underline font-semibold"
              to={`/posts/${user.id}`}
            >
              {posts.filter((post) => post.userId === user.id).length} Posts
            </NavLink>
          </td>
          <td>
            <NavLink
              className="hover:underline font-semibold"
              to={`/albums/${user.id}`}
            >
              {albums.filter((album) => album.userId === user.id).length} Albums
            </NavLink>
          </td>
          <td>
            <NavLink
              className="hover:underline font-semibold"
              to={`/todos/${user.id}`}
            >
              {todos.filter((todo) => todo.userId === user.id).length} Todos
            </NavLink>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRow;
