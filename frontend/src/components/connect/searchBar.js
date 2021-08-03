import React, { useState } from "react";
import Categories from "../categories/categories";
import { useHistory } from "react-router-dom";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <div>
      <form
        id="form"
        action="/"
        method="get"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Search for Art/Creations on Google"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          className="connect-searchbar"
          name="s"
          id="header-search"
        />
        <button type="submit" className="connect-search">
          Submit
        </button>

        {/* <SearchBarResults /> */}
      </form>
    </div>
  );
};

export default SearchBar;
