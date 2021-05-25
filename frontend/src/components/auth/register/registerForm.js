import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput } from "../../formFields";

import history from "../../../history";

class RegisterForm extends Component {
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
        <Field
          className="sign-in-form__confirm-password"
          name="confirm password"
          title="Confirm Password"
          name="confirm password"
          component={FormInput}
        />
        <Field
          className="sign-in-form__birthday"
          name="birthday"
          title="Birthday"
          name="Birthday"
          component={FormInput}
        />
        <Field
          className="sign-in-form__question"
          name="question"
          title="What art field interests you?"
          name="question"
          component={FormInput}
        />
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "RegisterForm",
})(RegisterForm);

export default RegisterForm;
