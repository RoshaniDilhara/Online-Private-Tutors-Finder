import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Jumbotron,
  Container,
  Carousel,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        {/* <Container> */}
        {/* <Jumbotron> */}
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
            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="./assets/avatar-pic-circle-png-5.png"
                circle
                className="profile-pic"
              />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="./assets/avatar-pic-circle-png-5.png"
                circle
                className="profile-pic"
              />
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="./assets/avatar-pic-circle-png-5.png"
                circle
                className="profile-pic"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4}>
              <Link to="/adminlogin">
                <Button className="button" bsStyle="primary">
                  Start as Admin{" "}
                </Button>
              </Link>
            </Col>
            <Col xs={12} sm={4}>
              <Link to="/studentlogin">
                <Button className="button" bsStyle="primary">
                  Start as Student{" "}
                </Button>
              </Link>
            </Col>
            <Col xs={12} sm={4}>
              <Link to="/tutorlogin">
                <Button className="button" bsStyle="primary">
                  Start as Tutor{" "}
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
