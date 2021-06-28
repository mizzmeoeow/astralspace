import React, { Component } from "react";

import history from "../../../history";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="sign-in-form" ref={this.props.containerRef}>
        <div className="input-group">
          <label htmlFor="email">Email Address to reach you:</label>
          <input
            type="email"
            name="email"
            className="login-input"
            placeholder="Email"
          />
        </div>

        <div className="input-group">
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            name="name"
            className="login-input"
            placeholder="Full Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="input">
            Please, let me know how I can help you today:
          </label>
          <input
            type="textarea"
            name="input"
            className="login-input"
            placeholder="How can I help?"
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
