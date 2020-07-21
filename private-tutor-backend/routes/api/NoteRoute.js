let express = require("express"),
  multer = require("multer"),
  mongoose = require("mongoose"),
  uuidv4 = require("uuid/v4"),
  router = express.Router();

const DIR = "./notes/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg, .jpeg and .pdf format allowed!"));
    }
  },
});

// User model
let TutorNote = require("../../models/TutorNote");

router.post(`/tutor-note-upload`, upload.single("note"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const note = new TutorNote({
    tutorID: req.body.tutorID,
    subjectID: req.body.subjectID,
    note: url + "/notes/" + req.file.filename,
  });
  note
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User registered successfully!",
        userCreated: {
          _id: result._id,
          tutorID: result.tutorID,
          note: result.note,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get(`/tutor-get-notes`, (req, res, next) => {
  TutorNote.find().then((data) => {
    res.status(200).json({
      message: "User list retrieved successfully!",
      users: data,
    });
  });
});

router.delete("/note-delete/:id", (req, res) => {
  //console.log(req.params.id);
  TutorNote.findOneAndDelete({ _id: req.params.id }, (err, newnote) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!newnote) {
      return res.status(404).json({ success: false, error: `Note not found` });
    }

    return res.status(200).json({ success: true, data: newnote });
  }).catch((err) => console.log(err));
});

module.exports = router;
