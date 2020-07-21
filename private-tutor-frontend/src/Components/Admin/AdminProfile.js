import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import apiadmin from "../api/adminapi";
import Popup from "reactjs-popup";

class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      adminID: this.props.match.params.value,
      admin:{},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitA = this.handleSubmitA.bind(this);
    this.handleSubmitB = this.handleSubmitB.bind(this);
  }

  componentDidMount = async () => {
    await apiadmin.getAdminById(this.state.adminID).then((adm) => {
      this.setState({
        admin: adm.data.data,
      });
    });
    // const { admin } = this.state;

  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmitA(e) {
    const { admin, name, adminID } = this.state;
    const payload = {
      name: name,
      email: admin.email,
    };

    apiadmin.updateAdminById(adminID, payload).then((res) => {
      window.location.reload();
    });
  }

  handleSubmitB(e) {
    const { admin, email, adminID } = this.state;
    const payload = {
      name: admin.name,
      email: email,
    };

    apiadmin.updateAdminById(adminID, payload).then((res) => {
      window.location.reload();
    });
  }

  render() {
    return (
      <div>
        <label for="user" className="label">
          Name
        </label>
        <br />
        <input
          id="user"
          className="form-control"
          name="name"
          value={this.state.admin.name}
          readonly="true"
        />
        <Popup trigger={<button class="btn btn-primary">Change</button>} modal>
          {(close) => (
            <div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className="form-control"
                  name="name"
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

        <label for="user1" class="label">
          Email
        </label>
        <br />
        <input
          id="user1"
          type="email"
          className="form-control"
          name="email"
          value={this.state.admin.email}
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
       </div>
    );
  }
}

//These should be added to access the logged user
AdminProfile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(AdminProfile));
