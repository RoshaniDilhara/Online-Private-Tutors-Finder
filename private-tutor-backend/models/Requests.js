const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  studentID: {
    type: String,
    required: true,
  },
  tutorID: {
    type: String,
    required: true,
  },
  accept: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Requests = mongoose.model("requests", RequestSchema);
