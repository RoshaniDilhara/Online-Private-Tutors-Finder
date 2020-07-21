import React, { Component } from "react";
import "../Tutor/TutorSignIn.css";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import apiappoinment from "../api/appoinmentapi";
import Select from "react-select";
import api from "../api/tutorapi";

class AppoinmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentID: this.props.match.params.studentID,
      date: new Date(),
      startTime: "10:00",
      endTime: "10:00",
      tutorID: this.props.match.params.value,
      venue: "",
      subject: null,
      accept: false,
      subjects: [],
      selectedOption: "",
      tutor: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    let target = e.target;

    let value = target.value;

    let name = target.name;

    this.setState({
      [name]: value,
    });
  }
  onDateChange = (date) => this.setState({ date });
  onStartTimeChange = (startTime) => this.setState({ startTime });
  onEndTimeChange = (endTime) => this.setState({ endTime });

  handleSelect = (selectedOption) => {
    this.setState({
      subject: selectedOption,
    });
    console.log(`Option selected:`, selectedOption);
  };

  handleSubmit = async () => {
    const {
      studentID,
      tutorID,
      accept,
      date,
      startTime,
      endTime,
      venue,
      subject,
    } = this.state;
    const payload = {
      studentID,
      tutorID,
      accept,
      date,
      startTime,
      endTime,
      venue,
      subject,
    };

    await apiappoinment.insertAppoinment(payload).then((res) => {
      window.confirm(`Appoinment sent successfully`);
      window.location.reload();
    });
  };
  componentDidMount = async () => {
    await api.getTutorById(this.state.tutorID).then((tut) => {
      this.setState({
        tutor: tut.data.data,
      });
    });
    this.setState({
      subjects: this.state.tutor.subjects,
    });
  };
  render() {
    return (
      <div class="login-wrap">
        <div class="login-html">
          <label for="tab-1" class="tab">
            APPOINMENT To {this.state.tutor.fullname}
          </label>

          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  Subject
                </label>
                <Select
                  value={this.state.subject}
                  onChange={this.handleSelect}
                  options={this.state.subjects}
                />
              </div>
              <div class="group">
                <label for="date" class="label">
                  Date
                </label>
                <DatePicker
                  onChange={this.onDateChange}
                  value={this.state.date}
                />
              </div>
              <div class="group">
                <label for="user" class="label">
                  Start Time
                </label>
                <TimePicker
                  onChange={this.onStartTimeChange}
                  value={this.state.startTime}
                />
              </div>
              <div class="group">
                <label for="user" class="label">
                  End Time
                </label>
                <TimePicker
                  onChange={this.onEndTimeChange}
                  value={this.state.endTime}
                />
              </div>
              <div class="group">
                <label for="venue" class="label">
                  Venue
                </label>
                <input
                  id="venue"
                  type="textArea"
                  class="input"
                  name="venue"
                  value={this.state.venue}
                  onChange={this.handleChange}
                />
              </div>

              <div class="group">
                <input
                  type="submit"
                  class="button"
                  value="SEND"
                  onClick={this.handleSubmit}
                />
              </div>
              <div class="hr"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppoinmentForm;
