import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default class StudentLogin extends Component {
  render() {
    return (
      <div>
        {/* STUDENT LOGIN PAGE */}
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link href="/adminlogin">Active</Nav.Link>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
      </div>
    );
  }
}
