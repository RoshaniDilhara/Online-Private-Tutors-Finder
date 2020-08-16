const mocha = require("mocha");
const assert = require("assert");
const StudentLogDB = require("../models/StudentLogDB");
const delay = require("delay");

describe("Deleting a student using ID", () => {
  let std;

  beforeEach(async () => {
    await delay(1000);
    std = new StudentLogDB({
      firstname: "Hashan",
      lastname: "Liyange",
      email: "hashan@gmail.com",
      address: "Matara",
      username: "Hashan",
      dob: 1995 / 08 / 14,
      contact_number: 18132040240,
      gender: "Male",
      password: "123456",
    });
    std.save().then(() => {
      assert(!std.isNew); //if std is saved to db it is not new
    });
  });
  it("removes a student using id", async () => {
    await delay(1000);
    StudentLogDB.findOneAndDelete({ _id: std._id })
      .then(() => StudentLogDB.findOne({ email: "hashan@gmail.com" }))
      .then((pokemon) => {
        assert(pokemon === null);
      });
  });
});
