import { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./components/TableRow";

function App() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsersList(response.data);
    });
  }, []);
  return (
    <div className="App ">
      <table className="resp-tab">
        <thead>
          <tr>
            <th>User</th>
            <th>Posts</th>
            <th>Albums</th>
            <th>Todos</th>
          </tr>
        </thead>
        <TableRow usersList={usersList} />
      </table>
    </div>
  );
}

export default App;
