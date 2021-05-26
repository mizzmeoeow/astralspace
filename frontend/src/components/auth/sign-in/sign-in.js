import React, { Component } from "react";
import Layout from "../../layout";
import SignInClouds from "../../body/clouds/signInClouds";

class SignIn extends Component {
  render() {
    return (
      <div className="header sign-in">
        <p className="sign-in-page">Sign In</p>
        <div>
          {this.props.children}
          <Layout />
          <SignInClouds />
        </div>
      </div>
    );
  }
}

export default SignIn;
