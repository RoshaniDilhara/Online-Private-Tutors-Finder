import React, { Component } from "react";
import api from "../api/tutorapi";
import sbjapi from "../api/subjectapi";

class TeachingSubjects extends Component {
  constructor(props) {
    super(props);
    //const { user } = this.props.auth;
    this.state = {
      tutorID: this.props.match.params.value,
      tutor: {},
      subjects: [],
    };
  }

  componentDidMount = async () => {
    await api.getTutorById(this.state.tutorID).then((tut) => {
      this.setState({
        tutor: tut.data.data,
      });
    });
    const { tutor } = this.state;
    this.setState({
      subjects: tutor.subjects,
    });
  };

  render() {
    const { subjects } = this.state;
    //console.log(tutor.subjects);
    // const subj = tutor.subjects;
    console.log(subjects);

    return (
      <div>
        <div>
          <h4>
            <strong>
              <font color="blue">&nbsp;&nbsp;&nbsp;MY SUBJECTS</font>
            </strong>
          </h4>
        </div>
        <div>
          <table class="table table-stripe">
            <tr>
              <th>
                <font color="lightseagreen">Subject ID</font>
              </th>
              <th>
                <font color="lightseagreen">Subject Name</font>
              </th>
            </tr>

            <tbody>
              {subjects.map((sbj) => {
                return (
                  <tr>
                    <td>{sbj.value}</td>

                    <td>{sbj.label}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TeachingSubjects;
