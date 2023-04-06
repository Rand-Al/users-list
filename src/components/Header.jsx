import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-end items-center mx-auto border p-5 container my-3 bg-indigo-800 bg-opacity-80">
      <NavLink className="font-bold text-2xl mb-1 mr-4 hover:underline " to="/">
        Home
      </NavLink>
    </div>
  );
};

export default Header;
