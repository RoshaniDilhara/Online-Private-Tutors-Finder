import React, { Component } from "react";
import api from "../api/tutorapi";
import apirequest from "../api/requestsapi";
import { Link } from "react-router-dom";
import _ from "lodash";
import axios from "axios";
import sbjapi from "../api/subjectapi";

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
      noteList: [],
      notesDup: [],
      subjects: [],
      noteN: [],
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

    await axios
      .get("http://localhost:5000/api/tutornotes/tutor-get-notes")
      .then((res) => {
        this.setState({
          noteList: res.data.users,
        });
        console.log(res.data.users);
      });

    await sbjapi.getAllSubject().then((sbj) => {
      this.setState({
        subjects: sbj.data.data,
      });
    });
  };
  render() {
    const {
      tutors,
      isLoading,
      requests,
      mytutorsDup,
      noteList,
      notesDup,
      subjects,
      noteN,
    } = this.state;

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

    mytutors.map((myt) => {
      noteList.map((mytn) => {
        subjects.map((sbj) => {
          if (sbj.subject_id == mytn.subjectID && myt._id == mytn.tutorID) {
            const mynote = {
              name: myt.fullname,
              subjID: mytn.subjectID,
              sjbname: sbj.subject_Name,
              note: mytn.note,
            };
            notesDup.push(mynote);
          }
        });
      });
    });

    const notes = _.uniq(notesDup);
    //const notes = _.dropRight(notesN, notesN.length - notesDup.length);
    console.log(notes);

    return (
      <div>
        <div>
          <h4>
            <strong>
              <font color="blue">&nbsp;&nbsp;&nbsp;MY TUTORS NOTES</font>
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
                <font color="lightseagreen">Subject ID</font>
              </th>
              <th>
                <font color="lightseagreen">Subject Name</font>
              </th>
              <th>
                <font color="lightseagreen">Note</font>
              </th>
            </tr>

            <tbody>
              {notes.map((nt) => {
                const nameU = nt.note.split("/")[4];

                const name = nameU.split("-")[nameU.split("-").length - 1];
                if (nt !== null) {
                  //const index = myRequests.indexOf(myreq);
                  return (
                    <tr>
                      <td>{nt.name}</td>

                      <td>{nt.subjID}</td>

                      <td>{nt.sjbname}</td>

                      <td>
                        <a href={nt.note}>{name}</a>
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

export default MyTutors;
