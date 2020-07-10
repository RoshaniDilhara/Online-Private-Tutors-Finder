import React, { Component } from "react";
import "./TutorSignUp.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "./actions/tutorAuthActions";
import { withRouter } from "react-router-dom";
import sbjapi from "../api/subjectapi";
import Select from "react-select";
import _ from "lodash";

class TutorSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      address: "",
      nic: "",
      dob: "",
      contact_number: "",
      gender: "",
      description: "",
      accept: false,
      errors: {},
      subjectsListDup: [],
      modSbjDup: [],
      selectedOptions: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  componentDidMount = async () => {
    await sbjapi.getAllSubject().then((sbj) => {
      this.setState({
        subjectsListDup: sbj.data.data,
      });
    });
    console.log(this.state.subjectsListDup);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTutor = {
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      nic: this.state.nic,
      dob: this.state.dob,
      contact_number: this.state.contact_number,
      gender: this.state.gender,
      subjects: this.state.selectedOptions,
      description: this.state.description,
      accept: this.state.accept,
    };
    console.log(newTutor);
    this.props.registerUser(newTutor, this.props.history);
  }

  handleSelect = (selectedOption) => {
    this.setState({
      selectedOptions: selectedOption,
    });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { errors, subjectsListDup, modSbjDup, selectedOption } = this.state;
    //console.log(errors);

    const subjectsList = _.uniq(subjectsListDup);

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

    return (
      <div class="signup-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" />
          <label for="tab-1" class="tab">
            <a href="/tutorlogin">Sign In</a>
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" checked />
          <label for="tab-2" class="tab">
            <a href="/tutorsignup">Sign Up</a>
          </label>

          <div class="login-form">
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">
                  Full name
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  name="fullname"
                  value={this.state.fullname}
                  error={errors.fullname}
                  onChange={this.handleChange}
                />
                <span class="error-display">{errors.fullname}</span>
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  class="input"
                  value={this.state.email}
                  error={errors.email}
                  name="email"
                  onChange={this.handleChange}
                />
                <span class="error-display">{errors.email}</span>
              </div>

              <div class="group">
                <label for="user" class="label">
                  Address
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  value={this.state.address}
                  error={errors.email}
                  name="address"
                  onChange={this.handleChange}
                />
                <span class="error-display">{errors.email}</span>
              </div>

              <div class="group">
                <label for="user" class="label">
                  NIC
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  value={this.state.nic}
                  error={errors.nic}
                  name="nic"
                  onChange={this.handleChange}
                />
                <span class="error-display">{errors.nic}</span>
              </div>

              <div class="group">
                <label for="user" class="label">
                  Date of birth
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  value={this.state.dob}
                  error={errors.dob}
                  name="dob"
                  onChange={this.handleChange}
                />
                <span class="error-display">{errors.dob}</span>
              </div>

              <div class="group">
                <label for="user" class="label">
                  Contact number
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  value={this.state.contact_number}
                  error={errors.contact_number}
                  name="contact_number"
                  onChange={this.handleChange}
                />
                <span class="error-display">{errors.contact_number}</span>
              </div>

              <div class="group">
                <label for="user" class="label">
                  Gender
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  value={this.state.gender}
                  error={errors.gender}
                  name="gender"
                  onChange={this.handleChange}
                />
                <span class="error-display">{errors.gender}</span>
              </div>

              <div class="group">
                <label for="user" class="label">
                  Subjects
                </label>
                {/* <input
                  id="user"
                  type="text"
                  class="input"
                  value={this.state.subjects}
                  error={errors.subjects}
                  name="subjects"
                  onChange={this.handleChange}
                /> */}

                <Select
                  isMulti
                  value={selectedOption}
                  onChange={this.handleSelect}
                  options={modSbj}
                />

                <span class="error-display">{errors.subjects}</span>
              </div>

              <div class="group">
                <label for="user" class="label">
                  description
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  value={this.state.description}
                  error={errors.description}
                  name="description"
                  onChange={this.handleChange}
                />
                <span class="error-display">{errors.description}</span>
              </div>

              <div class="group">
                <label for="user" class="label">
                  password
                </label>
                <input
                  id="user"
                  type="password"
                  class="input"
                  data-type="password"
                  value={this.state.password}
                  error={errors.password}
                  name="password"
                  onChange={this.handleChange}
                />
                <span class="error-display">{errors.password}</span>
              </div>

              <div class="group">
                <button
                  type="submit"
                  class="button"
                  onClick={this.handleSubmit}
                >
                  Sign Up
                </button>
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <label>
                  <a href="/tutorlogin">Already Member?</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TutorSignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(
  withRouter(TutorSignUp)
);
