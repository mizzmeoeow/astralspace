import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleProtected(event) {
  //   const headers = {
  //     authorization: `Bearer ${Cookie.get("jwt")}`,
  //   };
  //   const response = axios.get("/loggedIn", {
  //     headers,
  //   });
  //   console.log(response.data);
  // }

  handleChange(event) {
    console.log("working so far"),
      this.setState({
        [event.target.name]: event.target.value,
        errors: "",
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("login", data)
      .then((response) => {
        console.log("login response: ");
        console.log("response", response);
        localStorage.setItem(localStorage, response.data);
        console.log(localStorage);
        return response;
      })
      .catch((error) => {
        this.setState({
          errorText: "An error occurred",
          errorText: "Wrong email or password, please try again.",
          isAuth: false,
        });
        console.log("login error: ");
        console.log(error);
      });
  }

  if(response) {
    return <Redirect to="/dashboard" />;
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    } else {
      return (
        <div id="login">
          <div className="sign-in-form">
            <div className="input-group">
              <form onSubmit={this.handleSubmit}>
                <div className="error-text">{this.state.errorText}</div>

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
                  <button
                    className="login-btn"
                    onClick={this.handleProtected}
                    type="submit"
                  >
                    Launch
                  </button>
                  <a href="/">
                    <button type="button" className="back-btn">
                      Go Back
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default LoginForm;
