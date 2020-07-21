const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const TutorNoteSchema = new Schema({
  tutorID: {
    type: String,
    required: true,
  },
  subjectID: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = TutorNote = mongoose.model("notes", TutorNoteSchema);
