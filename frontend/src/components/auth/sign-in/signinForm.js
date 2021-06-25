import React, { Component } from "react";
import axios from "axios";

import history from "../../../history";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorText: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("working so far"),
      this.setState({
        [event.target.name]: event.target.value,
        errorText: "",
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/login", user)
      .then((response) => {
        console.log("response", response);
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth();
        } else {
          this.setState({
            errorText: "Wrong email or password",
          });
          this.props.handleUnsuccessfulAuth();
        }
      })
      .catch((error) => {
        this.setState({
          errorText: "An error occurred",
        });
      });
  }

  render() {
    return (
      <div id="login">
        <div className="sign-in-form">
          <div className="input-group">
            <div>{this.state.errorText}</div>
            <form onSubmit={this.handleSubmit}>
              <input
                className="login-input"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                autoComplete="none"
                required
              />
              <div>
                <input
                  className="login-input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  autoComplete="none"
                  required
                />
              </div>
              <div className="">
                <button className="login-btn" type="submit">
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
