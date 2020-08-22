import React, { Component } from "react";
import { Link, HashRouter, Route, withRouter } from "react-router-dom";
import apiappoinment from "../api/appoinmentapi";
import api from "../api/tutorapi";
import _ from "lodash";

class SentAppoinments extends Component {
  state = {
    tutors: [],
    appoinments: [],
    studentID: this.props.match.params.value,
    myappoinmentsDup: [],
  };
  deleteAppoinment = async (newappoinment) => {
    if (window.confirm(`Do you want to delete this appoinment permanently?`)) {
      await apiappoinment.deleteAppoinmentById(newappoinment._id);
      window.location.reload();
    }
  };
  componentDidMount = async () => {
    await api.getAllTutor().then((tutors) => {
      this.setState({
        tutors: tutors.data.data,
      });
    });
    await apiappoinment.getAllAppoinment().then((appoinments) => {
      this.setState({
        appoinments: appoinments.data.data,
      });
    });
  };
  render() {
    const { myappoinmentsDup } = this.state;
    this.state.tutors.map((newtutor) => {
      this.state.appoinments.map((appoin) => {
        if (newtutor._id == appoin.tutorID) {
          appoin.tutorname = newtutor.fullname;
          appoin.contact = newtutor.contact_number;
          myappoinmentsDup.push(appoin);
        }
      });
    });

    const myappoinments = _.uniq(myappoinmentsDup);

    return (
      <div>
        <div>
          <h4>
            <strong>
              <font color="blue">&nbsp;&nbsp;&nbsp;Appoinments</font>
            </strong>
          </h4>
          <hr color="blue" />
        </div>
        <div>
          <h5>
            <strong>
              <Link to={`/fixed-appoinments/${this.state.studentID}`}>
                <font color="purple">
                  &nbsp;&nbsp;&nbsp;Fixed Appoinments{"     "}
                </font>
              </Link>

              <font color="red">&nbsp;&nbsp;&nbsp;Pending Appoinments</font>
            </strong>
          </h5>
          <hr color="blue" />
        </div>
        <div>
          {myappoinments.map((newappoinment) => {
            var day = newappoinment.date.substr(0, 10);
            if (
              newappoinment._id != "" &&
              newappoinment.studentID == this.state.studentID &&
              !newappoinment.accept
            ) {
              return (
                <div>
                  <div>
                    <font color="lightseagreen">Tutor : </font>
                    <font color="black">
                      {newappoinment.tutorname}
                      {"     "}
                    </font>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <font color="lightseagreen">{"    "}Contact number : </font>
                    <font color="black">{newappoinment.contact}</font>
                  </div>
                  <div>
                    <font color="lightseagreen">Subjects : </font>
                    <font color="black">{newappoinment.subject.label}</font>
                  </div>
                  <div>
                    <font color="lightseagreen">Venue : </font>
                    <font color="black">{newappoinment.venue}</font>
                  </div>
                  <div>
                    <font color="lightseagreen">Day : </font>
                    <font color="black">{day}</font>
                  </div>
                  <div>
                    <font color="lightseagreen">Time Slot : </font>
                    <font color="black">
                      {newappoinment.startTime}
                      {"    "}-{"   "}
                      {newappoinment.endTime}
                    </font>
                  </div>
                  <br />
                  <button
                    class="btn btn-danger"
                    onClick={this.deleteAppoinment.bind(this, newappoinment)}
                  >
                    Cancel Appoinment
                  </button>
                  <hr color="blue" />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default SentAppoinments;
