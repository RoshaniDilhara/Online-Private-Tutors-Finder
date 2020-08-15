const mocha = require("mocha");
const assert = require("assert");
const StudentLogDB = require("../models/StudentLogDB");
const delay = require("delay");

describe("Reading student details", () => {
  it("finds student with the email of student", async () => {
    await delay(1000);
    StudentLogDB.findOne({ email: "varun@gmail.com" }, (err, std) => {
      assert(std.firstname === "Varun");
      console.log(std);
    });
  });
});
