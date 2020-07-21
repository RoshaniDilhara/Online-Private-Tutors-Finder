const express = require("express");

const StudentFunctions = require("../../databaseFunctions/StudentFunctions");

const StudentFunctionalRouter = express.Router();

StudentFunctionalRouter.post("/student", StudentFunctions.createStudent);
StudentFunctionalRouter.put("/student/:id", StudentFunctions.updateStudent);
StudentFunctionalRouter.delete("/student/:id", StudentFunctions.deleteStudent);
StudentFunctionalRouter.get("/student/:id", StudentFunctions.getStudentById);
StudentFunctionalRouter.get("/student", StudentFunctions.getStudent);

module.exports = StudentFunctionalRouter;
