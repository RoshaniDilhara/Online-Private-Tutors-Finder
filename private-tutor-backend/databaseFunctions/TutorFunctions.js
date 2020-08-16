const Tutor = require("../models/TutorLogDB");

createTutor = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide your details",
    });
  }

  const newtutor = new Tutor(body);

  if (!newtutor) {
    return res.status(400).json({ success: false, error: err });
  }

  newtutor
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: newtutor._id,
        message: "Tutor created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Tutor not created!",
      });
    });
};

updateTutor = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Tutor.findOne({ _id: req.params.id }, (err, newtutor) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Tutor not found!",
      });
    }
    newtutor.fullname = body.fullname;
    newtutor.email = body.email;
    newtutor.address = body.address;
    newtutor.nic = body.nic;
    newtutor.dob = body.dob;
    newtutor.contact_number = body.contact_number;
    newtutor.gender = body.gender;
    newtutor.subjects = body.subjects;
    newtutor.description = body.description;
    newtutor.password = body.password;
    //****************************/
    newtutor.accept = body.accept;
    /********************************/

    newtutor
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: newtutor._id,
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

deleteTutor = async (req, res) => {
  await Tutor.findOneAndDelete({ _id: req.params.id }, (err, newtutor) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!newtutor) {
      return res.status(404).json({ success: false, error: `Tutor not found` });
    }

    return res.status(200).json({ success: true, data: newtutor });
  }).catch((err) => console.log(err));
};

getTutorById = async (req, res) => {
  await Tutor.findOne({ _id: req.params.id }, (err, newtutor) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!newtutor) {
      return res.status(404).json({ success: false, error: `Tutor not found` });
    }
    return res.status(200).json({ success: true, data: newtutor });
  }).catch((err) => console.log(err));
};

getTutors = async (req, res) => {
  await Tutor.find({}, (err, newtutor) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!newtutor.length) {
      return res.status(404).json({ success: false, error: `Tutor not found` });
    }
    return res.status(200).json({ success: true, data: newtutor });
  }).catch((err) => console.log(err));
};

module.exports = {
  createTutor,
  getTutorById,
  getTutors,
  updateTutor,
  deleteTutor,
};
