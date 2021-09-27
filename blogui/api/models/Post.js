const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    time: { type: String, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    desc: {
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
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
