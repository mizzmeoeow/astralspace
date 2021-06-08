import React, { Component } from "react";

import ContactClouds from "../../components/body/clouds/contactClouds";
import ContactForm from "../auth/contact/contactForm";
import Footer from "../footer/footer";

class Contact extends Component {
  render() {
    return (
      <div className="contact header">
        <p className="sign-in-page">Contact</p>
        <ContactClouds />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default Contact;
