import React, { Component } from "react";
import api from "../api/tutorapi";
import apirequest from "../api/requestsapi";
import _ from "lodash";

class SentRequests extends Component {
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
    };
  }

  deleteRequest = async (newtutor) => {
    if (
      window.confirm(
        `Do you want to delete request to ${newtutor.fullname} permanently?`
      )
    ) {
      await apirequest.deleteRequestById(newtutor.req);
      window.location.reload();
    }
  };
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
      if (req.studentID == this.state.studentID && !req.accept) {
        this.state.tutors.map((tut) => {
          if (tut._id == req.tutorID) {
            tut.date = req.date;
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
              <font color="blue">&nbsp;&nbsp;&nbsp;PENDING REQUESTS</font>
            </strong>
          </h4>
          <hr color="blue" />
        </div>
        <div>
          {mytutors.map((newtutor) => {
            if (newtutor._id != "") {
              var day = newtutor.date.substr(0, 10);
              var time = newtutor.date.substr(11, 11);
              let subjects = newtutor.subjects;
              let subjlen = subjects.length;
              var i;
              var text = "";
              for (i = 0; i < subjlen; i++) {
                text += subjects[i].label + ";";
              }

              return (
                <div>
                  <div>
                    <font color="lightseagreen">Tutor : </font>
                    <font color="black">{newtutor.fullname}</font>
                  </div>
                  <div>
                    <font color="lightseagreen">Subjects : </font>
                    <font color="black">{text}</font>
                  </div>
                  <div>
                    <font color="lightseagreen">Address : </font>
                    <font color="black">{newtutor.address}</font>
                  </div>
                  <div>
                    <font color="lightseagreen">Date : </font>
                    <font color="black">
                      {day}
                      {"    "}
                      {time}
                    </font>
                  </div>
                  <br />
                  <button
                    class="btn btn-danger"
                    onClick={this.deleteRequest.bind(this, newtutor)}
                  >
                    Cancel Request
                  </button>
                  <hr color="blue" />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default SentRequests;
