import React, { Component } from "react";
import { Link } from "react-router-dom";
import apistudents from "../api/studentapi";
import api from "../api/tutorapi";
import apisappoinment from "../api/appoinmentapi";
import _ from "lodash";

class MyAppoinmentReq extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    //const { user } = this.props.auth;
    this.state = {
      students: [],
      appoinments: [],
      myAppoinID: [],
      myAppoinStudentsDup: [],
      accept: true,
      tutorID: this.props.match.params.value,
    };
  }

  componentDidMount = async () => {
    this._isMounted = true;
    await apistudents.getAllStudent().then((students) => {
      this.setState({
        students: students.data.data,
      });
    });
    await apisappoinment.getAllAppoinment().then((appoinments) => {
      this.setState({
        appoinments: appoinments.data.data,
      });
    });
  };

  componentWillUnmount() {
    this._isMounted = false;
    this.setState = (state, callback) => {
      return;
    };
  }

  handleAccept = async (reqIndex, myreq) => {
    const { accept, myAppoinID } = this.state;
    const payload = { accept };
    //console.log(myAppoinID[reqIndex]._id);

    const val = window.confirm(
      `You have accepted the appoinment by ${myreq.firstname} ${myreq.lastname}`
    );

    if (val == true) {
      await apisappoinment
        .updateAppoinmentById(myAppoinID[reqIndex]._id, payload)
        .then((res) => {
          window.location.reload();
        });
    }
  };

  cancelStudentApp(reqIndex, myreq) {
    const { myAppoinID } = this.state;
    if (
      window.confirm(
        `Do you want to  permanently delete the appoinment by ${myreq.firstname} ${myreq.lastname}?`
      )
    ) {
      apisappoinment.deleteAppoinmentById(myAppoinID[reqIndex]._id);
      window.location.reload();
    }
  }

  render() {
    const {
      students,
      appoinments,
      myAppoinID,
      myAppoinStudentsDup,
      tutorID,
    } = this.state;

    appoinments.map((req) => {
      if (req.tutorID == tutorID && req.accept == false) {
        myAppoinID.push(req);
      }
    });

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

    const myAppoinStudents = _.uniq(myAppoinStudentsDup);

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
              <Link to={`/tutorappoinments/${this.state.tutorID}`}>
                <font color="purple">
                  &nbsp;&nbsp;&nbsp;My Appoinments{"     "}
                </font>
              </Link>

              <font color="red">&nbsp;&nbsp;&nbsp;Pending Appoinments</font>
            </strong>
          </h5>
          <hr color="blue" />
        </div>
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
                        class="btn btn-success"
                        onClick={this.handleAccept.bind(this, index, myreq)}
                      >
                        ACCEPT
                      </button>

                      <button
                        class="btn btn-danger"
                        onClick={this.cancelStudentApp.bind(this, index, myreq)}
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
    );
  }
}

export default MyAppoinmentReq;
