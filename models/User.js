const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", userSchema);
