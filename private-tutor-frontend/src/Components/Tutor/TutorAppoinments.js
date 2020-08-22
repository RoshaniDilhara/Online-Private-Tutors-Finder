import React, { Component } from "react";
import { Link, HashRouter, Route } from "react-router-dom";
import apistudents from "../api/studentapi";
import api from "../api/tutorapi";
import apisappoinment from "../api/appoinmentapi";
import _ from "lodash";

class TutorAppoinments extends Component {
  constructor(props) {
    super(props);
    //const { user } = this.props.auth;
    this.state = {
      studentsDup: [],
      appoinmentsDup: [],
      myAppoinIDDup: [],
      myAppoinStudentsDup: [],
      tutorID: this.props.match.params.value,
    };
  }

  componentDidMount = async () => {
    await apistudents.getAllStudent().then((students) => {
      this.setState({
        studentsDup: students.data.data,
      });
    });
    await apisappoinment.getAllAppoinment().then((appoinments) => {
      this.setState({
        appoinmentsDup: appoinments.data.data,
      });
    });
  };

  cancelAppoinment = async (reqIndex, myreq) => {
    const { myAppoinIDDup } = this.state;
    if (
      window.confirm(
        `Do you want to  permanently delete the appoinment by ${myreq.firstname} ${myreq.lastname}?`
      )
    ) {
      await apisappoinment.deleteAppoinmentById(myAppoinIDDup[reqIndex]._id);
      window.location.reload();
    }
  };
  render() {
    const {
      studentsDup,
      appoinmentsDup,
      myAppoinIDDup,
      myAppoinStudentsDup,
      tutorID,
    } = this.state;

    const students = _.uniq(studentsDup);
    const appoinments = _.uniq(appoinmentsDup);

    appoinments.map((req) => {
      if (req.tutorID == tutorID && req.accept == true) {
        myAppoinIDDup.push(req);
      }
    });

    const myAppoinID = _.uniq(myAppoinIDDup);
    //console.log(myAppoinID.length);
    myAppoinID.map((myr) => {
      students.map((student) => {
        if (student._id == myr.studentID) {
          const appoin = {
            id: student._id,
            firstname: student.firstname,
            lastname: student.lastname,
            email: student.email,
            address: student.address,
            username: student.username,
            dob: student.dob,
            contact_number: student.contact_number,
            gender: student.gender,
            date: myr.date,
            startTime: myr.startTime,
            endTime: myr.endTime,
            venue: myr.venue,
            subject_id: myr.subject.value,
            subject_Name: myr.subject.label,
          };

          myAppoinStudentsDup.push(appoin);
        }
      });
    });
    //console.log(myAppoinStudentsDup);
    const myAppoinStudentsU = _.uniq(myAppoinStudentsDup);
    //console.log(myAppoinStudents.length - myAppoinID.length);
    const myAppoinStudents = _.dropRight(
      myAppoinStudentsU,
      myAppoinStudentsU.length - myAppoinID.length
    );

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
              <font color="red">&nbsp;&nbsp;&nbsp;My Appoinments{"     "}</font>

              <Link to={`/appoinmentreq/${this.state.tutorID}`}>
                <font color="purple">
                  &nbsp;&nbsp;&nbsp;Pending Appoinments
                </font>
              </Link>
            </strong>
          </h5>
          <hr color="blue" />
        </div>
        <div>
          <div>
            <table class="table table-stripe">
              <tr>
                <th>
                  <font color="lightseagreen">Name</font>
                </th>
                <th>
                  <font color="lightseagreen">Date</font>
                </th>

                <th>
                  <font color="lightseagreen">Start Time</font>
                </th>
                <th>
                  <font color="lightseagreen">End Time</font>
                </th>
                <th>
                  <font color="lightseagreen">Venue</font>
                </th>
                <th>
                  <font color="lightseagreen">Subject ID</font>
                </th>
                <th>
                  <font color="lightseagreen">Subject Name</font>
                </th>
              </tr>

              <tbody>
                {myAppoinStudents.map((myreq) => {
                  if (myreq._id != "") {
                    const index = myAppoinStudents.indexOf(myreq);
                    const date = myreq.date.split("T")[0];
                    return (
                      <tr>
                        <td>
                          {myreq.firstname} {myreq.lastname}
                        </td>

                        <td>{date}</td>

                        <td>{myreq.startTime}</td>

                        <td>{myreq.endTime}</td>

                        <td>{myreq.venue}</td>

                        <td>{myreq.subject_id}</td>
                        <td>{myreq.subject_Name}</td>
                        <Link
                          to={`/viewstudentprofile/${this.state.tutorID}/${myreq.id}`}
                        >
                          <button class="btn btn-info">VIEW</button>
                        </Link>

                        <button
                          class="btn btn-danger"
                          onClick={this.cancelAppoinment.bind(
                            this,
                            index,
                            myreq
                          )}
                        >
                          CANCEL
                        </button>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TutorAppoinments;
