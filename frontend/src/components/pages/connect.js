import React, { Component } from "react";
import ConnectHeader from "../headernavbar/connectHeader";
import ConnectSpace from "../body/space/connectSpace";
import ConnectFooter from "../footer/connectFooter";
import SearchPage from "../connect/searchPage";

class Connect extends Component {
  render() {
    return (
      <div className="connect-nav">
        <ConnectHeader />
        <SearchPage />
        <ConnectSpace />
        <ConnectFooter />
      </div>
    );
  }
}

export default Connect;
