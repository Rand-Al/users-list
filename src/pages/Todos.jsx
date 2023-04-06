import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { capitalize } from "../methods/methods";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const { userId } = useParams();

  const deleteTodo = (todoId) => {
    const newTodos = [...todos].filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => {
        setTodos(response.data);
      });
  }, [userId]);
  return (
    <div className="border p-5 my-10 container mx-auto bg-indigo-800 bg-opacity-60 flex flex-col gap-3">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="flex justify-between">
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
      })}
    </div>
  );
};

export default Todos;
