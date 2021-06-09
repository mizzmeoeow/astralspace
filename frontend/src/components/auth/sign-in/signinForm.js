import React, { Component } from "react";

import history from "../../../history";

// class SignInForm extends React.Component {
//   render() {
//     return (
//       <div className="sign-in-form" ref={this.props.containerRef}>
//         <div className="input-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             name="username"
//             className="login-input"
//             placeholder="Username"
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="login-input"
//             placeholder="Password"
//           />
//         </div>

//         <button
//           type="button"
//           className="login-btn"
//           onClick={this.props.onClick}
//         >
//           Launch
//         </button>

//
//     );
//   }
// }

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/api/login", user)
      .then(() => console.log("done"))
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div id="login">
        <div className="sign-in-form">
          {/* <p>{this.state.response}</p> --> */}
          <div className="input-group">
            <form onSubmit={this.handleSubmit}>
              <input
                className="login-input"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                onChange={this.onChange}
              />
              <input
                className="login-input"
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                onChange={this.onChange}
              />
              <button className="login-btn" type="submit">
                Launch
              </button>
              <button
                type="button"
                className="back-btn"
                onClick={() => history.push("/")}
              >
                Go Back
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
