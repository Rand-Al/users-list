import React from "react";
import { NavLink } from "react-router-dom";

const TableRow = ({ usersList }) => {
  return (
    <tbody>
      {usersList.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>
            <NavLink to={`/posts/${user.id}`}>Posts Count</NavLink>
          </td>
          <td>
            <NavLink to={`/albums/${user.id}`}>Albums Count</NavLink>
          </td>
          <td>
            <NavLink to={`/todos/${user.id}`}>Todos Count</NavLink>t
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRow;
