import React, { Component } from "react";
import Layout from "../layout";
import ShopClouds from "../body/clouds/shopClouds";

class Shop extends Component {
  render() {
    return (
      <div className="shop header">
        <p className="sign-in-page">Shop</p>
        {this.props.children}
        <Layout />
        {/* <button
          type="button"
          className="back-btn"
          onClick={() => history.push("/profile")}
        >
          Home Space
        </button> */}
        <ShopClouds />
      </div>
    );
  }
}

export default Shop;
