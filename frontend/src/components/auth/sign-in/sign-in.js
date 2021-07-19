import React, { Component } from "react";
import Layout from "../../layout";
import SignInClouds from "../../body/clouds/signInClouds";
import Footer from "../../footer/footer";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/");
  }

  handleUnsuccessfulAuth() {
    this.props.handleUnsuccessfulLogin();
  }

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
