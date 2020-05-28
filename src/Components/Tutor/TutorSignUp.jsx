import React, { Component } from "react";
import "./TutorSignUp.css";

export default class TutorSignUp extends Component {
  render() {
    return (
      <div class="signup-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" />
          <label for="tab-1" class="tab">
            <a href="/tutorlogin">Sign In</a>
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" checked />
          <label for="tab-2" class="tab">
            <a href="/signup">Sign Up</a>
          </label>
          <div class="login-form">
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">
                  Full name
                </label>
                <input id="user" type="text" class="input" />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Email Address
                </label>
                <input id="pass" type="text" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Address
                </label>
                <input id="user" type="text" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  NIC
                </label>
                <input id="user" type="text" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Date of birth
                </label>
                <input id="user" type="text" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Contact number
                </label>
                <input id="user" type="text" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Gender
                </label>
                <input id="user" type="text" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Subjects
                </label>
                <input id="user" type="text" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  description
                </label>
                <input id="user" type="text" class="input" />
              </div>

              <div class="group">
                <input type="submit" class="button" value="Sign Up" />
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
