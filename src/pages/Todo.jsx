import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { capitalize } from "../methods/methods";

const Todo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const setComplete = () => {
    const newTodo = Object.assign({}, todo);
    newTodo.completed = !newTodo.completed;
    setTodo(newTodo);
  };
  const editItem = (title) => {
    setIsEdit(true);
    setInputValue(title);
  };
  const changeItem = () => {
    const newTodo = Object.assign({}, todo);
    newTodo.title = capitalize(inputValue);
    setTodo(newTodo);
    setIsEdit(false);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
      .then((response) => {
        setTodo(response.data[0]);
      });
  }, [id]);
  return (
    <div className="border p-5 mb-10 mt-24 container mx-auto bg-indigo-800 bg-opacity-60 flex justify-between items-center gap-4">
      {isEdit ? (
        <>
          <input
            className="font-bold text-2xl bg-white bg-opacity-25 pl-3 rounded flex-auto"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={() => changeItem()}
            className="hover:bg-indigo-900 transition-all bg-indigo-600 self-start px-8 py-2"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h2 className=" pl-3 font-bold text-2xl">
            <span className={todo.completed === true ? "line-through" : "none"}>
              {capitalize(todo.title)}
            </span>
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => setComplete()}
              className="hover:bg-green-700 transition-all bg-green-500 self-start px-8 py-2"
            >
              Complete
            </button>
            <button
              onClick={() => editItem(todo.title)}
              className="hover:bg-indigo-900 transition-all bg-indigo-600 self-start px-8 py-2"
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;