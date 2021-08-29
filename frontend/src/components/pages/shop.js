import React, { Component } from "react";
import Layout from "../layout";
import Navbar from "../headernavbar/navbar";
import ShopClouds from "../body/clouds/shopClouds";

class Shop extends Component {
  render() {
    return (
      <div className="shop header">
        <p className="sign-in-page">Shop</p>
        {this.props.children}
        <Layout />
        <Navbar />
        <ShopClouds />
      </div>
    );
  }
}

export default Shop;
