import React, { Component, useState } from "react";
import Category from "./category";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      categories: [],
    };
  }
  render() {
    return (
      <div className="category-nav .nav-connect">
        {this.state.categories.map((category) => {
          return <Category name={category} />;
        })}

        {/* <a className="category">Literature</a>
        <a className="category">Painting</a>
        <a className="category">Sculting</a>
        <a className="category">Architecture</a>
        <a className="category">Music</a>
        <a className="category">Performing</a>
        <a className="category">Cinema</a>
        <a className="category">Graphic Design</a> */}
      </div>
    );
  }
}

export default Categories;
