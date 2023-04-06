import React from "react";
import { NavLink } from "react-router-dom";
import { capitalize } from "../methods/methods";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div
      key={todo.id}
      className="flex justify-between border p-5 my-5 bg-indigo-800 bg-opacity-60"
    >
      <h2 className="font-bold text-2xl mb-1">
        <NavLink
          className={
            todo.completed === true
              ? "line-through hover:underline"
              : "hover:underline"
          }
          to={`/todo/${todo.id}`}
        >
          {capitalize(todo.title)}
        </NavLink>
      </h2>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="hover:bg-red-900 transition-all bg-red-600 self-start px-8 py-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
