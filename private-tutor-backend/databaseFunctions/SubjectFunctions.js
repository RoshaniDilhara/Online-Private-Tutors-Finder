const Subject = require("../models/Subjects");

createSubject = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide your details",
    });
  }

  const newsbj = new Subject(body);

  if (!newsbj) {
    return res.status(400).json({ success: false, error: err });
  }

  newsbj
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: newsbj._id,
        message: "Subject created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Subject not created!",
      });
    });
};

updateSubject = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Subject.findOne({ _id: req.params.id }, (err, newsbj) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Subject not found!",
      });
    }

    newsbj.subject_id = body.subject_id;
    newsbj.subject_Name = body.subject_Name;
    newsbj
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: newsbj._id,
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

deleteSubject = async (req, res) => {
  await Subject.findOneAndDelete({ _id: req.params.id }, (err, newsbj) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!newsbj) {
      return res
        .status(404)
        .json({ success: false, error: `Subject not found` });
    }

    return res.status(200).json({ success: true, data: newsbj });
  }).catch((err) => console.log(err));
};

getSubjectById = async (req, res) => {
  await Subject.findOne({ _id: req.params.id }, (err, newsbj) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!newsbj) {
      return res
        .status(404)
        .json({ success: false, error: `Subject not found` });
    }
    return res.status(200).json({ success: true, data: newsbj });
  }).catch((err) => console.log(err));
};

getSubjects = async (req, res) => {
  await Subject.find({}, (err, newsbj) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!newsbj.length) {
      return res
        .status(404)
        .json({ success: false, error: `Subject not found` });
    }
    return res.status(200).json({ success: true, data: newsbj });
  }).catch((err) => console.log(err));
};

module.exports = {
  createSubject,
  getSubjectById,
  getSubjects,
  updateSubject,
  deleteSubject,
};
