const Request = require("../models/Requests");

createRequest = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide your details",
    });
  }

  const newrequest = new Request(body);

  if (!newrequest) {
    return res.status(400).json({ success: false, error: err });
  }

  newrequest
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: newrequest._id,
        message: "Request created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Request not created!",
      });
    });
};

updateRequest = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Request.findOne({ _id: req.params.id }, (err, newrequest) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Request not found!",
      });
    }
    //newrequest.studentID = body.studentID;
    //newrequest.time = body.time;
    //newrequest.tutorID = body.tutorID;
    newrequest.accept = body.accept;
    newrequest
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: newrequest._id,
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

deleteRequest = async (req, res) => {
  await Request.findOneAndDelete({ _id: req.params.id }, (err, newrequest) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!newrequest) {
      return res
        .status(404)
        .json({ success: false, error: `Request not found` });
    }

    return res.status(200).json({ success: true, data: newrequest });
  }).catch((err) => console.log(err));
};

getRequestById = async (req, res) => {
  await Request.findOne({ _id: req.params.id }, (err, newrequest) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!newrequest) {
      return res
        .status(404)
        .json({ success: false, error: `Request not found` });
    }
    return res.status(200).json({ success: true, data: newrequest });
  }).catch((err) => console.log(err));
};

getRequests = async (req, res) => {
  await Request.find({}, (err, newrequest) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!newrequest.length) {
      return res
        .status(404)
        .json({ success: false, error: `Request not found` });
    }
    return res.status(200).json({ success: true, data: newrequest });
  }).catch((err) => console.log(err));
};

module.exports = {
  createRequest,
  getRequestById,
  getRequests,
  updateRequest,
  deleteRequest,
};
