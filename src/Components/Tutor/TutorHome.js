import React, { Component } from "react";
import { Link, HashRouter, Route, withRouter } from "react-router-dom";
import "../Student/StudentSection.css";
import TutorProfile from "./TutorProfile";
import TeachingSubjects from "./TeachingSubjects";
import StudentRequests from "./StudentRequests";
import TutorAppoinments from "./TutorAppoinments";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class TutorHome extends Component {
  render() {
    //Take the details of the logged user
    const { user } = this.props.auth;
    return (
      <div>
        <center>
          <h5>Hello,{user.fullname.split(" ")[0]}</h5>
        </center>
        <div>
          <HashRouter basename="/">
            <div className="whole">
              <div className="linkside">
                <div className="gap">
                  <Link
                    to="/tutorssubjects"
                    className="waves-effect waves-light btn-small"
                  >
                    <font color="blue">SUBJECTS</font>
                  </Link>
                </div>

                <div className="gap">
                  <Link
                    to="/studentrequests"
                    className="waves-effect waves-light btn-small"
                  >
                    <font color="blue">REQUESTS</font>
                  </Link>
                </div>
                <div className="gap">
                  <Link
                    to="/tutorappoinments"
                    className="waves-effect waves-light btn-small"
                  >
                    <font color="blue">APPOINMENTS </font>
                  </Link>
                </div>
                <div className="gap">
                  <Link
                    to="/tutorprofile"
                    className="waves-effect waves-light btn-small"
                  >
                    <font color="blue">PROFILE</font>
                  </Link>
                </div>
              </div>
              <div className="barside">
                <Route
                  exact
                  path="/tutorssubjects"
                  component={TeachingSubjects}
                />

                <Route
                  exact
                  path="/studentrequests"
                  component={StudentRequests}
                />
                <Route exact path="/tutorprofile" component={TutorProfile} />

                <Route
                  exact
                  path="/tutorappoinments"
                  component={TutorAppoinments}
                />
              </div>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}
//These should be added to access the logged user
TutorHome.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(TutorHome));
