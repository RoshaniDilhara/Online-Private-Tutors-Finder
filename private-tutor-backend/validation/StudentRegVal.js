const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";
  data.contact_number = !isEmpty(data.contact_number)
    ? data.contact_number
    : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  // Name checks
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "First Name field is required";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Last Name field is required";
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  //username checks
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }
  //date of birth checks
  if (Validator.isEmpty(data.dob)) {
    errors.dob = "DOB field is required";
  } else if (!Validator.isDate(data.dob)) {
    errors.dob = "DOB is invalid.. Use foramt YYYY/MM/DD";
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
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
