import React, { Component } from "react";
import LandingClouds from "./clouds/landingCloud";
import Footer from "../footer/footer";

class Content extends Component {
  render() {
    return (
      <div className="body">
        <LandingClouds className="cloud-svg-landing__links" />
        <Footer />
      </div>
    );
  }
}

export default Content;
