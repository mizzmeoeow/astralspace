import React from "react";
import RegisterClouds from "../../body/clouds/registerClouds";
import Layout from "../../layout";

const Register = () => {
  return (
    <div className="register header">
      <p className="sign-in-page">Register</p>
      <Layout />
      <RegisterClouds />
    </div>
  );
};

export default Register;
