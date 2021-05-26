import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="/contact" className="contact">
          Contact
        </a>
        <div className="lmp">
          LilithMeowProductions
          <span dangerouslySetInnerHTML={{ __html: "&#8482;" }} />
        </div>
      </div>
    );
  }
}

export default Footer;
