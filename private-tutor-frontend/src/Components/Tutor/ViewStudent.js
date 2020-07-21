import React, { Component } from "react";
import apistudents from "../api/studentapi";

class ViewStudent extends Component {
  constructor(props) {
    super(props);
    //const { user } = this.props.auth;
    this.state = {
      studentID: this.props.match.params.studentID,
      student: {},
    };
  }

  componentDidMount = async () => {
    await apistudents.getStudentById(this.state.studentID).then((student) => {
      this.setState({
        student: student.data.data,
      });
    });
  };

  render() {
    return (
      <div>
        <h5>{this.state.student.firstname}</h5>
        <h5>{this.state.student.lastname}</h5>
        <h5>{this.state.student.email}</h5>
        <h5>{this.state.student.address}</h5>
        <h5>{this.state.student.username}</h5>
        <h5>{this.state.student.dob}</h5>
        <h5>{this.state.student.contact_number}</h5>
        <h5>{this.state.student.gender}</h5>
      </div>
    );
  }
}

export default ViewStudent;
