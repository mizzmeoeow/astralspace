const jwt = require("jsonwebtoken");
const User = require("../dbSchema/models/user");

const config = process.env;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed",
    });
  }
};

// module.exports = (req, res, next) => {
//   const { authorization } = req.headers;
//   //authorization === Bearer ewefwegwrherhe
//   if (!authorization) {
//     return res.status(401).json({ error: "you must be logged in" });
//   }
//   const token = authorization.replace("Bearer ", "");
//   jwt.verify(token, config.JWT_KEY, (err, payload) => {
//     if (err) {
//       return res.status(401).json({ error: "you must be logged in" });
//     }

//     const { _id } = payload;
//     User.findById(_id).then((userData) => {
//       req.user = userData;
//       next();
//     });
//   });
// };
