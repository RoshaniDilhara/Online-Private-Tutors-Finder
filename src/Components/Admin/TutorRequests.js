import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import apitutors from "../api/tutorapi";
import _ from "lodash";

class TutorRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: [], 
      tutorID:[],
      tutorsDup:[],
    };
  }

  componentDidMount = async () => {
    await apitutors.getAllTutor().then((tut) => {
      this.setState({
        tutors: tut.data.data,
      });
    });
  };

  
  handleAccept = async (reqIndex, myreq) => {
    const { accept, tutorID,tutors } = this.state;
    const payload = { accept };
    //console.log(tutorID[reqIndex]._id);

    const val = window.confirm(
      `You have accepted the tutor ${myreq.fullname}`
    );

    if (val == true) {
      await apitutors
        .updateTutorById(tutors[reqIndex]._id, payload)
        .then((res) => {
          window.location.reload();
        });
    }
  };

  cancelTutorReq(reqIndex, myreq) {
    const { tutorID,tutors } = this.state;
    if (
      window.confirm(
        `Do you want to delete the request by ${myreq.fullname}`
      )
    ) {
      apitutors.deleteTutorById(tutors[reqIndex]._id);
      window.location.reload();
    }
  }

  render() {
    const {
      tutors,
      tutorID,
      tutorsDup,
    } = this.state;

    // console.log(tutorID);
    // console.log(tutors);

    tutors.map((req) => {
      if (req.tutorID === tutorID && req.accept === false) {
        tutors.push(req);
      }
    });
    // console.log(tutorID);

    // const tutorID = _.uniq(tutorID);

    tutors.map((tutor) => {
        const details = {
          id: tutor._id,
          fullname: tutor.fullname,
          email: tutor.email,
          address:tutor.address,
          nic:tutor.nic,
          dob:tutor.dob,
          contact_number: tutor.contact_number,
          gender:tutor.gender,
          sub_val:tutor.subjects[0].value,
          sub_label:tutor.subjects[0].label,
          description:tutor.description,
          date: tutor.date,
          accept:tutor.accept,                 
        };
        
        // console.log(details);
        tutorsDup.push(details);
    });

  const AllTutors = _.uniq(tutorsDup);

  let showTable = true
  if (!this.state.tutors.length) {
      showTable = false
  }

    return (
      <div>
        <div>
          <h4>
            <strong>
              <font color="blue">&nbsp;&nbsp;&nbsp;TUTOR REQUESTS</font>
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
                <font color="lightseagreen">Email</font>
              </th>

              <th>
                <font color="lightseagreen">Address</font>
              </th>
              <th>
                <font color="lightseagreen">NIC</font>
              </th>
              <th>
                <font color="lightseagreen">DOB</font>
              </th>

              <th>
                <font color="lightseagreen">Contact Number</font>
              </th>
              <th>
                <font color="lightseagreen">Gender</font>
              </th>
              <th>
                <font color="lightseagreen">Subjects</font>
              </th>
              <th>
                <font color="lightseagreen">Description</font>
              </th>
              <th>
                <font color="lightseagreen">Date</font>
              </th>
            </tr>

            <tbody>
              {AllTutors.map((myreq) => {
                if (myreq._id != "" && myreq.accept === false) {
                  const index = AllTutors.indexOf(myreq);
                  const date = myreq.date.split("T")[0];
                  const dob = myreq.dob.split("T")[0];
                  return (
                    <tr>
                      <td>{myreq.fullname}</td>
                      <td>{myreq.email}</td>
                      <td>{myreq.address}</td>
                      <td>{myreq.nic}</td>
                      <td>{dob}</td>
                      <td>{myreq.contact_number}</td>
                      <td>{myreq.gender}</td>
                      <td>{myreq.sub_val} {myreq.sub_label}</td>
                      <td>{myreq.description}</td>
                      <td>{date}</td>
                      
                      <td>
                      <button
                        class="btn btn-success"
                        onClick={this.handleAccept.bind(this, index, myreq)}
                      >
                        ACCEPT
                      </button>
                      </td>

                      <td>
                      <button
                        class="btn btn-warning"
                        onClick={this.cancelTutorReq.bind(this, index, myreq)}
                      >
                        Cancel
                      </button>
                      </td>

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
// TutorRequests.propTypes = {
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps)(withRouter(TutorRequests));
export default TutorRequests;
