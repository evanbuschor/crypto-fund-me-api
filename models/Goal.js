const mongoose = require("mongoose");

const GoalSchema = mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  description: { type: String },
  goalAmount: { type: Number },
  bitcoinAddr: { type: String, required: true },
  postDateUTC: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Goal", GoalSchema);
