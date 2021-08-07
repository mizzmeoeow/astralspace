import React, { Component, useState } from "react";

class Categories extends React.Component {
  render() {
    return (
      <div className="category-nav nav-connect">
        <a href="/literature" className="category">
          Literature
        </a>
        <a href="/painting" className="category">
          Painting
        </a>
        <a href="/sculpting" className="category">
          Sculpting
        </a>
        <a href="/architecture" className="category">
          Architecture
        </a>
        <a href="/music" className="category">
          {" "}
          Music
        </a>
        <a href="/painting" className="category">
          {" "}
          Performing
        </a>
        <a href="/cinema" className="category">
          {" "}
          Cinema
        </a>
        <a href="/graphic-design" className="category">
          Graphic Design
        </a>
      </div>
    );
  }
}

export default Categories;
