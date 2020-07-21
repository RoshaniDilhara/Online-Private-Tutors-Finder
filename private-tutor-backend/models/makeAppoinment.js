const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppoinmenttSchema = new Schema({
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
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  subject: {
    type: Object,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
});
module.exports = makeAppoinent = mongoose.model(
  "make_Appoinment",
  AppoinmenttSchema
);
