import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorText: "",
      redirect: null,
      isAuth: false,
      token: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("login", data)
      .then((response) => {
        console.log("login response: ");
        console.log("response", response);
        localStorage.setItem("token", response.data.token);
        if (response.data.status === 200) {
          this.props.updateUser({
            isAuth: true,
            token: response.token,
            loggedIn: true,
            email: response.data.email,
            withCredentials: true,
            userId: response.userId,
          });
          localStorage.setItem("token", response.token);
          localStorage.setItem("userId", response.userId);
          console.log("login response: ");
          console.log("response", response);
        }
        this.setState({ redirect: "/dashboard" });
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
                    onClick={this.handleSubmit}
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
