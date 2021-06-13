const { User } = require("./dbSchema/models/user");
const express = require("express");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
const cors = require("cors");

const port = 5000;

mongoose
  .connect("mongodb://localhost:27017/AstralSpace", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to mongodb cloud! :)");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view-engine", "ejs");

//cookie session
app.use(
  cookieSession({
    keys: ["randomStringASyoulikehjudfsajk"],
  })
);

//route for serving frontend files

app
  .get("/profile", (req, res) => {
    res.render("index.ejs", { name: "" });
  })
  .get("/login", (req, res) => {
    res.render("login.ejs");
  });

app.post("/register", async (req, res, next) => {
  console.log("data", req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  var username = req.body.username;
  var email = req.body.email;
  var password = hashedPassword;
  var birthday = req.body.birthday;
  var question = req.body.question;

  const registerSchema = mongoose.Schema({
    username: String,
    email: String,
    hashedPassword: String,
    birthday: String,
    question: String,
  });

  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid username" });
  }

  if (!hashedPassword || typeof hashedPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }

  if (hashedPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password too small. Should be atleast 6 characters",
    });
  }

  if (!birthday || typeof birthday !== "string") {
    return res.json({ status: "error", error: "Invalid birthday" });
  }

  if (!question || typeof question !== "string") {
    return res.json({ status: "error", error: "Invalid question" });
  }

  try {
    const response = await User.create({
      username,
      email,
      password,
      birthday,
      question,
    });
    console.log("User created successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      return res.json({ status: "error", error: "Username already in use" });
    }
    throw error;
  }

  res.json({ status: "ok" });
});

app.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({ $or: [{ email: username }] }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.json({
            error: err,
          });
        }
        if (result) {
          let token = jwt.sign({ name: user.name }, "verySecretValue", {
            expiresIn: "2h",
          });
          res.json({
            message: "Login Successful!",
            token,
          });
        } else {
          res.json({
            message: "Password does not match!",
          });
        }
      });
    } else {
      res.json({
        message: "No user found!",
      });
    }
  });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
