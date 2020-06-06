import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";

export default class AdminHome extends Component {
  render() {
    return(
    // <Container fluid="md">
      <Row >
        <Col xs={2}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} eventKey="0">
                  Tutors
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body><a href="/" class="card-link">Add Tutors</a></Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body><a href="/" class="card-link">Tutor Requests</a></Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body><a href="/" class="card-link">Accepted Tutors</a></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} eventKey="1">
                  Students
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body><a href="/" class="card-link">View Students</a></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} eventKey="2">
                  Appoinments
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body><a href="/" class="card-link">View Appoinments</a></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>

        <Col xs={10}>

        </Col>
        
      </Row>
    // </Container>
  );
  }
}
