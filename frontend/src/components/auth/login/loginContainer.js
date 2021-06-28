import React, { Component } from "react";
import { withRouter } from "react-router";
import SignIn from "../sign-in/sign-in";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    if (props.user) {
      alert("You can't continue if you are logged in!");
      props.history.push("/dashboard");
    }
  }

  render() {
    return <SignIn />;
  }
}

export default withRouter(LoginContainer);
