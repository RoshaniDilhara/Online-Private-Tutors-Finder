import React, { Component } from "react";
import "../TutorSignUp.css";

class StudentSignUp extends Component {
  state = {};
  render() {
    return (
      <div class="signup-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" />
          <label for="tab-1" class="tab">
            <a href="studentlogin">Sign In</a>
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" checked />
          <label for="tab-2" class="tab">
            <a href="/student-signup">Sign Up</a>
          </label>
          <div class="login-form">
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">
                  First name
                </label>
                <input id="fname" type="text" class="input" />
              </div>
              <div class="group">
                <label for="user" class="label">
                  Last name
                </label>
                <input id="lname" type="text" class="input" />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Email Address
                </label>
                <input id="email" type="email" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Address
                </label>
                <input id="address" type="text" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  User Name
                </label>
                <input id="username" type="text" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Date of birth
                </label>
                <input id="dob" type="text" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Contact number
                </label>
                <input id="phoneNo" type="text" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Gender
                </label>
                <input id="gender" type="text" class="input" />
              </div>

              <div class="group">
                <label for="user" class="label">
                  Password
                </label>
                <input id="password" type="password" class="input" />
              </div>

              <div class="group">
                <input type="submit" class="button" value="Sign Up" />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <label>
                  <a href="/studentlogin">Already Member?</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentSignUp;
