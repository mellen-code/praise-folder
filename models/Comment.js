const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  praise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Praise",
  },
  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdByUsername: {
    type: String,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);