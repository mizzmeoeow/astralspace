import React, { Component, useState } from "react";
import Categories from "../categories/categories";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../stateProvider";
import { SET_SEARCH_TERM } from "../../actions/action.types";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";

function SearchBar({ hideButtons = false }) {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();

    console.log("You hit the search button >> ", input);

    dispatch({
      type: SET_SEARCH_TERM,
      term: input,
    });
  };

  console.log(data);
  return (
    <form
      id="form"
      action="https://www.google.com/search?q=''&sclient=gws-wiz&ved=''&uact=5"
    >
      {/* {filteredCategories.map((category) => {
          return <Categories category={category} key={this.category.id} />;
        })} */}
      <input
        type="text"
        placeholder="Search for Art/Creations on Google"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        name="q"
        className="connect-searchbar"
      />
      <button type="submit" className="connect-search" onClick={search}>
        Submit
      </button>
      <Categories />
    </form>
  );
}

export default SearchBar;
