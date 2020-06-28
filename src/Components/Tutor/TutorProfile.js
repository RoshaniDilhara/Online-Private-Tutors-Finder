import React, { Component } from "react";
import { logoutUser } from "./actions/tutorAuthActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class TutorProfile extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    console.log("User logged out");
  };
  render() {
    //Take the details of the logged user
    const { user } = this.props.auth;
    return (
      <div>
        <h5>{user.fullname}</h5>
        <h5>{user.email}</h5>
        <h5>{user.address}</h5>
        <h5>{user.nic}</h5>
        <h5>{user.dob}</h5>
        <h5>{user.contact_number}</h5>
        <h5>{user.gender}</h5>
        <h5>{user.subjects}</h5>
        <h5>{user.description}</h5>
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

TutorProfile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(
  withRouter(TutorProfile)
);
