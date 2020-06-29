import React, { Component } from "react";
import { logoutUser } from "./actions/studentAuthActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import apistudent from "../api/studentapi";

class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentID: this.props.match.params.value,
      student: {},
    };
  }
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    console.log("User logged out");
  };
  componentDidMount = async () => {
    await apistudent.getStudentById(this.state.studentID).then((stu) => {
      this.setState({
        student: stu.data.data,
      });
    });
  };
  render() {
    return (
      <div>
        <h1>
          <font color="purple">Hello,{this.state.student.username}</font>
        </h1>
        <h4>
          <font color="lightseagreen">
            {this.state.student.firstname}
            {"  "}
            {this.state.student.lastname}
          </font>
        </h4>
        <h4>
          <font color="lightseagreen">{this.state.student.email}</font>
        </h4>
        <button class="btn btn-danger" onClick={this.onLogoutClick}>
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
