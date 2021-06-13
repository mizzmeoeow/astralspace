import React, { Component } from "react";
import RegisterClouds from "../../body/clouds/registerClouds";
import Layout from "../../layout";
import Footer from "../../footer/footer";

class Register extends Component {
  render() {
    return (
      <div className="register header">
        <p className="sign-in-page">Register</p>
        <Layout />
        <RegisterClouds />
        <Footer />
      </div>
    );
  }
}

export default Register;
