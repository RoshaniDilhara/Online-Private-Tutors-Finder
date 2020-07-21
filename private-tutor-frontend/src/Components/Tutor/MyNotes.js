import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import api from "../api/tutorapi";
import Select from "react-select";

export default class MyNotes extends Component {
  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    //this.handleGet = this.handleGet.bind(this);

    this.state = {
      tutorID: this.props.match.params.value,
      note: "",
      noteList: [],
      mynotesDup: [],
      tutor: {},
      subjects: [],
      selectedOption: null,
      subject_id: "",
    };
  }

  onFileChange(e) {
    this.setState({ note: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tutorID", this.state.tutorID);
    formData.append("subjectID", this.state.subject_id);
    formData.append("note", this.state.note);
    axios
      .post(
        "http://localhost:5000/api/tutornotes/tutor-note-upload",
        formData,
        {}
      )
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
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

    await axios
      .get("http://localhost:5000/api/tutornotes/tutor-get-notes")
      .then((res) => {
        this.setState({
          noteList: res.data.users,
        });
        console.log(res.data.users);
      });
  };

  handleSelect = (selectedOption) => {
    this.setState({
      selectedOption: selectedOption,
      subject_id: selectedOption.value,
    });
    console.log(`Option selected:`, selectedOption);
  };

  handleDelete(id) {
    console.log(id);

    axios
      .delete(`http://localhost:5000/api/tutornotes/note-delete/${id}`, {
        params: { id },
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  }

  render() {
    const {
      noteList,
      tutorID,
      mynotesDup,
      subjects,
      selectedOption,
    } = this.state;

    noteList.map((note) => {
      if (note.tutorID == tutorID) {
        mynotesDup.push(note);
      }
    });

    const mynotes = _.uniq(mynotesDup);
    console.log(subjects);
    return (
      <div>
        <div>
          <h4>
            <strong>
              <font color="blue">&nbsp;&nbsp;&nbsp;MY NOTES</font>
            </strong>
          </h4>
        </div>
        <div className="container">
          <div className="row">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input type="file" onChange={this.onFileChange} />
              </div>
              <div className="form-group">
                <Select
                  value={selectedOption}
                  onChange={this.handleSelect}
                  options={subjects}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="form-group">
          {subjects.map((sbj) => {
            for (var i = 0; i < mynotes.length; i++) {
              console.log(mynotes.length);
              return (
                <div>
                  <table class="table table-stripe">
                    <tr>
                      <th>
                        <font color="lightseagreen">{sbj.label}</font>
                      </th>
                    </tr>
                    <tbody>
                      {mynotes.map((im) => {
                        const nameU = im.note.split("/")[4];

                        const name = nameU.split("-")[
                          nameU.split("-").length - 1
                        ];

                        if (sbj.value == im.subjectID) {
                          console.log(name);
                          return (
                            <tr>
                              <td>
                                <a href={im.note}>{name}</a>
                              </td>
                              <button
                                class="btn btn-danger"
                                onClick={this.handleDelete.bind(this, im._id)}
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
              );
            }
          })}
        </div>
      </div>
    );
  }
}
