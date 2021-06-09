const express = require("express");
const router = express.Router();
const User = require("../dbSchema/models/user");

router.route("/register").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const birthday = req.body.birthday;
  const question = req.body.question;
  const newUser = new User({
    username,
    email,
    password,
    birthday,
    question,
  });

  newUser.save();
});

module.exports = router;
