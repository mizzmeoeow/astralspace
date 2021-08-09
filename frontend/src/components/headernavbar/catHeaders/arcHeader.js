import React, { Component } from "react";

class ArcHeader extends Component {
  render() {
    return (
      <div className="category-header">
        <p className="category-heading">Architecture</p>
        <div className="navbar">
          <a href="/dashboard" className="nav-connect">
            Home Space
          </a>
        </div>
        <br />
      </div>
    );
  }
}

export default ArcHeader;
