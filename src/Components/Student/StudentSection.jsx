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

class StudentSection extends Component {
  state = {};
  render() {
    return (
      <div>
        <HashRouter basename="/">
          <div className="whole">
            <div className="linkside">
              <div className="gap">
                <Link
                  to="/mytutors"
                  className="waves-effect waves-light btn-small"
                >
                  <font color="blue"> MY TUTORS</font>
                </Link>
              </div>
              <div className="gap">
                <Link
                  to="/searchtutor"
                  className="waves-effect waves-light btn-small"
                >
                  <font color="blue">SEARCH TUTORS</font>
                </Link>
              </div>
              <div className="gap">
                <Link
                  to="/sentrequests"
                  className="waves-effect waves-light btn-small"
                >
                  <font color="blue"> SENT REQUESTS</font>
                </Link>
              </div>
              <div className="gap">
                <Link
                  to="/sentappoinments"
                  className="waves-effect waves-light btn-small"
                >
                  <font color="blue"> SENT APPOINMENTS </font>
                </Link>
              </div>
              <div className="gap">
                <Link
                  to="/myprofile"
                  className="waves-effect waves-light btn-small"
                >
                  <font color="blue">PROFILE</font>
                </Link>
              </div>
            </div>
            <div className="barside">
              <Route
                exact
                path="/fixed-appoinments"
                component={FixedAppoinments}
              />
              <Route exact path="/mytutors" component={MyTutors} />
              <Route exact path="/searchtutor" component={SearchTutors} />
              <Route exact path="/sentrequests" component={SentRequests} />
              <Route exact path="/myprofile" component={StudentProfile} />
              <Route
                exact
                path="/appoinments/:value"
                component={AppoinmentForm}
              />
              <Route
                exact
                path="/sentappoinments"
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
