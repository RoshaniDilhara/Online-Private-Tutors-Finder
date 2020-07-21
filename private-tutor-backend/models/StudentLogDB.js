const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const StudentLogSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  contact_number: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = StudentLogDB = mongoose.model("students", StudentLogSchema);