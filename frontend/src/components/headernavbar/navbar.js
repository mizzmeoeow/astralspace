import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="/" className="navbar-links">
          Home
        </a>
        <a href="/" className="navbar-links">
          Connect
        </a>
        <a href="/blog" className="navbar-links">
          Blog
        </a>
      </div>
    );
  }
}

export default Navbar;
