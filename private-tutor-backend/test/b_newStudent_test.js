const mocha = require("mocha");
const assert = require("assert");
const StudentLogDB = require("../models/StudentLogDB");
const delay = require("delay");

describe("Creating a new student", function () {
  it("Saves the new student in the database", async () => {
    await delay(1000);
    var std = new StudentLogDB({
      firstname: "Varun",
      lastname: "Liyange",
      email: "varun@gmail.com",
      address: "Matara",
      username: "Varun",
      dob: 1995 / 08 / 14,
      contact_number: 18132040240,
      gender: "Male",
      password: "123456",
    });

    std.save().then(() => {
      assert(!std.isNew); //if std is saved to db it is not new
    });
  });
});
