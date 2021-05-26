import React, { Component } from "react";

import history from "../../../history";

// class RegisterForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     const { className, handleSubmit } = this.props;
//     return (
//       <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
//         <Field
//           className="sign-in-form__email"
//           type="email"
//           title="Email"
//           name="email"
//           component={FormInput}
//         />
//         <Field
//           className="sign-in-form__password"
//           name="password"
//           title="Password"
//           name="password"
//           component={FormInput}
//         />
//         <Field
//           className="sign-in-form__confirm-password"
//           name="confirm password"
//           title="Confirm Password"
//           name="confirm password"
//           component={FormInput}
//         />
//         <Field
//           className="sign-in-form__birthday"
//           name="birthday"
//           title="Birthday"
//           name="Birthday"
//           component={FormInput}
//         />
//         <Field
//           className="sign-in-form__question"
//           name="question"
//           title="What art field interests you?"
//           name="question"
//           component={FormInput}
//         />
//       </form>
//     );
//   }
// }

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitRegister(e) {}

  render() {
    return (
      <form className="sign-in-form">
        <div className="sign-in-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
          />
        </div>

        <div className="sign-in-form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="login-input"
            placeholder="Email"
          />
        </div>

        <div className="sign-in-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
          />
        </div>

        <div className="sign-in-form">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="confirm password"
            name="confirm password"
            className="login-input"
            placeholder="Confirm Password"
          />
        </div>

        <div className="sign-in-form">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="birthday"
            name="birthday"
            className="login-input"
            placeholder="Birthday"
          />
        </div>

        <div className="sign-in-form">
          <label htmlFor="question">What art field interests you?</label>
          <input
            type="question"
            name="question"
            className="login-input"
            placeholder="Question"
          />
        </div>
        <button
          type="button"
          className="login-btn"
          onClick={this.submitRegister.bind(this)}
        >
          Register
        </button>
        <button
          type="button"
          className="login-btn"
          onClick={this.submitRegister.bind(this)}
        >
          Go Back
        </button>
      </form>
    );
  }
}

// RegisterForm = reduxForm({
//   form: "RegisterForm",
// })(RegisterForm);

export default RegisterForm;
