import React, { Component } from "react";
import "../Tutor/TutorSignIn.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "./actions/adminAuthActions";
import { withRouter } from "react-router-dom";

class AdminLogin extends Component {
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
      this.props.history.push(`/adminhome/${this.props.auth.user.id}`);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push(`/adminhome/${nextProps.auth.user.id}`); // push user to dashboard when they login
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
    const adminData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(adminData);
    this.props.loginUser(adminData);
  }
  render() {
    const { errors } = this.state;
    //console.log(errors);
    return (
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label htmlFor="tab-1" class="tab">
            Sign In
          </label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label htmlFor="user" class="label">
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
                <label htmlFor="pass" class="label">
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
                <label htmlFor="check">
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

AdminLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(withRouter(AdminLogin));
