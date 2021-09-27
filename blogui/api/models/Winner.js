const mongoose = require("mongoose");

const WinnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    desc: { type: String, required: true },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Winner", WinnerSchema);
