import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../actions/action.auth";

const SignInForm = ({ login, check_authenticated }) => {
  const [loginData, SetLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const onChange = (e) =>
    SetLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  //check authentication
  if (check_authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div id="login">
      <div className="sign-in-form">
        <div className="input-group">
          <form onSubmit={(e) => onSubmit(e)}>
            {/* <div className="error-text">{this.state.errorText}</div> */}

            <input
              className="login-input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => onChange(e)}
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
                onChange={(e) => onChange(e)}
                autoComplete="none"
                required
              />
            </div>
            <div className="">
              <button
                className="login-btn"
                // onClick={this.handleSubmit}
                type="submit"
              >
                Launch
              </button>
              <button
                type="button"
                className="back-btn"
                // onClick={() => history.push("/")}
              >
                Go Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  check_authenticated: state.auth.check_authenticated,
});

export default connect(mapStateToProps, { login })(SignInForm);
