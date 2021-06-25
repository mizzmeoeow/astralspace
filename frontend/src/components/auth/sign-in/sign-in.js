import React, { Component } from "react";
import Layout from "../../layout";
import SignInClouds from "../../body/clouds/signInClouds";
import Footer from "../../footer/footer";

class SignIn extends Component {
  render() {
    return (
      <div className="header sign-in">
        <p className="sign-in-page">Sign In</p>
        <div>
          {this.props.children}
          <Layout />
          <SignInClouds />
          <Footer />
        </div>
      </div>
    );
  }
}

export default SignIn;
