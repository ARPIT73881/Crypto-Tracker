const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
  },
  { collection: "users" }
);

module.exports = mongoose.model("users", userSchema);
