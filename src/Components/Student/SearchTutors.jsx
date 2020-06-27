import React, { Component } from "react";
import ReactTable from "react-table";
import { Link } from "react-router-dom";
import api from "../api/tutorapi";
import styled from "styled-components";
import apirequest from "../api/requestsapi";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;
class SearchTutors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: [],
      isLoading: false,
      studentID: "abc1234",
      accept: false,
      mytutors: [],
      requests: [],
    };
  }

  SendRequest = async (tutorID) => {
    const { studentID, accept } = this.state;
    const payload = { studentID, tutorID, accept };

    await apirequest.insertRequest(payload).then((res) => {
      window.confirm(`Request sent successfully`);
      window.location.reload();
    });
  };
  componentDidMount = async () => {
    await api.getAllTutor().then((tutors) => {
      this.setState({
        tutors: tutors.data.data,
      });
    });
    await apirequest.getAllRequest().then((requests) => {
      this.setState({
        requests: requests.data.data,
      });
    });
  };

  render() {
    const { tutors, isLoading, requests, mytutors } = this.state;
    this.state.requests.map((req) => {
      if (req.studentID == this.state.studentID) {
        this.state.tutors.map((tut) => {
          if (tut._id == req.tutorID) {
            const index = tutors.indexOf(tut);
            this.setState({ isLoading: true });
            if (index > -1) {
              tutors.splice(index, 1);
            }
          }
        });
      }
    });

    return (
      <div>
        <div>
          <h4>
            <strong>
              <font color="blue">&nbsp;&nbsp;&nbsp;TUTORS</font>
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
              <th>
                <font color="lightseagreen">Description</font>
              </th>
            </tr>

            <tbody>
              {this.state.tutors.map((newtutor) => {
                if (newtutor._id != "" && this.state.isLoading) {
                  return (
                    <tr>
                      <td>{newtutor.fullname}</td>

                      <td>{newtutor.address}</td>
                      <td>{newtutor.subjects}</td>
                      <td>{newtutor.description}</td>

                      <button
                        class="btn btn-primary"
                        color="primary"
                        onClick={this.SendRequest.bind(this, newtutor._id)}
                      >
                        REQUEST
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

export default SearchTutors;
