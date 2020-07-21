const express = require("express");
const Tutorrouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput_tutor = require("../../validation/TutorRegVal");
const validateLoginInput_tutor = require("../../validation/TutorLogVal");

// Load Tutor model
const TutorLog = require("../../models/TutorLogDB");

// @route POST api/tutortauth/login
// @desc Login tutor and return JWT token
// @access Public
Tutorrouter.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput_tutor(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  TutorLog.findOne({ email }).then((tutor) => {
    // Check if user exists

    if (!tutor) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    if (tutor.accept == false) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, tutor.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        //details obtained from the logged tutor
        const payload = {
          id: tutor.id,
          fullname: tutor.fullname,
          email: tutor.email,
          address: tutor.address,
          nic: tutor.nic,
          dob: tutor.dob,
          contact_number: tutor.contact_number,
          gender: tutor.gender,
          subjects: tutor.subjects,
          description: tutor.description,
        };
        //console.log(payload);
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

// @route POST api/tutorauth/register
// @desc Register tutor
// @access Public
Tutorrouter.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput_tutor(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  TutorLog.findOne({ email: req.body.email }).then((tutor) => {
    if (tutor) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newTutor = new TutorLog({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        nic: req.body.nic,
        dob: req.body.dob,
        contact_number: req.body.contact_number,
        gender: req.body.gender,
        subjects: req.body.subjects,
        description: req.body.description,
        accept: req.body.accept,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newTutor.password, salt, (err, hash) => {
          if (err) throw err;
          newTutor.password = hash;
          newTutor
            .save()
            .then((tutor) => res.json(tutor))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

module.exports = Tutorrouter;
