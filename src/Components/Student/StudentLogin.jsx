import React, { Component } from "react";
import { Link, HashRouter as Router } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../Tutor/TutorSignIn.css";

export default class StudentLogin extends Component {
  render() {
    return (
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            <a href="studentlogin">Sign In</a>
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab">
            <a href="/student-signup">Sign Up</a>
          </label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  Username
                </label>
                <input id="user" type="text" class="input" />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                />
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked />
                <label for="check">
                  <span class="icon"></span> Keep me Signed in
                </label>
              </div>
              <div class="group">
                <input type="submit" class="button" value="Sign In" />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
