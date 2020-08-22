import React, { Component } from "react";
import api from "../api/tutorapi";
import sbjapi from "../api/subjectapi";
import Select from "react-select";
import _ from "lodash";

class TeachingSubjects extends Component {
  constructor(props) {
    super(props);
    //const { user } = this.props.auth;
    this.state = {
      tutorID: this.props.match.params.value, //logged tutor ID
      tutor: {},
      subjects: [], //subjects taught by tutor
      subjectsListDup: [], //Subject list from subjects table with duplicates
      modSbjDup: [], // modified subject list with duplicates to the react-select
      selectedOption: null, //tutor selected subject from react-select
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount = async () => {
    //get all the data of logged tutor
    await api.getTutorById(this.state.tutorID).then((tut) => {
      this.setState({
        tutor: tut.data.data,
      });
    });

    //get the subjects details of logged tutor
    const { tutor } = this.state;
    this.setState({
      subjects: tutor.subjects,
    });

    //get all the subjects from subjects table (with duplicates)
    await sbjapi.getAllSubject().then((sbj) => {
      this.setState({
        subjectsListDup: sbj.data.data,
      });
    });
    console.log(this.state.subjectsListDup);
  };

  handleSelect = (selectedOption) => {
    this.setState({
      selectedOption: selectedOption,
    });
    console.log(`Option selected:`, selectedOption);
  };

  //add the subjects to the logged tutor
  handleSubmit = async (e) => {
    const { tutor, subjects, selectedOption, tutorID } = this.state;
    if (selectedOption != null) {
      subjects.push(selectedOption);
      const payload = {
        fullname: tutor.fullname,
        email: tutor.email,
        address: tutor.address,
        nic: tutor.nic,
        dob: tutor.dob,
        contact_number: tutor.contact_number,
        gender: tutor.gender,
        subjects: subjects,
        description: tutor.description,
        accept: tutor.accept,
        password: tutor.password,
      };

      await api.updateTutorById(tutorID, payload).then((res) => {
        window.location.reload();
      });
    }
  };

  //delete the subjects from the logged user
  handleDelete = async (sbj, index) => {
    const { tutor, subjects, tutorID } = this.state;
    if (index > -1) {
      subjects.splice(index, 1);
    }
    const payload = {
      fullname: tutor.fullname,
      email: tutor.email,
      address: tutor.address,
      nic: tutor.nic,
      dob: tutor.dob,
      contact_number: tutor.contact_number,
      gender: tutor.gender,
      subjects: subjects,
      description: tutor.description,
      accept: tutor.accept,
      password: tutor.password,
    };

    await api.updateTutorById(tutorID, payload).then((res) => {
      window.location.reload();
    });
  };

  render() {
    const { subjects, subjectsListDup, modSbjDup, selectedOption } = this.state;
    //console.log(tutor.subjects);
    // const subj = tutor.subjects;
    console.log(subjects);

    //create the unique subject list of subjects table to react-select
    const subjectsList = _.uniq(subjectsListDup);
    //********************************************************
    subjectsList.map((sbj) => {
      const modsbj = {
        value: sbj.subject_id,
        label: sbj.subject_Name,
      };
      modSbjDup.push(modsbj);
    });

    const modSbj = _.dropRight(
      modSbjDup,
      modSbjDup.length - subjectsList.length
    );
    //*******************************************************

    return (
      <div>
        <div className="form-group">
          <Select
            value={selectedOption}
            onChange={this.handleSelect}
            options={modSbj}
          />

          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.handleSubmit}
          >
            ADD
          </button>
        </div>

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
                const index = subjects.indexOf(sbj);
                return (
                  <tr>
                    <td>{sbj.value}</td>

                    <td>{sbj.label}</td>

                    <button
                      class="btn btn-danger"
                      onClick={this.handleDelete.bind(this, sbj, index)}
                    >
                      DELETE
                    </button>
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
