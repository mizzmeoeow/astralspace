import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    Auth.deauthenticateUser();
    this.props.history.push("/sign-in");
  }
  render() {
    return <div>{this.handleLogout()}</div>;
  }
}
export default withRouter(Logout);
