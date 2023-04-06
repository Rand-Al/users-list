import React from "react";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <form className="flex gap-3 mx-auto border p-5 container my-3 bg-indigo-800 bg-opacity-80">
      <h2 className="pl-3 font-bold text-2xl">Search</h2>
      <input
        className="text-black bg-opacity-40 pl-3"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
};

export default Search;
