import React, { Component } from "react";
import Layout from "../../layout";
import SigninForm from "./signinForm";
import SignInClouds from "../../body/clouds/signInClouds";

class Signin extends Component {
  render() {
    return (
      <div className="header sign-in">
        Sign In
        <div>
          {this.props.children}
          <Layout />
          <SigninForm className="sign-in__form" />
          <SignInClouds />
        </div>
      </div>
    );
  }
}

export default Signin;
