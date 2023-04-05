import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/error-page";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Albums from "./pages/Albums";
import Todos from "./pages/Todo/Todos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts/:userId",
    element: <Posts />,
  },
  {
    path: "/post/:id",
    element: <Post />,
  },
  {
    path: "albums/:userId",
    element: <Albums />,
  },
  {
    path: "todos/:userId",
    element: <Todos />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
