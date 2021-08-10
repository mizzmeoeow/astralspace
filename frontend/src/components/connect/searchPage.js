import React, { Component, useState, useEffect } from "react";
import SearchBar from "./searchBar";
import Categories from "../categories/categories";
import Truncate from "react-truncate";
// import { categories } from "./data";

// const filterCategories = (categories, query) => {
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
  // const filteredCategories = filterCategories(categories, searchQuery);
  const category = [];

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Categories searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default SearchPage;
