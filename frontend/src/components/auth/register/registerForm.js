import React, { useState } from "react";
import useForm from "../login/useForm";
import validate from "../login/validateInfo";

import history from "../../../history";
import axios from "axios";

const RegisterForm = ({ submitForm }) => {
  const { values, handleSubmit, errors, handleChange } = useForm(
    submitForm,
    validate
  );

  function handleClick(event) {
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
      birthday: values.birthday,
      question: values.question,
    };
    axios.post("http://localhost:5000/register", newUser).then((response) => {
      console.log("response", response);
      location.href = "/sign-in";
    });
  }

  function submitForm(event) {
    event.preventDefault();
  }

  return (
    <form className="sign-in-form" onSubmit={handleSubmit} noValidate>
      <div className="sign-in-form register">
        <label htmlFor="username">Username</label>
        <input
          autoComplete="off"
          type="text"
          name="username"
          className="login-input"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <h4 className="error">{errors.username}</h4>}
      </div>
      <div className="sign-in-form">
        <label htmlFor="email">Email</label>
        <input
          autoComplete="off"
          type="text"
          name="email"
          className="login-input"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <h4 className="error">{errors.email}</h4>}
      </div>
      <div className="sign-in-form">
        <label htmlFor="password">Password</label>
        <input
          autoComplete="off"
          type="password"
          name="password"
          className="login-input"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <h4 className="error">{errors.password}</h4>}
      </div>
      <div className="sign-in-form">
        <label htmlFor="confirm">Confirm Password</label>
        <input
          autoComplete="off"
          type="password"
          name="confirm"
          className="login-input"
          placeholder="Confirm Password"
          value={values.confirm}
          onChange={handleChange}
        />
        {errors.confirm && <h4 className="error">{errors.confirm}</h4>}
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
          value={values.birthday}
          onChange={handleChange}
        />
        {errors.birthday && <h4 className="error">{errors.birthday}</h4>}
      </div>
      <div className="sign-in-form question">
        <label htmlFor="question">What art field interests you?</label>
        <input
          autoComplete="off"
          type="question"
          name="question"
          className="login-input"
          placeholder="Question"
          value={values.question}
          onChange={handleChange}
        />
        {errors.question && <h4 className="error">{errors.question}</h4>}
      </div>
      <button
        type="submit"
        className="login-btn register-btn"
        value="Validate"
        onClick={handleClick}
      >
        Register
      </button>
      <button
        type="button"
        className="login-btn register-btn"
        onClick={() => history.push("/")}
      >
        Go Back
      </button>
    </form>
  );
};

export default RegisterForm;
