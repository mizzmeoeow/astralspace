import React, { Component } from "react";

class MusicHeader extends Component {
  render() {
    return (
      <div className="category-header">
        <p className="category-heading">Music</p>
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

export default MusicHeader;
