function App() {
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
        <tbody>
          <tr>
            <td>User 1</td>
            <td>
              <a href="/posts/1">Posts Count</a>
            </td>
            <td>Album Count</td>
            <td>Todos Count</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
