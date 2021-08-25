import React, { Component, useState, useEffect } from "react";
import SearchBar from "./searchBar";
import Sidebar from "../categories/pages/sidebar/sidebar";

const SearchPage = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Sidebar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default SearchPage;
