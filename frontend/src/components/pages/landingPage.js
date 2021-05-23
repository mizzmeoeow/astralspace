import React, { Component } from "react";
import Content from "../body/content";

class LandingPage extends Component {
  render() {
    return (
      <div className="header">
        <p className="header__astral">Astral</p>
        <p className="header__space">Space</p>
        <Content />
      </div>
    );
  }
}

export default LandingPage;
