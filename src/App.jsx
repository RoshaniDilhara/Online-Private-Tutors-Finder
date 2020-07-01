import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import News from "./Components/News";
import Navbar from "./Components/CustomNavBar";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminHome from "./Components/Admin/AdminHome";
import TutorLogin from "./Components/Tutor/TutorLogin";
import TutorSignUp from "./Components/Tutor/TutorSignUp";
import StudentLogin from "./Components/Student/StudentLogin";
import StudentSection from "./Components/Student/StudentSection";
import StudentSignUp from "./Components/Student/StudentSignUp";
import TutorHome from "./Components/Tutor/TutorHome";

import { Provider } from "react-redux";
import store from "./Components/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/adminhome" component={AdminHome} />
          <Route path="/studentlogin" component={StudentLogin} />
          <Route path="/tutorlogin" component={TutorLogin} />
          <Route path="/tutorsignup" component={TutorSignUp} />
          <Route path="/studentsection/:value" component={StudentSection} />
          <Route path="/student-signup" component={StudentSignUp} />
          <Route path="/tutorhome/:value" component={TutorHome} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
