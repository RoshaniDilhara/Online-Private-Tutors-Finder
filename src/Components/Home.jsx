import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Jumbotron,
  Container,
  Carousel,
  Row,
  Col,
  Image,
  Button
} from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        {/* <Container> */}
        {/* <Jumbotron> */}
        {/* <h1>Welcome to Online Private Tutors Finder</h1>
          <p>This is just for testing the UI</p> */}

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/studentcopy.jpg"
              alt="First slide"
              style={{ width: "100%" }}
            />
            <Carousel.Caption>
              <h3>Welcome to Online Private Tutors Finder</h3>
              <p>This is the home page</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./assets/bookcopy.jpg"
              alt="Second slide"
              style={{ width: "100%" }}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100"
              src="./assets/learncopy2.jpg"
              alt="Third slide"
              style={{ width: "100%" }}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* </Jumbotron> */}
        {/* </Container> */}

        <Container>
          <Row className="show-grid text-center">
            <Col>
              <Image
                src="./assets/avatar-pic-circle-png-5.png"
                circle
                className="profile-pic"
              />
              {/* <h3>Frank</h3>
              <p>bjsbhgvag gvdhayg ghvsdhgdxcvygv </p> */}
              <Link to="/adminlogin">
                <Button bsStyle="primary">Start as Admin </Button>
              </Link>
            </Col>
            <Col>
              <Image
                src="./assets/avatar-pic-circle-png-5.png"
                circle
                className="profile-pic"
              />
              <Link to="/studentlogin">
                <Button bsStyle="primary">Start as Student </Button>
              </Link>
            </Col>
            <Col>
              <Image
                src="./assets/avatar-pic-circle-png-5.png"
                circle
                className="profile-pic"
              />
              <Link to="/tutorlogin">
                <Button bsStyle="primary">Start as Tutor </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
