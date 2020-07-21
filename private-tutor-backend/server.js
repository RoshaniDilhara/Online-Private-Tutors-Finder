const express = require("express");
var request = require("request");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 5000;
const passport_admin = require("passport");
const passport_std = require("passport");
const passport_tutor = require("passport");
const admins = require("./routes/api/admins");
const studentsAuth = require("./routes/api/StudentRoute");
const tutorsAuth = require("./routes/api/TutorRoute");
const tutorNote = require("./routes/api/NoteRoute");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongoDB connected..."))
  .catch((err) => console.log(err));
const TutorFunctionalRouter = require("./routes/api/TutorFunctionalRoutes");
const StudentFuntionalRouter = require("./routes/api/StudentFunctionalRoutes");
const AdminFunctionalRouter = require("./routes/api/AdminFunctionalRoutes");
const requestsRouter = require("./routes/api/RequestsFunctionalRoutes");
const AppoinmentRouter = require("./routes/api/AppoinmentFunctionalRoutes");
const SubjectRouter = require("./routes/api/SubjectFunctionalRoutes");

// Passport middleware
app.use(passport_admin.initialize());
app.use(passport_std.initialize());
app.use(passport_tutor.initialize());

// Passport config
require("./config/passport")(passport_admin);
require("./config/passportStudent")(passport_std);
require("./config/passportTutor")(passport_tutor);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

app.use(cors());

app.use("/notes", express.static("notes"));

// Routes
app.use("/api/admins", admins);
app.use("/api/studentauth", studentsAuth);
app.use("/api/tutorauth", tutorsAuth);
app.use("/api/tutors", TutorFunctionalRouter);
app.use("/api/students", StudentFuntionalRouter);
app.use("/api/adminfunction", AdminFunctionalRouter);
app.use("/api/requests", requestsRouter);
app.use("/api/appoinments", AppoinmentRouter);
app.use("/api/subjects", SubjectRouter);
app.use("/api/tutornotes", tutorNote);
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
