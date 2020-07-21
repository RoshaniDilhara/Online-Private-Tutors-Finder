import React, { Component } from "react";
import { Link } from "react-router-dom";
import apirequest from "../api/requestsapi";
import apistudents from "../api/studentapi";
import _ from "lodash";

class MyStudents extends Component {
  constructor(props) {
    super(props);
    //const { user } = this.props.auth;
    this.state = {
      students: [],
      requests: [],
      myRequestsID: [],
      myStudents: [],
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

  deleteStudentReq(reqIndex, myreq) {
    const { myRequestsID } = this.state;
    if (
      window.confirm(
        `Do you want to delete the request by ${myreq.firstname} ${myreq.lastname}`
      )
    ) {
      apirequest.deleteRequestById(myRequestsID[reqIndex]._id);
      window.location.reload();
    }
  }

  render() {
    const {
      requests,
      students,
      myRequestsID,
      myStudents,
      tutorID,
    } = this.state;
    //console.log(tutorID);
    //console.log(requests);
    requests.map((req) => {
      if (req.tutorID === tutorID && req.accept === true) {
        myRequestsID.push(req);
      }
    });
    //console.log(myRequestsID);

    myRequestsID.map((myr) => {
      students.map((student) => {
        if (student._id === myr.studentID) {
          myStudents.push(student);
        }
      });
    });
    //console.log(myRequests);

    const myRequests = _.uniq(myStudents);

    return (
      <div>
        <div>
          <h4>
            <strong>
              <font color="blue">&nbsp;&nbsp;&nbsp;MY STUDENTS</font>
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
              {myRequests.map((myreq) => {
                if (myreq._id !== "") {
                  const index = myRequests.indexOf(myreq);
                  return (
                    <tr>
                      <td>
                        {myreq.firstname} {myreq.lastname}
                      </td>

                      <td>{myreq.address}</td>

                      <td>{myreq.contact_number}</td>
                      <Link
                        to={`/viewstudentprofile/${this.state.tutorID}/${myreq._id}`}
                      >
                        <button class="btn btn-info">VIEW</button>
                      </Link>

                      <button
                        class="btn btn-danger"
                        onClick={this.deleteStudentReq.bind(this, index, myreq)}
                      >
                        DELETE
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

export default MyStudents;
