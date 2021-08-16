const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      required: false,
    },
    key: {
      type: String,
      required: false,
    },
  },
  { timestamps: true, collection: "posts" }
);

module.exports = mongoose.model("Post", PostSchema);
