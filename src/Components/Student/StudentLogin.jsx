import React, { Component } from "react";
import { Link, withRouter, HashRouter as Router } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../Tutor/TutorSignIn.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "./actions/studentAuthActions";
import classnames from "classnames";

class StudentLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/studentsection");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/studentsection"); // push user to dashboard when they login
    }
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
    const studentData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(studentData);
    this.props.loginUser(studentData);
  }
  render() {
    const { errors } = this.state;
    //console.log(errors);
    return (
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            <a href="studentlogin">Sign In</a>
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab">
            <a href="/student-signup">Sign Up</a>
          </label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  Email
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  name="email"
                  value={this.state.email}
                  error={errors.email}
                  onChange={this.handleChange}
                />
                <span class="error-display">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  name="password"
                  value={this.state.password}
                  error={errors.password}
                  onChange={this.handleChange}
                />
                <span class="error-display">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked />
                <label for="check">
                  <span class="icon"></span> Keep me Signed in
                </label>
              </div>
              <div class="group">
                <button
                  type="submit"
                  class="button"
                  onClick={this.handleSubmit}
                >
                  Sign In
                </button>
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StudentLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(
  withRouter(StudentLogin)
);
