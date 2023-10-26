const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  Batch: { type: Number, required: true, default: -1 },
  Branch: { type: String, required: true, default: "NA" },
  Semester: { type: Number, required: true, default: -1 },
});

module.exports = mongoose.model("Student", studentSchema);
