const mongoose = require("mongoose");

const contentsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  satisfaction: {
    type: String,
    required: true,
  },
  emotion: {
    type: String,
    required: true,
  },
  diary: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Content", contentsSchema);
