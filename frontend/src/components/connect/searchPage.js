import React, { Component, useState, useEffect } from "react";
import SearchBar from "./searchBar";
import Categories from "../categories/categories";
import Truncate from "react-truncate";
import { categories } from "./data";

const filterCategories = (categories, query) => {
  if (!query) {
    return categories;
  }

  return categories.filter((category) => {
    const categoryType = category.tag.toLowerCase();
    return categoryType.includes(query);
  });
};

const SearchPage = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredCategories = filterCategories(categories, searchQuery);

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Categories searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ul className="wrapper">
        {filteredCategories.map((category) => (
          <a href={category.URL} className="search-results" key={category.id}>
            <div className="card">
              <img src={category.imageURL} className="card__img" />
              <div className="card__body">
                <h3 className="card__title">{category.name}</h3>
                <Truncate lines={1} ellipsis={<span>...view more</span>}>
                  <h4 className="card__description">{category.description}</h4>
                </Truncate>
                <h4 className="card__price">{category.price}</h4>
              </div>
            </div>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
