const Appoinment = require("../models/makeAppoinment");

createAppoinment = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide your details",
    });
  }

  const newappoinment = new Appoinment(body);

  if (!newappoinment) {
    return res.status(400).json({ success: false, error: err });
  }

  newappoinment
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: newappoinment._id,
        message: "Appoinment created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Appoinment not created!",
      });
    });
};

updateAppoinment = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Appoinment.findOne({ _id: req.params.id }, (err, newappoinment) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Appoinment not found!",
      });
    }
    //newappoinment.studentID = body.studentID;
    //newappoinment.time = body.time;
    //newappoinment.tutorID = body.tutorID;
    newappoinment.accept = body.accept;
    newappoinment
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: newappoinment._id,
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

deleteAppoinment = async (req, res) => {
  await Appoinment.findOneAndDelete(
    { _id: req.params.id },
    (err, newappoinment) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!newappoinment) {
        return res
          .status(404)
          .json({ success: false, error: `Appoinment not found` });
      }

      return res.status(200).json({ success: true, data: newappoinment });
    }
  ).catch((err) => console.log(err));
};

getAppoinmentById = async (req, res) => {
  await Appoinment.findOne({ _id: req.params.id }, (err, newappoinment) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!newappoinment) {
      return res
        .status(404)
        .json({ success: false, error: `Appoinment not found` });
    }
    return res.status(200).json({ success: true, data: newappoinment });
  }).catch((err) => console.log(err));
};

getAppoinments = async (req, res) => {
  await Appoinment.find({}, (err, newappoinment) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!newappoinment.length) {
      return res
        .status(404)
        .json({ success: false, error: `Appoinment not found` });
    }
    return res.status(200).json({ success: true, data: newappoinment });
  }).catch((err) => console.log(err));
};

module.exports = {
  createAppoinment,
  getAppoinmentById,
  getAppoinments,
  updateAppoinment,
  deleteAppoinment,
};
