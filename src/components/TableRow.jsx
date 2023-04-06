import React from "react";
import { NavLink } from "react-router-dom";

const TableRow = (props) => {
  return (
    <tr key={props.user.id}>
      <td className="font-semibold">{props.user.name}</td>
      <td>
        <NavLink
          className="hover:underline font-semibold"
          to={`/posts/${props.user.id}`}
        >
          {props.posts.filter((post) => post.userId === props.user.id).length}{" "}
          Posts
        </NavLink>
      </td>
      <td>
        <NavLink
          className="hover:underline font-semibold"
          to={`/albums/${props.user.id}`}
        >
          {
            props.albums.filter((album) => album.userId === props.user.id)
              .length
          }{" "}
          Albums
        </NavLink>
      </td>
      <td>
        <NavLink
          className="hover:underline font-semibold"
          to={`/todos/${props.user.id}`}
        >
          {props.todos.filter((todo) => todo.userId === props.user.id).length}{" "}
          Todos
        </NavLink>
      </td>
    </tr>
  );
};

export default TableRow;
