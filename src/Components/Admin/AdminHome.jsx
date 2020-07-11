import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import { logoutUser } from "./actions/adminAuthActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../Student/StudentSection.css";
import { Link, Route, HashRouter, withRouter } from "react-router-dom";
import apiadmin from "../api/adminapi";
import AdminProfile from "./AdminProfile";
import Avatar from "react-avatar";
import ViewAppoinments from './ViewAppoinments'
import ViewStudents from './ViewStudents'

class AdminHome extends Component {
  constructor(props) {
    super(props);
    //const { user } = this.props.auth;
    this.state = {
      adminID: this.props.match.params.value,
      admin: {},
    };
    //console.log(this.state.adminID);
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    console.log("User logged out");
  };

  componentDidMount = async () => {
    console.log(this.state.adminID);
    await apiadmin.getAdminById(this.state.adminID).then((adm) => {
      this.setState({
        admin: adm.data.data,
      });
    });
    console.log(this.state.admin);
  };

  // render() {
  //   return (
  //     // <Container fluid="md">
  //     <Row>
  //       <Col xs={2}>
  //         <Accordion defaultActiveKey="0">
  //           <Card>
  //             <Card.Header>
  //               <Accordion.Toggle as={Button} eventKey="0">
  //                 Tutors
  //               </Accordion.Toggle>
  //             </Card.Header>
  //             <Accordion.Collapse eventKey="0">
  //               <Card.Body>
  //                 <a href="/" class="card-link">
  //                   Add Tutors
  //                 </a>
  //               </Card.Body>
  //             </Accordion.Collapse>
  //             <Accordion.Collapse eventKey="0">
  //               <Card.Body>
  //                 <a href="/" class="card-link">
  //                   Tutor Requests
  //                 </a>
  //               </Card.Body>
  //             </Accordion.Collapse>
  //             <Accordion.Collapse eventKey="0">
  //               <Card.Body>
  //                 <a href="/" class="card-link">
  //                   Accepted Tutors
  //                 </a>
  //               </Card.Body>
  //             </Accordion.Collapse>
  //           </Card>
  //           <Card>
  //             <Card.Header>
  //               <Accordion.Toggle as={Button} eventKey="1">
  //                 Students
  //               </Accordion.Toggle>
  //             </Card.Header>
  //             <Accordion.Collapse eventKey="1">
  //               <Card.Body>
  //                 <Link to={`/adminprofile/${this.state.adminID}`} class="card-link">
  //                   View Students
  //                 </Link>
  //               </Card.Body>
  //             </Accordion.Collapse>
  //           </Card>
  //           <Card>
  //             <Card.Header>
  //               <Accordion.Toggle as={Button} eventKey="2">
  //                 Appoinments
  //               </Accordion.Toggle>
  //             </Card.Header>
  //             <Accordion.Collapse eventKey="2">
  //               <Card.Body>
  //                 <a href="/" class="card-link">
  //                   View Appoinments
  //                 </a>
  //               </Card.Body>
  //             </Accordion.Collapse>
  //           </Card>
  //         </Accordion>
  //       </Col>

  //       <Col xs={10}>
  //         <p>hello</p>
  //       </Col>

  //       <div>
  //         <Route
  //           exact
  //           path="/adminprofile/:value"
  //           component={AdminProfile}
  //         />
  //       </div>

  //       <Col>
  //         <div>
  //           <button
  //             style={{
  //               width: "150px",
  //               borderRadius: "3px",
  //               letterSpacing: "1.5px",
  //               marginTop: "1rem",
  //             }}
  //             onClick={this.onLogoutClick}
  //             className="btn btn-large waves-effect waves-light hoverable blue accent-3"
  //           >
  //             Logout
  //           </button>
  //         </div>
  //       </Col>
  //     </Row>
  //     // </Container>
  //   );
  // }

  render() {
    console.log(this.state.admin);
    return (
      <div>
        <div>
          <HashRouter basename="/">
            <div className="gap">
              <Row>
                <Col xs={1} sm={0}>
                  <center>
                    <Avatar
                      name={this.state.admin.name}
                      size="50"
                      round={true}
                    />
                  </center>
                </Col>
                <Col xs={0} sm={0}>
                  <h5>Hello,{this.state.admin.name}</h5>
                </Col>
              </Row>

              <br />

              <Button
                className="button"
                bsStyle="primary"
                onClick={this.onLogoutClick}
              >
                Log out
              </Button>
            </div>

            <div className="whole">
              <div className="linkside">
                <div className="gap">
                  <Link
                    to={`/adminprofile/${this.state.adminID}`}
                    className="waves-effect waves-light btn-small"
                  >
                    <font color="blue">MY PROFILE</font>
                  </Link>
                </div>
                <div className="gap">
                  <Link
                    to={`/viewappoinments/${this.state.adminID}`}
                    className="waves-effect waves-light btn-small"
                  >
                    <font color="blue">VIEW APPOINMENTS</font>
                  </Link>
                </div>

                <div className="gap">
                  <Link
                    to={`/viewstudents/${this.state.adminID}`}
                    className="waves-effect waves-light btn-small"
                  >
                    <font color="blue">VIEW STUDENTS</font>
                  </Link>
                </div>

              </div>

              <div className="barside">
                <Route
                  exact
                  path="/adminprofile/:value"
                  component={AdminProfile}
                />
                <Route
                  exact
                  path="/viewappoinments/:value"
                  component={ViewAppoinments}
                />
                <Route
                  exact
                  path="/viewstudents/:value"
                  component={ViewStudents}
                />
              </div>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}

AdminHome.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(withRouter(AdminHome));
