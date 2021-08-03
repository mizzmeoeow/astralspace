import React, { Component } from "react";
import Categories from "../categories/categories";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        "Literature",
        "Painting",
        "Sculpting",
        "Architecture",
        "Music",
        "Performing",
        "Cinema",
        "Graphic Design",
      ],
      searchTerm: "",
    };
  }

  updateSearch(event) {
    this.setState({ searchTerm: event.target.value.substr(0, 40) });
  }

  dynamicSearch = () => {
    return this.state.categories.filter((category) =>
      category.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
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
          value={this.state.searchTerm}
          onChange={this.updateSearch.bind(this)}
          name="q"
          className="connect-searchbar"
        />
        <button type="submit" className="connect-search" onClick={search}>
          Submit
        </button>
        <Categories names={this.dynamicSearch()} />
      </form>
    );
  }
}

export default SearchBar;
