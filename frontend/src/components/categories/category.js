import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
      <div>
        <a className="category">{this.state.category}</a>
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

export default Category;
