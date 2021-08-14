import React, { Component, useState, useEffect } from "react";
import SearchBar from "./searchBar";
import Truncate from "react-truncate";
import Sidebar from "../categories/pages/sidebar/sidebar";
// import { categories } from "./data";

// const filterCategories = (query) => {
//   if (!query) {
//     return categories;
//   }

//   return categories.filter((category) => {
//     const categoryType = category.tag.toLowerCase();
//     return categoryType.includes(query);
//   });
// };

const SearchPage = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  // const filteredCategories = filterCategories(searchQuery);
  // const category = [];

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Sidebar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default SearchPage;
