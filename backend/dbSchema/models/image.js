var mongoose = require("mongoose");

var imageSchema = new mongoose.Schema(
  {
    image: {
      data: Buffer,
      contentType: String,
    },
    name: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  { timestamps: true, collection: "Images" }
);

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model("Image", imageSchema);
