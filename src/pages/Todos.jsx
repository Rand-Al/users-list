import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { capitalize } from "../methods/methods";
import Search from "../components/Search";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const { userId } = useParams();
  const [searchValue, setSearchValue] = useState("");

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchValue.toLowerCase());
  });

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
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="border p-5 mb-10 container mx-auto bg-indigo-800 bg-opacity-60 flex flex-col gap-3">
        {filteredTodos.map((todo) => {
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
    </>
  );
};

export default Todos;
