import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("logout")
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch((error) => {
        console.log("Logout error");
      });
  }
  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div className="navbar">
        {loggedIn ? (
          <Link to="#" onClick={this.logout}></Link>
        ) : (
          <section>
            <a href="/dashboard" className="navbar-links">
              Home
            </a>
            <a href="/connect" className="navbar-links">
              Connect
            </a>
            <a href="/blog" className="navbar-links">
              Blog
            </a>
          </section>
        )}
      </div>
    );
  }
}

export default Navbar;
