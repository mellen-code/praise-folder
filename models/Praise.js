const mongoose = require("mongoose");

const PraiseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: false,
  },
  cloudinaryId: {
    type: String,
    require: false,
  },
  caption: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    default: 'private',
    enum: ['private', 'public'],
  },
  pinned: {
    type: Boolean,
    default: false,
    require: false,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Praise", PraiseSchema);
