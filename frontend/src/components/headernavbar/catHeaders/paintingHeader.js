import React, { Component } from "react";

class PaintingHeader extends Component {
  render() {
    return (
      <div className="category-header">
        <p className="category-heading">Painting</p>
        <div className="navbar">
          <a href="/dashboard" className="nav-connect">
            Home Space
          </a>
          <a href="/connect" className="nav-connect">
            Connect
          </a>
        </div>
        <br />
      </div>
    );
  }
}

export default PaintingHeader;
