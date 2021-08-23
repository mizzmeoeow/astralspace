const router = require("express").Router();
const User = require("../dbSchema/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/keys");
const tokenList = {};
const ErrorResponse = require("../middleware/error");

const validateLoginInput = require("../../frontend/validation/login");

//REGISTER
router.post("/register", async (req, res, next) => {
  console.log("data", req.body);
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      birthday: req.body.birthday,
      question: req.body.question,
    });

    const user = await newUser.save();
    res.status(200).json(user);
    next();
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  console.log(isValid);
  if (!isValid) {
    return res.status(400).json({ errors });
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = "User not found";
      res.status(404).json({ errors });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      //returns a bool values in isMatch
      if (isMatch) {
        //User matched
        const payload = {
          id: user._id,
          username: user.username,
          // admin: user.admin,
          profilePic: user.profilePic,
        };

        jwt.sign(
          payload,
          config.JWT_SECRET,
          { expiresIn: config.tokenLife },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              httpOnly: true,
              secure: true,
              sameSite: true,
            });
          }
        );
      } else {
        //Incorrect Password
        errors.password = "Invalid Login Credentials";
        return res.status(400).json({ errors, token: null, success: false });
      }
    });
  });
});

router.get("/secure", (req, res) => {
  // all secured routes goes here
  res.send("I am secured...");
});

module.exports = router;
