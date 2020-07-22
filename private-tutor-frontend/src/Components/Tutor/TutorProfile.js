import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import api from "../api/tutorapi";
import Popup from "reactjs-popup";
import NewPasswordModal from "./NewPasswordModal";
const bcrypt = require("bcryptjs");

var mtc = false;
class TutorProfile extends Component {
  constructor(props) {
    super(props);
    //const { user } = this.props.auth;
    this.state = {
      fullname: "",
      email: "",
      address: "",
      nic: "",
      dob: "",
      contact_number: "",
      gender: "",
      subjects: [],
      description: "",
      tutorID: this.props.match.params.value,
      tutor: {},
      dob: "",
      password: ``,
      show: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitA = this.handleSubmitA.bind(this);
    this.handleSubmitB = this.handleSubmitB.bind(this);
    this.handleSubmitC = this.handleSubmitC.bind(this);
    this.handleSubmitD = this.handleSubmitD.bind(this);
    this.handleSubmitE = this.handleSubmitE.bind(this);
    this.handleSubmitF = this.handleSubmitF.bind(this);
    this.handleSubmitG = this.handleSubmitG.bind(this);
    this.handleSubmitI = this.handleSubmitI.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this); // confirm old password
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
      dob: tutor.dob,
    });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmitA(e) {
    const { tutor, fullname, tutorID } = this.state;
    const payload = {
      fullname: fullname,
      email: tutor.email,
      address: tutor.address,
      nic: tutor.nic,
      dob: tutor.dob,
      contact_number: tutor.contact_number,
      gender: tutor.gender,
      subjects: tutor.subjects,
      description: tutor.description,
      password: tutor.password,
    };

    api.updateTutorById(tutorID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitB(e) {
    const { tutor, email, tutorID } = this.state;
    const payload = {
      fullname: tutor.fullname,
      email: email,
      address: tutor.address,
      nic: tutor.nic,
      dob: tutor.dob,
      contact_number: tutor.contact_number,
      gender: tutor.gender,
      subjects: tutor.subjects,
      description: tutor.description,
      password: tutor.password,
    };

    api.updateTutorById(tutorID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitC(e) {
    const { tutor, address, tutorID } = this.state;
    const payload = {
      fullname: tutor.fullname,
      email: tutor.email,
      address: address,
      nic: tutor.nic,
      dob: tutor.dob,
      contact_number: tutor.contact_number,
      gender: tutor.gender,
      subjects: tutor.subjects,
      description: tutor.description,
      password: tutor.password,
    };

    api.updateTutorById(tutorID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitD(e) {
    const { tutor, nic, tutorID } = this.state;
    const payload = {
      fullname: tutor.fullname,
      email: tutor.email,
      address: tutor.address,
      nic: nic,
      dob: tutor.dob,
      contact_number: tutor.contact_number,
      gender: tutor.gender,
      subjects: tutor.subjects,
      description: tutor.description,
      password: tutor.password,
    };

    api.updateTutorById(tutorID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitE(e) {
    const { tutor, dob, tutorID } = this.state;
    const payload = {
      fullname: tutor.fullname,
      email: tutor.email,
      address: tutor.address,
      nic: tutor.nic,
      dob: dob,
      contact_number: tutor.contact_number,
      gender: tutor.gender,
      subjects: tutor.subjects,
      description: tutor.description,
      password: tutor.password,
    };

    api.updateTutorById(tutorID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitF(e) {
    const { tutor, contact_number, tutorID } = this.state;
    const payload = {
      fullname: tutor.fullname,
      email: tutor.email,
      address: tutor.address,
      nic: tutor.nic,
      dob: tutor.dob,
      contact_number: contact_number,
      gender: tutor.gender,
      subjects: tutor.subjects,
      description: tutor.description,
      password: tutor.password,
    };

    api.updateTutorById(tutorID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitG(e) {
    const { tutor, gender, tutorID } = this.state;

    const payload = {
      fullname: tutor.fullname,
      email: tutor.email,
      address: tutor.address,
      nic: tutor.nic,
      dob: tutor.dob,
      contact_number: tutor.contact_number,
      gender: gender,
      subjects: tutor.subjects,
      description: tutor.description,
      password: tutor.password,
    };

    api.updateTutorById(tutorID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitI(e) {
    const { tutor, description, tutorID } = this.state;
    const payload = {
      fullname: tutor.fullname,
      email: tutor.email,
      address: tutor.address,
      nic: tutor.nic,
      dob: tutor.dob,
      contact_number: tutor.contact_number,
      gender: tutor.gender,
      subjects: tutor.subjects,
      description: description,
      password: tutor.password,
    };

    api.updateTutorById(tutorID, payload).then((res) => {
      window.location.reload();
    });
  }

  // confirm old password
  confirmPassword = async (e) => {
    const { tutor, tutorID } = this.state;
    //console.log("Helllo");
    await bcrypt
      .compare(this.state.password, tutor.password)
      .then((isMatch) => {
        console.log(isMatch);
        if (isMatch) {
          this.setState({
            show: true,
          });
        } else {
        }
      });
  };

  render() {
    const { dob } = this.state;
    const dobn = dob.split("T")[0];
    return (
      <div>
        <label for="user" class="label">
          Full name
        </label>
        <br />
        <input
          id="user"
          className="form-control"
          name="fullname"
          value={this.state.tutor.fullname}
          readonly="true"
        />
        <Popup trigger={<button class="btn btn-primary">Change</button>} modal>
          {(close) => (
            <div>
              <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input
                  className="form-control"
                  name="fullname"
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
          Email
        </label>
        <br />
        <input
          id="user"
          type="email"
          className="form-control"
          name="email"
          value={this.state.tutor.email}
          readonly="true"
        />
        <Popup trigger={<button class="btn btn-primary">Change</button>} modal>
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
          value={this.state.tutor.address}
          readonly="true"
        />
        <Popup trigger={<button class="btn btn-primary">Change</button>} modal>
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
          NIC
        </label>
        <br />
        <input
          id="user"
          className="form-control"
          name="nic"
          value={this.state.tutor.nic}
          readonly="true"
        />
        <Popup trigger={<button class="btn btn-primary">Change</button>} modal>
          {(close) => (
            <div>
              <div className="form-group">
                <label htmlFor="name">NIC</label>
                <input
                  className="form-control"
                  name="nic"
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
          Date of Birth
        </label>
        <br />
        <input
          id="user"
          className="form-control"
          name="dob"
          value={dobn}
          readonly="true"
        />
        <Popup trigger={<button class="btn btn-primary">Change</button>} modal>
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
          value={this.state.tutor.contact_number}
          readonly="true"
        />
        <Popup trigger={<button class="btn btn-primary">Change</button>} modal>
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
          value={this.state.tutor.gender}
          readonly="true"
        />
        <Popup trigger={<button class="btn btn-primary">Change</button>} modal>
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

        <label for="user" class="label">
          Description
        </label>
        <br />
        <input
          id="user"
          className="form-control"
          name="description"
          value={this.state.tutor.description}
          readonly="true"
        />
        <Popup trigger={<button class="btn btn-primary">Change</button>} modal>
          {(close) => (
            <div>
              <div className="form-group">
                <label htmlFor="name">Description</label>
                <input
                  className="form-control"
                  name="description"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={this.handleSubmitI}
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </Popup>
        <hr color="blue" />

        {/****************change password**********************/}
        <Popup
          trigger={<button class="btn btn-primary">Change Password</button>}
          modal
        >
          {(close) => (
            <div>
              <div className="form-group">
                <label htmlFor="name">Old Password</label>
                <input
                  className="form-control"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={this.confirmPassword}
                >
                  Confirm
                </button>
                <br />
                <NewPasswordModal
                  show={this.state.show}
                  tutor={this.state.tutor}
                ></NewPasswordModal>
              </div>
            </div>
          )}
        </Popup>

        <hr color="blue" />
        {/**************************************************************/}
      </div>
    );
  }
}

//These should be added to access the logged user
// TutorProfile.propTypes = {
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

export default TutorProfile;
