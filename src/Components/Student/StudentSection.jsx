import React, { Component } from "react";
import { Link, HashRouter, Route } from "react-router-dom";
import "./StudentSection.css";
import MyTutors from "./MyTutors";
import SearchTutors from "./SearchTutors";
import SentRequests from "./SentRequests";
import StudentProfile from "./StudentProfile";
import SentAppoinments from "./SentAppoinments";
import AppoinmentForm from "./AppoinmentForm";
import FixedAppoinments from "./FixedAppoinments";
import apistudent from "../api/studentapi";

class StudentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentID: this.props.match.params.value,
      student: {},
    };
  }
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
        <HashRouter basename="/">
          <div className="whole">
            <div className="linkside">
              <div className="gap">
                <Link
                  to={`/myprofile/${this.state.studentID}`}
                  className="waves-effect waves-light btn-small"
                >
                  {" "}
                  <font color="blue">
                    {this.state.student.username}'S PROFILE
                  </font>
                </Link>
              </div>
              <div className="gap">
                <Link
                  to={`/mytutors/${this.state.studentID}`}
                  className="waves-effect waves-light btn-small"
                >
                  <font color="blue"> MY TUTORS</font>
                </Link>
              </div>
              <div className="gap">
                <Link
                  to={`/searchtutor/${this.state.studentID}`}
                  className="waves-effect waves-light btn-small"
                >
                  <font color="blue">SEARCH TUTORS</font>
                </Link>
              </div>
              <div className="gap">
                <Link
                  to={`/sentrequests/${this.state.studentID}`}
                  className="waves-effect waves-light btn-small"
                >
                  <font color="blue"> SENT REQUESTS</font>
                </Link>
              </div>
              <div className="gap">
                <Link
                  to={`/sentappoinments/${this.state.studentID}`}
                  className="waves-effect waves-light btn-small"
                >
                  <font color="blue"> SENT APPOINMENTS </font>
                </Link>
              </div>
            </div>
            <div className="barside">
              <Route
                exact
                path="/fixed-appoinments/:value"
                component={FixedAppoinments}
              />
              <Route exact path="/mytutors/:value" component={MyTutors} />
              <Route
                exact
                path="/searchtutor/:value"
                component={SearchTutors}
              />
              <Route
                exact
                path="/sentrequests/:value"
                component={SentRequests}
              />
              <Route
                exact
                path="/myprofile/:value"
                component={StudentProfile}
              />
              <Route
                exact
                path="/appoinments/:value/:studentID"
                component={AppoinmentForm}
              />
              <Route
                exact
                path="/sentappoinments/:value"
                component={SentAppoinments}
              />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default StudentSection;
