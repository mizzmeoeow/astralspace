import React, { Component } from "react";
import LandingClouds from "./clouds/landingCloud";

class Content extends Component {
  render() {
    return (
      <div className="body">
        <LandingClouds className="cloud-svg-landing__links" />
      </div>
    );
  }
}

export default Content;
