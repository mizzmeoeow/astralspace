import React from "react";
import SearchBar from "./searchBar";
import Sidebar from "../categories/pages/sidebar/sidebar";
import Post from "../categories/pages/posts/post";

const SearchPage = (props) => {
  const user = props.user;
  console.log(user);
  return (
    <div>
      {/* <SearchBar data={Post} user={user} /> */}
      <Sidebar user={user} />
    </div>
  );
};

export default SearchPage;
