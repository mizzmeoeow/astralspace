import React, { Component } from "react";

class noMatch extends Component {
  render() {
    return (
      <div>
        The page you are trying to access cannot be found. Please{" "}
        <a href="/login">Login</a> or <a href="/register">Register</a> to
        continue.
      </div>
    );
  }
}

export default noMatch;
