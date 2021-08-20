import React, { Component } from "react";
import background from "../../../images/space.jpg";

class PostSpace extends Component {
  render() {
    return (
      <div
        className="background"
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
    );
  }
}

export default PostSpace;
