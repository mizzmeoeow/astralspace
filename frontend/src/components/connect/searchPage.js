import React from "react";
import SearchBar from "./searchBar";
import Sidebar from "../categories/pages/sidebar/sidebar";
import Post from "../categories/pages/posts/post";

const SearchPage = () => {
  return (
    <div>
      <SearchBar data={Post} />
      <Sidebar />
    </div>
  );
};

export default SearchPage;
