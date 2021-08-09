import React, { Component } from "react";
import background from "../../../images/space.jpg";
import Write from "../../categories/pages/write/write";

class CategorySpace extends Component {
  render() {
    return (
      <div
        className="background"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {" "}
        <Write />
      </div>
    );
  }
}

export default CategorySpace;
