import React, { Component } from "react";

import history from "../../../history";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="sign-in-form" ref={this.props.containerRef}>
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
          type="button"
          className="login-btn"
          onClick={this.props.onClick}
        >
          Launch
        </button>

        <button
          type="button"
          className="back-btn"
          onClick={() => history.push("/")}
        >
          Go Back
        </button>
      </div>
    );
  }
}

export default ContactForm;
