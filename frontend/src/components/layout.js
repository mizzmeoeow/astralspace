import React, { Component } from "react";

import Header from "../components/headernavbar/header";
import Navbar from "../components/headernavbar/navbar";

import Footer from "../components/footer/footer";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
    };
  }
  render() {
    return (
      <div className="layout">
        {this.props.children}
        <Header />
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default Layout;
