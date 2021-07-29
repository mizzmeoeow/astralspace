import React, { Component } from "react";
import axios from "axios";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      message: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    axios({
      method: "POST",
      url: "contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <form
        className="sign-in-form contact-form"
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <div className="input-group">
          <label htmlFor="email">Your Email:</label>
          <input
            autoComplete="none"
            type="email"
            name="email"
            className="login-input email"
            placeholder="Email"
          />
        </div>

        <div className="input-group">
          <label htmlFor="name" className="your-name">
            Your name:
          </label>
          <input
            autoComplete="none"
            type="text"
            name="name"
            className="login-input full-name"
            placeholder="Full Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="input">
            Please, let me know how I can help you today:
          </label>
          <textarea
            name="message"
            type="text"
            className="login-input help"
            placeholder="How can I help?"
            cols="68"
            rows="6"
          />
        </div>

        <button
          type="button"
          className="login-btn contact-btn"
          onClick={this.props.onClick}
        >
          Launch
        </button>
        <a href="/">
          <button type="button" className="back-btn contact-btn">
            Go Back
          </button>
        </a>
      </form>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactForm;
