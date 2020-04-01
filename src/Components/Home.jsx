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
      <Container>
        <Container>
          {/* <Jumbotron> */}
          {/* <h1>Welcome to Online Private Tutors Finder</h1>
          <p>This is just for testing the UI</p> */}

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src="./assets/image1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Welcome to Online Private Tutors Finder</h3>
                <p>This is the home page</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src="./assets/image2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50"
                src="./assets/image1.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/* </Jumbotron> */}
        </Container>

        <Container>
          <Row>
            <Col>
              <Link to="/adminlogin">
                <Button bsStyle="primary">Start as Admin </Button>
              </Link>
            </Col>
            <Col>
              <Link to="/studentlogin">
                <Button bsStyle="primary">Start as Student </Button>
              </Link>
            </Col>
            <Col>
              <Link to="/tutorlogin">
                <Button bsStyle="primary">Start as Tutor </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
