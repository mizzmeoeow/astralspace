import React, { Component, useState, useEffect } from "react";
import Categories from "../categories/categories";
import SearchBar from "./searchBar";

class SearchPage extends Component {
  // const [artListDefault, setArtListDefault] = useState();

  // const fetchData = async () => {
  //   return await fetch("http://localhost:5000/api/auth/categories")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setArtList(data);
  //       setArtListDefault(data);
  //     });
  // };

  // const updateInput = async (input) => {
  //   const filtered = categoryListDefault.filter((category) => {
  //     return category.name.toLowerCase().includes(input.toLowerCase());
  //   });
  //   setInput(input);
  //   setCategoryList(filtered);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  render() {
    return (
      <>
        <h1></h1>
        <SearchBar />
      </>
    );
  }
}

export default SearchPage;
