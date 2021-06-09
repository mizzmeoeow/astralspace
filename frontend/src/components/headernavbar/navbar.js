import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="#" className="navbar-links">
          Home
        </a>
        <a href="#" className="navbar-links">
          Connect
        </a>
        <a href="#" className="navbar-links">
          Blog
        </a>
      </div>
    );
  }
}

export default Navbar;
