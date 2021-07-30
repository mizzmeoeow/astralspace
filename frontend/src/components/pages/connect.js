import React, { Component } from "react";
import ConnectHeader from "../headernavbar/connectHeader";
import ConnectSpace from "../body/space/connectSpace";
import ConnectFooter from "../footer/connectFooter";

class Connect extends Component {
  render() {
    return (
      <div>
        <ConnectHeader />
        <ConnectSpace />
        <ConnectFooter />
      </div>
    );
  }
}

export default Connect;
