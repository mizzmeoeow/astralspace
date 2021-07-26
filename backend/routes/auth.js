const router = require("express").Router();
const User = require("../dbSchema/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/keys");
const session = require("express-session");
const tokenList = {};
const refreshToken = require("../dbSchema/models/refreshToken");

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
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const postData = req.body;

  const user = {
    email: postData.email,
    password: postData.password,
  };

  const token = jwt.sign(user, config.JWT_SECRET, {
    expiresIn: config.tokenLife,
  });
  const refreshToken = await RefreshToken.createToken(user);
  // refreshTokens.push(refreshToken)
  const response = {
    status: "Logged in",
    accessToken: token,
    refreshToken: refreshToken,
  };
  tokenList[refreshToken] = response;
  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) throw Error("User does not exist");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error("Invalid credentials");

    if (!token) throw Error("Couldnt sign the token");

    res.status(200).json({
      response,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      headers: {
        "Content-Type": "application/json",
      },
      sameSite: "strict",
      // httpOnly: true,
      secure: true,
      auth: true,
      msg: "Login Successful",
      authToken: user,
      redirect: true,
    });
    res.cookie("accessToken", accessToken, {
      maxAge: 300000, // 5 minutes
      httpOnly: true,
    });

    res.cookie("refreshToken", refreshToken, {
      maxAge: 3.154e10, // 1 year
      httpOnly: true,
    });
    req.session.user = user;
    req.session.save();
    return res.send(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

// router.get("/login", (req, res) => {
//   const user = {
//     email: req.body.email,
//     password: req.body.password,
//   };
//   req.session.user = user;
//   req.session.save();
//   return res.send("User logged in");
// });

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
    return res.send({ message: "This is a protected route" });
    //   const token = req.cookies.token;
    //   if (!token) return res.json(false);

    //   jwt.verify(token, process.env.JWT_SECRET);

    //   res.send(true);
  } catch (err) {
    res.json(false);
  }
});

module.exports = router;
