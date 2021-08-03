import React, { Component } from "react";

class ConnectHeader extends Component {
  render() {
    return (
      <div className="connect-header">
        <p className="connect">Connect</p>
        <div className="navbar">
          <a href="/dashboard" className="nav-connect">
            Home Space
          </a>
        </div>
        <br />
      </div>
    );
  }
}

export default ConnectHeader;
