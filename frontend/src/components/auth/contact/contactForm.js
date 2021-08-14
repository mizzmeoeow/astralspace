import React, { useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <h2 className="successful-message">
      Your message has been sent successfully. I will contact you soon!
    </h2>
  );
};

function ContactForm(props) {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vw1i1rf",
        "template_flbzx4k",
        e.target,
        "user_hZ1PCrWMwntja2qXcVqqZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <form
      className="sign-in-form contact-form"
      onSubmit={sendEmail}
      method="POST"
    >
      <div className="input-group">
        <label htmlFor="email">Your Email:</label>
        <input
          autoComplete="none"
          type="text"
          name="email"
          className="login-input email"
          placeholder="Email"
          // value={this.state.email}
          // onChange={this.onEmailChange.bind(this)}
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="name" className="your-name">
          Your Name:
        </label>
        <input
          autoComplete="none"
          type="text"
          name="name"
          className="login-input full-name"
          placeholder="Full Name"
          // value={this.state.name}
          // onChange={this.onNameChange.bind(this)}
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="input">
          Please, let me know how I can help you today:
        </label>
        <textarea
          name="message"
          type="text"
          className="login-input help"
          placeholder="How can I help?"
          cols="68"
          rows="6"
          // value={this.state.message}
          // onChange={this.onMessageChange.bind(this)}
          required
        />
      </div>

      <button
        type="submit"
        className="login-btn contact-btn"
        // onClick={this.handleSubmit}
      >
        Launch
      </button>
      <a href="/">
        <button type="button" className="back-btn contact-btn">
          Go Back
        </button>
      </a>
      <div className="row">{result ? <Result /> : null}</div>
    </form>
  );
}

export default ContactForm;
