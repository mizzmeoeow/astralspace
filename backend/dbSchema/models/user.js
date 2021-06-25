const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      birthday: {
        type: Date,
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      role: {
        type: Number,
        default: 0,
      },
    },
    { timestamps: true, collection: "Users" }
  )
);

module.exports.User = User;
