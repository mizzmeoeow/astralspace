import React, { Component } from "react";

class PostHeader extends Component {
  render() {
    return (
      <div className="category-header">
        <p className="category-heading">Interact with Posts</p>
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

export default PostHeader;
