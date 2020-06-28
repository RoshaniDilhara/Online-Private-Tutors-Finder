import React, { Component } from "react";
import { logoutUser } from "./actions/studentAuthActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class StudentProfile extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    console.log("User logged out");
  };
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button>
      </div>
    );
  }
}
StudentProfile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(
  withRouter(StudentProfile)
);
