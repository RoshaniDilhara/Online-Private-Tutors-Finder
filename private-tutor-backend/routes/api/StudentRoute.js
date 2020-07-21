const express = require("express");
const Stdrouter = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput_std = require("../../validation/StudentRegVal");
const validateLoginInput_std = require("../../validation/StudentLogVal");

// Load Student model
const StudentLog = require("../../models/StudentLogDB");

// @route POST api/studentauth/login
// @desc Login student and return JWT token
// @access Public
Stdrouter.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput_std(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  StudentLog.findOne({ email }).then((student) => {
    // Check if user exists
    if (!student) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, student.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        //details obtained from the logged student
        const payload = {
          id: student.id,
          firstname: student.firstname,
          lastname: student.lastname,
          email: student.email,
          address: student.address,
          username: student.username,
          dob: student.dob,
          contact_number: student.contact_number,
          gender: student.gender,
        };
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

// @route POST api/studentauth/register
// @desc Register student
// @access Public
Stdrouter.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput_std(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  StudentLog.findOne({ email: req.body.email }).then((student) => {
    if (student) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newStudent = new StudentLog({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        username: req.body.username,
        dob: req.body.dob,
        contact_number: req.body.contact_number,
        gender: req.body.gender,
        password: req.body.password,
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStudent.password, salt, (err, hash) => {
          if (err) throw err;
          newStudent.password = hash;
          newStudent
            .save()
            .then((student) => res.json(student))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

module.exports = Stdrouter;
