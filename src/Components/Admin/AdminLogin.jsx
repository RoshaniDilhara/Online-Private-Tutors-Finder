import React, { Component } from "react";
import "../Tutor/TutorSignIn.css";

class AdminLogin extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//       errors: {}
//     };
//   }

// onChange = e => {
//     this.setState({ [e.target.id]: e.target.value });
//  };

// onSubmit = e => {
//     e.preventDefault();

//     const userData = {
//       email: this.state.email,
//       password: this.state.password
//     };

//     console.log(userData);
// };

  render() {
    // const { errors } = this.state;

    function my_button_click_handler(){
    alert('Button Clcked');
    }

    return (
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label htmlFor="tab-1" class="tab">
            Sign In
          </label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label htmlFor="user" class="label">
                  Email
                </label>
                <input id="user" type="text" class="input" />
              </div>
              <div class="group">
                <label htmlFor="pass" class="label">
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
                <label htmlFor="check">
                  <span class="icon"></span> Keep me Signed in
                </label>
              </div>
              <div class="group">
                <button type="submit" onClick="my_button_click_handler" class="button"  >Sign In</button>
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

export default AdminLogin;
