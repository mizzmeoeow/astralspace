const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const PostSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
      required: false,
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
