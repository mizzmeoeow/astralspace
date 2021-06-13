import React, { Component } from "react";

import Header from "../components/headernavbar/header";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {this.props.children}
        <Header />
      </div>
    );
  }
}

export default Layout;
