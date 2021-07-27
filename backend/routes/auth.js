const router = require("express").Router();
const User = require("../dbSchema/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/keys");
const session = require("express-session");
const tokenList = {};
const refreshToken = require("../dbSchema/models/refreshToken");
const ErrorResponse = require("../middleware/error");
const rtCookieName = "refreshToken";

const validateLoginInput = require("../../frontend/validation/login");
const RefreshToken = require("../dbSchema/models/refreshToken");

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
  // refreshToken = req.cookies[rtCookieName];

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = "User not found";
      res.status(404).json({ errors });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      //returns a bool values in isMatch
      if (isMatch) {
        //User matched
        //res.json({ msg: "Success" });
        const payload = {
          id: user.id,
          name: user.name,
          // avatar: user.avatar
        };

        jwt.sign(
          payload,
          config.JWT_SECRET,
          { expiresIn: config.tokenLife },
          (err, token) => {
            //
            res.json({
              success: true,
              token: "Bearer " + token,
              refreshToken: refreshToken,
            });
          }
        );
      } else {
        //Incorrect Password
        errors.password = "Invalid Login Credentials";
        return res.status(400).json({ errors });
      }
    });
  });
});

router.post("/token", (req, res) => {
  // refresh the damn token
  const postData = req.body;
  // if refresh token exists
  if (postData.refreshToken && postData.refreshToken in tokenList) {
    const user = {
      email: postData.email,
      name: postData.name,
    };
    const token = jwt.sign(user, config.JWT_SECRET, {
      expiresIn: config.tokenLife,
    });
    const response = {
      token: token,
    };
    // update the token in the list
    tokenList[postData.refreshToken].token = token;
    res.status(200).json(response);
  } else {
    res.status(404).send("Invalid request");
  }
});

// router.use(require("../middleware/tokenChecker"));

router.get("/secure", (req, res) => {
  // all secured routes goes here
  res.send("I am secured...");
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});

function isAuthenticated(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, config.JWT_SECRET, (err, user) => {
      if (!user) return res.json({ message: "User not authenticated" });
      else next();
    });
  }
}

router.get("/loggedIn", isAuthenticated, (req, res) => {
  try {
    return res.json({
      id: req.user.id,
      username: req.user.username,
    });
  } catch (err) {
    res.json(false);
  }
});

module.exports = router;
