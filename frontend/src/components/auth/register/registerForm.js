import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import history from "../../../history";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../../utils/notification/notification";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
  // isBirthday,
  // isQuestion,
} from "../../../utils/validation/validation";

const initialState = {
  username: "",
  email: "",
  password: "",
  cf_password: "",
  birthday: "",
  question: "",
  err: "",
  success: "",
};

function RegisterForm() {
  const [user, setUser] = useState(initialState);
  const [accountCreated, setAccountCreated] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState(false);

  const {
    username,
    email,
    password,
    cf_password,
    birthday,
    question,
    err,
    success,
  } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      isEmpty(username) ||
      isEmpty(password) ||
      isEmpty(birthday) ||
      isEmpty(question)
    )
      return setUser({
        ...user,
        err: "Please fill in all fields.",
        success: "",
      });

    if (!isEmail(email))
      return setUser({ ...user, err: "Invalid emails.", success: "" });

    if (isLength(password))
      return setUser({
        ...user,
        err: "Password must be at least 6 characters.",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setUser({ ...user, err: "Password did not match.", success: "" });

    // if (!isBirthday(birthday))
    //   return setUser({
    //     ...user,
    //     err: "Sorry, you must be older to register",
    //     success: "",
    //   });

    // if (!isQuestion(value))
    //   return setUser({
    //     ...user,
    //     err: "Sorry, you must like art to register",
    //     success: "",
    //   });

    try {
      const res = await axios.post("auth/register", {
        username,
        email,
        password,
        birthday,
        question,
      });

      setUser({ ...user, err: "", success: res.data.msg });
      setAccountCreated(true);
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
      setUsernameTaken(true);
    }
  };

  if (accountCreated) {
    return <Redirect to="/login" />;
  }

  if (usernameTaken) {
    return <Redirect to="/unsuccess" />;
  }

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <div className="sign-in-form register">
        {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}
        <label htmlFor="username">Username</label>
        <input
          autoComplete="off"
          type="text"
          name="username"
          className="login-input"
          placeholder="Username"
          value={username}
          onChange={handleChangeInput}
        />
      </div>
      <div className="sign-in-form">
        <label htmlFor="email">Email</label>
        <input
          autoComplete="off"
          type="text"
          name="email"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={handleChangeInput}
        />
      </div>
      <div className="sign-in-form">
        <label htmlFor="password">Password</label>
        <input
          autoComplete="off"
          type="password"
          name="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={handleChangeInput}
        />
      </div>
      <div className="sign-in-form">
        <label htmlFor="confirm">Confirm Password</label>
        <input
          autoComplete="off"
          type="password"
          name="cf_password"
          className="login-input"
          placeholder="Confirm Password"
          value={cf_password}
          onChange={handleChangeInput}
        />
      </div>
      <div className="sign-in-form birthday">
        <label htmlFor="birthday">Birthday</label>
        <input
          autoComplete="off"
          type="date"
          name="birthday"
          min="2004-28-05"
          max="2096-28-05"
          className="login-input"
          placeholder="Birthday"
          value={birthday}
          onChange={handleChangeInput}
        />
      </div>
      <div className="sign-in-form question">
        <label htmlFor="question">What art field interests you?</label>
        <input
          autoComplete="off"
          type="question"
          name="question"
          className="login-input"
          placeholder="Question"
          value={question}
          onChange={handleChangeInput}
        />
      </div>
      <button type="submit" className="login-btn register-btn">
        Register
      </button>
      <a href="/">
        <button type="button" className="login-btn register-btn">
          Go Back
        </button>
      </a>
    </form>
  );
}

export default RegisterForm;
