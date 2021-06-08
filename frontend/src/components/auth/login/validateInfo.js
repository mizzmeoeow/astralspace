export default function validateInfo(values) {
  let errors = {};
  var optimizedBirthday = values.birthday.replace(/-/g, "/");
  var myBirthday = new Date(optimizedBirthday);
  var currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";
  var myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000);

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length <= 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length >= 20) {
    errors.password = "Password needs to be 20 characters or less";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password === "password") {
    errors.password = "Password cannot be 'password";
  }

  if (!values.confirm) {
    errors.confirm = "Password is required";
  } else if (values.confirm !== values.password) {
    errors.confirm = "Passwords do not match";
  }

  if (!values.birthday) {
    errors.birthday = "Birthday is required";
  } else if (myAge < 17) {
    errors.birthday = "You must be over 17 to register";
  }

  if (!values.question) {
    errors.question = "Question is required to complete registration";
  }

  return errors;
}
