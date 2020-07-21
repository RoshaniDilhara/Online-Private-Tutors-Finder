const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  subject_id: {
    type: String,
    required: true,
  },
  subject_Name: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Subjects = mongoose.model("subjects", SubjectSchema);
