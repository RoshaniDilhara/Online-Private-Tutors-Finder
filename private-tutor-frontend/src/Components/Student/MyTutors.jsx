import React, { Component } from "react";
import api from "../api/tutorapi";
import apirequest from "../api/requestsapi";
import { Link } from "react-router-dom";
import _ from "lodash";

class MyTutors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: [],
      isLoading: false,
      studentID: this.props.match.params.value,
      accept: false,
      isSuccess: false,
      mytutorsDup: [],
      requests: [],
      isAppoinment: false,
    };
  }

  deleteTutor(newtutor) {
    if (
      window.confirm(`Do you want to delete ${newtutor.fullname} permanently?`)
    ) {
      apirequest.deleteRequestById(newtutor.req);
      window.location.reload();
    }
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllTutor().then((tutors) => {
      this.setState({
        tutors: tutors.data.data,
        isLoading: false,
      });
    });

    await apirequest.getAllRequest().then((requests) => {
      this.setState({
        requests: requests.data.data,
      });
    });
  };
  render() {
    const { tutors, isLoading, requests, mytutorsDup } = this.state;

    this.state.requests.map((req) => {
      if (req.studentID == this.state.studentID && req.accept) {
        this.state.tutors.map((tut) => {
          if (tut._id == req.tutorID) {
            tut.req = req._id;
            mytutorsDup.push(tut);
          }
        });
      }
    });

    const mytutors = _.uniq(mytutorsDup);

    return (
      <div>
        <div>
          <h4>
            <strong>
              <font color="blue">&nbsp;&nbsp;&nbsp;MY TUTORS</font>
            </strong>
          </h4>
        </div>
        <div>
          <table class="table table-stripe">
            <tr>
              <th>
                <font color="lightseagreen">User Name</font>
              </th>
              <th>
                <font color="lightseagreen">Address</font>
              </th>
              <th>
                <font color="lightseagreen">Subjects</font>
              </th>
            </tr>

            <tbody>
              {mytutors.map((newtutor) => {
                if (newtutor._id != "") {
                  let subjects = newtutor.subjects;
                  let subjlen = subjects.length;
                  var i;
                  var text = "";
                  for (i = 0; i < subjlen; i++) {
                    text += subjects[i].label + ";";
                  }
                  return (
                    <tr>
                      <td>{newtutor.fullname}</td>

                      <td>{newtutor.address}</td>
                      <td>{text}</td>
                      <Link
                        to={`/appoinments/${newtutor._id}/${this.state.studentID}`}
                      >
                        <button class="btn btn-primary">APPOINMENT</button>
                      </Link>

                      <button
                        class="btn btn-danger"
                        onClick={this.deleteTutor.bind(this, newtutor)}
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

export default MyTutors;
