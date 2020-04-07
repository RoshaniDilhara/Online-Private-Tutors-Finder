import React, { Component } from "react";
import { Link, HashRouter, Route } from "react-router-dom";
import "./StudentSection.css";
import MyTutors from "./MyTutors";
import SearchTutors from "./SearchTutors";
import SentRequests from "./SentRequests";
import StudentProfile from "./StudentProfile";

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
                  MY TUTORS
                </Link>
              </div>
              <div className="gap">
                <Link
                  to="/searchtutor"
                  className="waves-effect waves-light btn-small"
                >
                  SEARCH TUTORS
                </Link>
              </div>
              <div className="gap">
                <Link
                  to="/sentrequests"
                  className="waves-effect waves-light btn-small"
                >
                  SENT REQUESTS
                </Link>
              </div>
              <div className="gap">
                <Link
                  to="/myprofile"
                  className="waves-effect waves-light btn-small"
                >
                  PROFILE
                </Link>
              </div>
            </div>
            <div className="barside">
              <Route exact path="/mytutors" component={MyTutors} />
              <Route exact path="/searchtutor" component={SearchTutors} />
              <Route exact path="/sentrequests" component={SentRequests} />
              <Route exact path="/myprofile" component={StudentProfile} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default StudentSection;
