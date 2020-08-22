import React, { Component } from "react";
import api from "../api/tutorapi";
const bcrypt = require("bcryptjs");

class NewPasswordModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ``,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  //update the new password
  changePassword = async (tutor) => {
    //const { tutor } = this.props.tutor;
    console.log("Hello");
    //Hash password before saving in database
    await bcrypt.hash(this.state.password, 10, function (err, hash) {
      const payload = {
        fullname: tutor.fullname,
        email: tutor.email,
        address: tutor.address,
        nic: tutor.nic,
        dob: tutor.dob,
        contact_number: tutor.contact_number,
        gender: tutor.gender,
        subjects: tutor.subjects,
        description: tutor.description,
        password: hash,
        accept: tutor.accept,
      };

      api.updateTutorById(tutor._id, payload).then((res) => {
        window.location.reload();
      });
    });
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    //console.log(this.props.tutor);
    return (
      <div>
        <div className="form-group">
          <label htmlFor="name">New Password</label>
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
            onClick={this.changePassword.bind(this, this.props.tutor)}
          >
            Save Changes
          </button>
        </div>
      </div>
    );
  }
}

export default NewPasswordModal;
