import React, { Component } from "react";

class ConnectFooter extends Component {
  render() {
    return (
      <div className="connect-footer">
        <a href="/contact" className="connect-contact">
          Contact
        </a>
        <div className="connect-lmp">
          LilithMeowProductions
          <span dangerouslySetInnerHTML={{ __html: "&#8482;" }} />
        </div>
      </div>
    );
  }
}

export default ConnectFooter;
