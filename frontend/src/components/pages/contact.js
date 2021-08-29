import React, { Component } from "react";

import ContactClouds from "../../components/body/clouds/contactClouds";
import Footer from "../footer/footer";

class Contact extends Component {
  render() {
    return (
      <div className="contact header">
        <p className="sign-in-page">Contact</p>

        <ContactClouds />
        <Footer />
      </div>
    );
  }
}

export default Contact;
