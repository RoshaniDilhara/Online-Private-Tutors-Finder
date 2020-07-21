const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.fullname = !isEmpty(data.fullname) ? data.fullname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.nic = !isEmpty(data.nic) ? data.nic : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";
  data.contact_number = !isEmpty(data.contact_number)
    ? data.contact_number
    : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  //data.subjects = !isEmpty(data.subjects) ? data.subjects : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  // Name checks
  if (Validator.isEmpty(data.fullname)) {
    errors.fullname = "Name field is required";
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  //Address checks
  if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is required";
  }
  //nic checks
  if (Validator.isEmpty(data.nic)) {
    errors.nic = "NIC field is required";
  }
  //date of birth checks
  if (Validator.isEmpty(data.dob)) {
    errors.dob = "DOB field is required";
  } else if (!Validator.isDate(data.dob)) {
    errors.dob = "DOB is invalid. Use foramt YYYY/MM/DD";
  }
  //contact number checks
  if (Validator.isEmpty(data.contact_number)) {
    errors.contact_number = "Contact Number field is required";
  } else if (!Validator.isNumeric(data.contact_number)) {
    errors.contact_number = "Contact Number is invalid";
  }
  //gender checks
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }
  // Subjects checks
  // if (Validator.isEmpty(data.subjects)) {
  //   errors.subjects = "Subject field is required";
  // }
  //Description checks
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
