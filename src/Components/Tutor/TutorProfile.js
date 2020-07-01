import React, { Component } from "react";
import { logoutUser } from "./actions/tutorAuthActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import api from "../api/tutorapi";

class TutorProfile extends Component {
  constructor(props) {
    super(props);
    //const { user } = this.props.auth;
    this.state = {
      tutorID: this.props.match.params.value,
      tutor: {},
    };
    //console.log(this.state.tutorID);
  }
  componentDidMount = async () => {
    await api.getTutorById(this.state.tutorID).then((tut) => {
      this.setState({
        tutor: tut.data.data,
      });
    });
  };
  render() {
    //Take the details of the logged user
    //const { user } = this.props.auth;
    return (
      <div>
        <h5>{this.state.tutor.fullname}</h5>
        <h5>{this.state.tutor.email}</h5>
        <h5>{this.state.tutor.address}</h5>
        <h5>{this.state.tutor.nic}</h5>
        <h5>{this.state.tutor.dob}</h5>
        <h5>{this.state.tutor.contact_number}</h5>
        <h5>{this.state.tutor.gender}</h5>
        <h5>{this.state.tutor.subjects}</h5>
        <h5>{this.state.tutor.description}</h5>
      </div>
    );
  }
}

//These should be added to access the logged user
TutorProfile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(TutorProfile));
