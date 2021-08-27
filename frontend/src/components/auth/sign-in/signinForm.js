import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../../actions/actionAuth";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      submitted: false,
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    if (this.props.auth.isAuthenticated) return <Redirect to="/dashboard" />;
    else
      return (
        <div id="login">
          <div className="sign-in-form">
            <div className="input-group">
              <form onSubmit={this.onSubmit}>
                <div className="error-text">{this.state.errorText}</div>

                <input
                  className="login-input"
                  type="email"
                  id="email"
                  name="email"
                  error={errors.email}
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
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
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
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

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default withRouter(connect(mapStateToProps, { loginUser })(LoginForm));
