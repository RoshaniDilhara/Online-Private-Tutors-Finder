import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import apirequest from "../api/requestsapi";
import apistudents from "../api/studentapi";
import api from "../api/tutorapi";

class StudentRequests extends Component {
  constructor(props) {
    super(props);
    //const { user } = this.props.auth;
    this.state = {
      students: [],
      requests: [],
      myRequestsID: [],
      myRequests: [],
      accept: true,
      tutorID: this.props.match.params.value,
    };
  }

  componentDidMount = async () => {
    await apistudents.getAllStudent().then((students) => {
      this.setState({
        students: students.data.data,
      });
    });
    await apirequest.getAllRequest().then((requests) => {
      this.setState({
        requests: requests.data.data,
      });
    });
  };

  handleAccept = async (reqIndex, myreq) => {
    const { accept, myRequestsID } = this.state;
    const payload = { accept };
    console.log(myRequestsID[reqIndex]._id);
    await apirequest
      .updateRequestById(myRequestsID[reqIndex]._id, payload)
      .then((res) => {
        window.confirm(
          `You have accepted the student ${myreq.firstname} ${myreq.lastname}`
        );
        window.location.reload();
      });
  };
  render() {
    const {
      requests,
      students,
      myRequestsID,
      myRequests,
      tutorID,
    } = this.state;
    console.log(tutorID);
    //console.log(requests);
    requests.map((req) => {
      if (req.tutorID == tutorID && req.accept == false) {
        myRequestsID.push(req);
      }
    });
    //console.log(myRequestsID);

    myRequestsID.map((myr) => {
      students.map((student) => {
        if (student._id == myr.studentID) {
          myRequests.push(student);
        }
      });
    });
    console.log(myRequests);

    return (
      <div>
        <div>
          <h4>
            <strong>
              <font color="blue">&nbsp;&nbsp;&nbsp;STUDENT REQUESTS</font>
            </strong>
          </h4>
        </div>
        <div>
          <table class="table table-stripe">
            <tr>
              <th>
                <font color="lightseagreen">Name</font>
              </th>
              <th>
                <font color="lightseagreen">Address</font>
              </th>

              <th>
                <font color="lightseagreen">Contact No.</font>
              </th>
            </tr>

            <tbody>
              {this.state.myRequests.map((myreq) => {
                if (myreq._id != "") {
                  const index = myRequests.indexOf(myreq);
                  return (
                    <tr>
                      <td>
                        {myreq.firstname} {myreq.lastname}
                      </td>

                      <td>{myreq.address}</td>

                      <td>{myreq.contact_number}</td>

                      <button
                        class="btn btn-primary"
                        color="primary"
                        onClick={this.handleAccept.bind(this, index, myreq)}
                      >
                        ACCEPT
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

//These should be added to access the logged user
StudentRequests.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(StudentRequests));
