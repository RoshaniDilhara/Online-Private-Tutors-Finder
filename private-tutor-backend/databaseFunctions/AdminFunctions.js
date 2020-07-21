const Admin = require("../models/AdminLog");

createAdmin = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide your details",
    });
  }

  const newadmin = new Admin(body);

  if (!newadmin) {
    return res.status(400).json({ success: false, error: err });
  }

  newadmin
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: newadmin._id,
        message: "Admin created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Admin not created!",
      });
    });
};

updateAdmin = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Admin.findOne({ _id: req.params.id }, (err, newadmin) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Admin not found!",
      });
    }
    newadmin.name = body.name;
    // newadmin.subjects = body.subjects;
    newadmin.email = body.email;
    newadmin
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: newadmin._id,
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

deleteAdmin = async (req, res) => {
  await Admin.findOneAndDelete({ _id: req.params.id }, (err, newadmin) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!newadmin) {
      return res
        .status(404)
        .json({ success: false, error: `Admin not found` });
    }

    return res.status(200).json({ success: true, data: newadmin });
  }).catch((err) => console.log(err));
};

getAdminById = async (req, res) => {
  await Admin.findOne({ _id: req.params.id }, (err, newadmin) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!newadmin) {
      return res.status(404).json({ success: false, error: `Admin not found` });
    }
    return res.status(200).json({ success: true, data: newadmin });
  }).catch((err) => console.log(err));
};

getAdmin = async (req, res) => {
  await Admin.find({}, (err, newadmins) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!newadmins.length) {
      return res.status(404).json({ success: false, error: `Admin not found` });
    }
    return res.status(200).json({ success: true, data: newadmins });
  }).catch((err) => console.log(err));
};

module.exports = {
  createAdmin,
  getAdminById,
  getAdmin,
  updateAdmin,
  deleteAdmin,
};
