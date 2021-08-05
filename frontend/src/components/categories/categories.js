import React, { Component, useState } from "react";
import Category from "./category";

class Categories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      showFilteredItems: false,
      isLoading: false,
      searchTerm: "",
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  submitForm(values) {
    this.setState({ values });
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getSearchItems();
    } else {
      this.getSearchItems(filter);
    }
  }

  getSearchItems(filter = null) {
    // Category.call({ value: filter.target.value }, (error, result) => {
    //   if (result) {
    //     this.props.onDataFetched(result);
    //   }
    // });
  }

  searchItems() {
    return this.state.categories.map((item) => {
      return <Category key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getSearchItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="category-nav .nav-connect">
        <a onClick={() => this.handleFilter("Literature")} className="category">
          Literature
        </a>
        <a onClick={() => this.handleFilter("Painting")} className="category">
          Painting
        </a>
        <a onClick={() => this.handleFilter("Sculpting")} className="category">
          Sculpting
        </a>
        <a
          onClick={() => this.handleFilter("Architecture")}
          className="category"
        >
          Architecture
        </a>
        <a onClick={() => this.handleFilter("Music")} className="category">
          Music
        </a>
        <a onClick={() => this.handleFilter("Performing")} className="category">
          Performing
        </a>
        <a onClick={() => this.handleFilter("Cinema")} className="category">
          Cinema
        </a>
        <a
          onClick={() => this.handleFilter("Graphic Design")}
          className="category"
        >
          Graphic Design
        </a>
      </div>
    );
  }
}

export default Categories;
