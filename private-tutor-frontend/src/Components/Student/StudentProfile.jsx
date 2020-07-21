import React, { Component } from "react";
import { logoutUser } from "./actions/studentAuthActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import apistudent from "../api/studentapi";
import Popup from "reactjs-popup";

class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      email: "",
      lastname: "",
      address: "",
      dob: "",
      contact_number: "",
      gender: "",
      username: "",
      studentID: this.props.match.params.value,
      student: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitA = this.handleSubmitA.bind(this);
    this.handleSubmitB = this.handleSubmitB.bind(this);
    this.handleSubmitC = this.handleSubmitC.bind(this);
    this.handleSubmitD = this.handleSubmitD.bind(this);
    this.handleSubmitE = this.handleSubmitE.bind(this);
    this.handleSubmitF = this.handleSubmitF.bind(this);
    this.handleSubmitG = this.handleSubmitG.bind(this);
    this.handleSubmitH = this.handleSubmitH.bind(this);
  }
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    console.log("User logged out");
  };
  componentDidMount = async () => {
    await apistudent.getStudentById(this.state.studentID).then((stu) => {
      this.setState({
        student: stu.data.data,
      });
    });
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmitA(e) {
    const { student, firstname, studentID } = this.state;
    const payload = {
      firstname: firstname,
      lastname: student.lastname,
      username: student.username,
      email: student.email,
      address: student.address,
      dob: student.dob,
      contact_number: student.contact_number,
      gender: student.gender,
    };

    apistudent.updateStudentById(studentID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitB(e) {
    const { student, email, studentID } = this.state;
    const payload = {
      firstname: student.firstname,
      lastname: student.lastname,
      username: student.username,
      email: email,
      address: student.address,
      dob: student.dob,
      contact_number: student.contact_number,
      gender: student.gender,
    };

    apistudent.updateStudentById(studentID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitC(e) {
    const { student, address, studentID } = this.state;
    const payload = {
      firstname: student.firstname,
      lastname: student.lastname,
      username: student.username,
      email: student.email,
      address: address,
      dob: student.dob,
      contact_number: student.contact_number,
      gender: student.gender,
    };

    apistudent.updateStudentById(studentID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitD(e) {
    const { student, lastname, studentID } = this.state;
    const payload = {
      firstname: student.firstname,
      lastname: lastname,
      email: student.email,
      address: student.address,
      dob: student.dob,
      contact_number: student.contact_number,
      gender: student.gender,
    };

    apistudent.updateStudentById(studentID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitE(e) {
    const { student, dob, studentID } = this.state;
    const payload = {
      firstname: student.firstname,
      lastname: student.lastname,
      username: student.username,
      email: student.email,
      address: student.address,
      dob: dob,
      contact_number: student.contact_number,
      gender: student.gender,
    };

    apistudent.updateStudentById(studentID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitF(e) {
    const { student, contact_number, studentID } = this.state;
    const payload = {
      firstname: student.firstname,
      lastname: student.lastname,
      username: student.username,
      email: student.email,
      address: student.address,
      dob: student.dob,
      contact_number: contact_number,
      gender: student.gender,
    };

    apistudent.updateStudentById(studentID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitG(e) {
    const { student, gender, studentID } = this.state;
    const payload = {
      firstname: student.firstname,
      lastname: student.lastname,
      username: student.username,
      email: student.email,
      address: student.address,
      dob: student.dob,
      contact_number: student.contact_number,
      gender: gender,
    };

    apistudent.updateStudentById(studentID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitH(e) {
    const { student, username, studentID } = this.state;
    const payload = {
      firstname: student.firstname,
      lastname: student.lastname,
      username: username,
      email: student.email,
      address: student.address,
      dob: student.dob,
      contact_number: student.contact_number,
      gender: student.gender,
    };

    apistudent.updateStudentById(studentID, payload).then((res) => {
      window.location.reload();
    });
  }
  render() {
    return (
      <div>
        <h1>
          <font color="purple">Hello,{this.state.student.username}</font>
        </h1>
        <button class="btn btn-danger" onClick={this.onLogoutClick}>
          Logout
        </button>
        <div>
          <label for="user" class="label">
            username
          </label>
          <br />
          <input
            id="user"
            className="form-control"
            name="username"
            value={this.state.student.username}
            readonly="true"
          />
          <Popup
            trigger={<button class="btn btn-primary">Change</button>}
            modal
          >
            {(close) => (
              <div>
                <div className="form-group">
                  <label htmlFor="name">username</label>
                  <input
                    className="form-control"
                    name="username"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmitH}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <hr color="blue" />
          <label for="user" class="label">
            First name
          </label>
          <br />
          <input
            id="user"
            className="form-control"
            name="firstname"
            value={this.state.student.firstname}
            readonly="true"
          />
          <Popup
            trigger={<button class="btn btn-primary">Change</button>}
            modal
          >
            {(close) => (
              <div>
                <div className="form-group">
                  <label htmlFor="name">First name</label>
                  <input
                    className="form-control"
                    name="firstname"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmitA}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <hr color="blue" />
          <label for="user" class="label">
            Last Name
          </label>
          <br />
          <input
            id="user"
            className="form-control"
            name="lastname"
            value={this.state.student.lastname}
            readonly="true"
          />
          <Popup
            trigger={<button class="btn btn-primary">Change</button>}
            modal
          >
            {(close) => (
              <div>
                <div className="form-group">
                  <label htmlFor="name">lastname</label>
                  <input
                    className="form-control"
                    name="lastname"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmitD}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <hr color="blue" />
          <label for="user" class="label">
            Email
          </label>
          <br />
          <input
            id="user"
            type="email"
            className="form-control"
            name="email"
            value={this.state.student.email}
            readonly="true"
          />
          <Popup
            trigger={<button class="btn btn-primary">Change</button>}
            modal
          >
            {(close) => (
              <div>
                <div className="form-group">
                  <label htmlFor="name">Email</label>
                  <input
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmitB}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <hr color="blue" />

          <label for="user" class="label">
            Address
          </label>
          <br />
          <input
            id="user"
            className="form-control"
            name="address"
            value={this.state.student.address}
            readonly="true"
          />
          <Popup
            trigger={<button class="btn btn-primary">Change</button>}
            modal
          >
            {(close) => (
              <div>
                <div className="form-group">
                  <label htmlFor="name">Address</label>
                  <input
                    className="form-control"
                    name="address"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmitC}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <hr color="blue" />

          <label for="user" class="label">
            Date of Birth
          </label>
          <br />
          <input
            id="user"
            className="form-control"
            name="dob"
            value={this.state.student.dob}
            readonly="true"
          />
          <Popup
            trigger={<button class="btn btn-primary">Change</button>}
            modal
          >
            {(close) => (
              <div>
                <div className="form-group">
                  <label htmlFor="name">Date of Birth</label>
                  <input
                    className="form-control"
                    name="dob"
                    onChange={this.handleChange}
                    placeholder="YYYY/MM/DD"
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmitE}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <hr color="blue" />

          <label for="user" class="label">
            Contact Number
          </label>
          <br />
          <input
            id="user"
            className="form-control"
            name="contact_number"
            value={this.state.student.contact_number}
            readonly="true"
          />
          <Popup
            trigger={<button class="btn btn-primary">Change</button>}
            modal
          >
            {(close) => (
              <div>
                <div className="form-group">
                  <label htmlFor="name">Contact Number</label>
                  <input
                    className="form-control"
                    name="contact_number"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmitF}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <hr color="blue" />

          <label for="user" class="label">
            Gender
          </label>
          <br />
          <input
            id="user"
            className="form-control"
            name="gender"
            value={this.state.student.gender}
            readonly="true"
          />
          <Popup
            trigger={<button class="btn btn-primary">Change</button>}
            modal
          >
            {(close) => (
              <div>
                <div className="form-group">
                  <label htmlFor="name">Gender</label>
                  <input
                    className="form-control"
                    name="gender"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmitG}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <hr color="blue" />
        </div>
      </div>
    );
  }
}
StudentProfile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(
  withRouter(StudentProfile)
);
