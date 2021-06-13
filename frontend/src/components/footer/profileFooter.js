import React, { Component } from "react";

class ProfileFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <a href="/contact" className="contact profile-contact">
          Contact
        </a>
        <div className="lmp profile-lmp">
          LilithMeowProductions
          <span dangerouslySetInnerHTML={{ __html: "&#8482;" }} />
        </div>
      </div>
    );
  }
}

export default ProfileFooter;
