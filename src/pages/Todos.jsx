import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Search from "../components/Search";
import Todo from "../components/Todo";

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
          return <Todo todo={todo} deleteTodo={deleteTodo} />;
        })}
      </div>
    </>
  );
};

export default Todos;
