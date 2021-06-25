import React, { Component } from "react";
import axios from "axios";

export default class ProfileAuth extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/profile");
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:5000/logout", { withCredentials: true })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
      </div>
    );
  }
}
