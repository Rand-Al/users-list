import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => {
        setTodos(response.data);
      });
  }, [userId]);
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default Todos;
