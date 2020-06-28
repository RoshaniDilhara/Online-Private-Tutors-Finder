import React, { Component } from "react";
import "../Tutor/TutorSignUp.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./actions/studentAuthActions";
import classnames from "classnames";
import { Link, withRouter } from "react-router-dom";


class StudentSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      username: "",
      dob: "",
      contact_number: "",
      gender: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const newStudent = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      address: this.state.address,
      username: this.state.username,
      dob: this.state.dob,
      contact_number: this.state.contact_number,
      gender: this.state.gender,
      password: this.state.password,
    };
    console.log(newStudent);
    this.props.registerUser(newStudent, this.props.history);
  }
  render() {
    return (
      <div class="signup-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" />
          <label for="tab-1" class="tab">
            <a href="studentlogin">Sign In</a>
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" checked />
          <label for="tab-2" class="tab">
            <a href="/student-signup">Sign Up</a>
          </label>
          <div class="login-form">
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">
                  First name
                </label>
                <input
                  id="fname"
                  type="text"
                  class="input"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                />
              </div>
              <div class="group">
                <label for="user" class="label">
                  Last name
                </label>
                <input
                  id="lname"
                  type="text"
                  class="input"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  class="input"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  class="input"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </div>

              <div class="group">
                <label for="user" class="label">
                  User Name
                </label>
                <input
                  id="username"
                  type="text"
                  class="input"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Date of birth
                </label>
                <input
                  id="dob"
                  type="text"
                  class="input"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.handleChange}
                />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Contact number
                </label>
                <input
                  id="phoneNo"
                  type="text"
                  class="input"
                  name="contact_number"
                  value={this.state.contact_number}
                  onChange={this.handleChange}
                />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Gender
                </label>
                <input
                  id="gender"
                  type="text"
                  class="input"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.handleChange}
                />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  class="input"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <div class="group">
                <button
                  type="submit"
                  class="button"
                  onClick={this.handleSubmit}
                >
                  Sign Up
                </button>
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <label>
                  <a href="/studentlogin">Already Member?</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StudentSignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(
  withRouter(StudentSignUp)
);
