import React, { Component, useState } from "react";
// import ValidateForm from "../login/validateInfo";

import history from "../../../history";
import axios from "axios";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm: "",
      birthday: "",
      question: "",
      usernameError: false,
      emailError: false,
      passwordError: false,
      confirmError: false,
      birthdayError: false,
      questionError: false,
    };
    this.validateForm = this.validateForm.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  validateForm() {
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const confirm = this.state.confirm;
    const birthday = this.state.username;
    const question = this.state.question;

    if (username) {
      this.setState({ usernameError: false });
    } else {
      this.setState({ usernameError: true });
    }

    if (email) {
      this.setState({ emailError: false });
    } else {
      this.setState({ emailError: true });
    }

    if (password) {
      this.setState({ passwordError: false });
    } else {
      this.setState({ passwordError: true });
    }

    if (confirm) {
      this.setState({ confirmError: false });
    } else {
      this.setState({ confirmError: true });
    }

    if (birthday) {
      this.setState({ birthdayError: false });
    } else {
      this.setState({ birthdayError: true });
    }

    if (question) {
      this.setState({ questionError: false });
    } else {
      this.setState({ questionError: true });
    }

    var signUpFormData = {
      username: username,
      email: email,
      password: password,
      birthday: birthday,
      question: question,
    };
    axios
      .post("https://localhost:5000/register", signUpFormData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.axios;
  }

  onChangeInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className="sign-in-form" onChange={(e) => this.onChangeInput(e)}>
        <div className="sign-in-form register">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
            value={this.state.username}
            style={{ border: this.state.usernameError ? "1px solid red" : "" }}
            onChange={(e) => this.onChangeInput(e)}
          />
        </div>
        <div className="sign-in-form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="login-input"
            placeholder="Email"
            value={this.state.email}
            style={{ border: this.state.emailError ? "1px solid red" : "" }}
            onChange={(e) => this.onChangeInput(e)}
          />
        </div>
        <div className="sign-in-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
            value={this.state.password}
            style={{ border: this.state.passwordError ? "1px solid red" : "" }}
            onChange={(e) => this.onChangeInput(e)}
          />
        </div>
        <div className="sign-in-form">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            className="login-input"
            placeholder="Confirm Password"
            value={this.state.confirm}
            style={{ border: this.state.confirmError ? "1px solid red" : "" }}
            onChange={(e) => this.onChangeInput(e)}
          />
        </div>
        <div className="sign-in-form birthday">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            name="birthday"
            min="2004-28-05"
            max="2096-28-05"
            className="login-input"
            placeholder="Birthday"
            value={this.state.birthday}
            style={{ border: this.state.birthdayError ? "1px solid red" : "" }}
            onChange={(e) => this.onChangeInput(e)}
          />
        </div>
        <div className="sign-in-form question">
          <label htmlFor="question">What art field interests you?</label>
          <input
            type="question"
            name="question"
            className="login-input"
            placeholder="Question"
            value={this.state.question}
            style={{ border: this.state.questionError ? "1px solid red" : "" }}
            onChange={(e) => this.onChangeInput(e)}
          />
        </div>
        <button
          onClick={this.validate}
          type="submit"
          className="login-btn"
          value="Validate"
        >
          Register
        </button>
        <button
          type="button"
          className="login-btn"
          onClick={() => history.push("/")}
        >
          Go Back
        </button>
      </form>
    );
  }
}

export default RegisterForm;
