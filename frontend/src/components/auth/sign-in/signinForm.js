import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput } from "../../formFields";

import history from "../../../history";

class SigninForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
        <Field
          className="sign-in-form__email"
          type="email"
          title="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="sign-in-form__password"
          name="password"
          title="Password"
          name="password"
          component={FormInput}
        />
      </form>
    );
  }
}

SigninForm = reduxForm({
  form: "SigninForm",
})(SigninForm);

export default SigninForm;
