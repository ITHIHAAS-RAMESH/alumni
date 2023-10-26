const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  Batch: {
    type: Number,
    required: true,
    default: -1,
  },
  Company: {
    type: String,
    required: true,
    default: "NA",
  },
  Designation: {
    type: String,
    required: true,
    default: "NA",
  },
  AOE: {
    type: String,
    required: true,
    default: "NA",
  },
  ResidingIn: {
    type: String,
    required: true,
    default: "NA",
  },
  State_or_Country: {
    type: String,
    required: true,
    default: "NA",
  },
});

module.exports = mongoose.model("Alumni", alumniSchema);
