import React from "react";
import { NavLink } from "react-router-dom";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className="flex justify-between items-center mx-auto border p-5 container my-3 bg-indigo-800 bg-opacity-80">
      <form className="flex gap-3">
        <h2 className="pl-3 font-bold text-2xl">Search</h2>
        <input
          className="text-black bg-opacity-40 pl-3"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      <NavLink className="font-bold text-2xl mb-1 mr-4 hover:underline" to="/">
        Home
      </NavLink>
    </div>
  );
};

export default Search;
