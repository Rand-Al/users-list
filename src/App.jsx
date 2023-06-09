import { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "./components/TableRow";
import Search from "./components/Search";
import Loader from "./components/Loader";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
      const usersResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setPosts(postsResponse.data);
      setAlbums(albumsResponse.data);
      setTodos(todosResponse.data);
      setUsersList(usersResponse.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="App flex items-center container mx-auto  justify-center flex-col">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <table className="resp-tab bg-indigo-400 my-3">
            <thead>
              <tr>
                <th>User</th>
                <th>Posts</th>
                <th>Albums</th>
                <th>Todos</th>
              </tr>
            </thead>
            <tbody>
              {usersList.filter((user) => user.name.toLowerCase().includes(searchValue.toLowerCase())).map((user) => {
                return (
                  <TableRow
                    key={user.id}
                    usersList={usersList}
                    posts={posts}
                    albums={albums}
                    todos={todos}
                    user={user}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default App;
