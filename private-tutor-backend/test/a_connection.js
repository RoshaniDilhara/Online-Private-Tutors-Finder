const mongoose = require("mongoose");
const db = require("../config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection
  .once("open", function () {
    console.log("Succefully connected to the mongdb");
  })
  .on("error", function (error) {
    console.log("Connection error:", error);
  });
