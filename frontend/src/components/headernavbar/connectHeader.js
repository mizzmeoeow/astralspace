import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="connect-header">
        <p className="connect">Connect</p>
        <div className="navbar profile-nav">
          <a href="/dashboard" className="navbar-links profile-links">
            Dashboard
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
