import React, { Component } from "react";

import history from "../../../history";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="sign-in-form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
          />
        </div>

        <button
          type="button buttons"
          className="back-btn"
          onClick={this.submitLogin.bind(this)}
        >
          Go Back
        </button>

        <button
          type="button buttons"
          className="login-btn"
          onClick={this.submitLogin.bind(this)}
        >
          Launch
        </button>
      </div>
    );
  }
}

export default SignInForm;
