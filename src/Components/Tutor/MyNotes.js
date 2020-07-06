import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

export default class MyNotes extends Component {
  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.handleGet = this.handleGet.bind(this);

    this.state = {
      tutorID: this.props.match.params.value,
      note: "",
      noteList: [],
      mynotesDup: [],
    };
  }

  onFileChange(e) {
    this.setState({ note: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tutorID", this.state.tutorID);
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

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/tutornotes/tutor-get-notes")
      .then((res) => {
        this.setState({
          noteList: res.data.users,
        });
        console.log(res.data.users);
      });
  }

  render() {
    const { noteList, tutorID, mynotesDup } = this.state;

    noteList.map((note) => {
      if (note.tutorID == tutorID) {
        mynotesDup.push(note);
      }
    });

    const mynotes = _.uniq(mynotesDup);

    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="file" onChange={this.onFileChange} />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Upload
              </button>
            </div>
          </form>
          <div className="form-group">
            {mynotes.map((im) => {
              const nameU = im.note.split("/")[4];

              const name = nameU.split("-")[nameU.split("-").length - 1];
              return (
                <div>
                  <a href={im.note}>{name}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
