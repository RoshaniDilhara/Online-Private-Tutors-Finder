import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow, configure, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import TutorSignIn, {
  TutorSignIn as OriginalTutorSignInClass,
} from "../TutorSignIn";
import { Provider } from "react-redux";
import store from "../../store";
configure({ adapter: new Adapter() });

describe("Test case for testing login", () => {
  let wrapper;
  it("email check", () => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <TutorSignIn />
        </Router>
      </Provider>
    );
    const storyApp = wrapper.find(OriginalTutorSignInClass);
    storyApp.find('input[type="email"]').simulate("change", {
      target: { name: "email", value: "nethmi@gmail.com" },
    });
    expect(storyApp.state("email")).toEqual("nethmi@gmail.com");
  });

  it("password check", () => {
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <TutorSignIn />
        </Router>
      </Provider>
    );
    const storyApp = wrapper.find(OriginalTutorSignInClass);
    storyApp
      .find('input[type="password"]')
      .simulate("change", { target: { name: "password", value: "123456" } });
    expect(storyApp.state("password")).toEqual("123456");
  });
});

// describe("My Test Suite", () => {
//   it("My Test Case", () => {
//     expect(true).toEqual(true);
//   });
// });
