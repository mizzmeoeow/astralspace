const router = require("express").Router();
var nodemailer = require("nodemailer");
const config = require("../config/keys");

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: config.EMAIL,
    pass: config.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/contact", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = {
    from: name,
    to: config.EMAIL,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  var mail = {
    from: name,
    to: config.EMAIL, //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      return res.json({
        msg: "fail",
      });
    } else {
      return res.json({
        msg: "success",
      });
    }
  });
});

module.exports = router;
