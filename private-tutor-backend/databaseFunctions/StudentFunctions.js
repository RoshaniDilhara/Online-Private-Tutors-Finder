const Student = require("../models/StudentLogDB");

createStudent = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide your details",
    });
  }

  const newstudent = new Student(body);

  if (!newstudent) {
    return res.status(400).json({ success: false, error: err });
  }

  newstudent
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: newstudent._id,
        message: "Student created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Student not created!",
      });
    });
};

updateStudent = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Student.findOne({ _id: req.params.id }, (err, newstudent) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "student not found!",
      });
    }
    newstudent.firstname = body.firstname;
    newstudent.lastname = body.lastname;
    newstudent.username = body.username;
    newstudent.email = body.email;
    newstudent.contact_number = body.contact_number;
    newstudent.dob = body.dob;
    newstudent.gender = body.gender;
    newstudent.address = body.address;
    newstudent
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: newstudent._id,
          message: "you have updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "you have not updated!",
        });
      });
  });
};

deleteStudent = async (req, res) => {
  await Student.findOneAndDelete({ _id: req.params.id }, (err, newstudent) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!newstudent) {
      return res
        .status(404)
        .json({ success: false, error: `Student not found` });
    }

    return res.status(200).json({ success: true, data: newstudent });
  }).catch((err) => console.log(err));
};

getStudentById = async (req, res) => {
  await Student.findOne({ _id: req.params.id }, (err, newstudent) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!newstudent) {
      return res.status(404).json({ success: false, error: `Tutor not found` });
    }
    return res.status(200).json({ success: true, data: newstudent });
  }).catch((err) => console.log(err));
};

getStudent = async (req, res) => {
  await Student.find({}, (err, newstudent) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!newstudent.length) {
      return res.status(404).json({ success: false, error: `Tutor not found` });
    }
    return res.status(200).json({ success: true, data: newstudent });
  }).catch((err) => console.log(err));
};

module.exports = {
  createStudent,
  getStudentById,
  getStudent,
  updateStudent,
  deleteStudent,
};
