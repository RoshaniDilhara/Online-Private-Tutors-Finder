const express = require("express");

const TutorFunctions = require("../../databaseFunctions/TutorFunctions");

const tutorRouter = express.Router();

tutorRouter.post("/tutor", TutorFunctions.createTutor);
tutorRouter.put("/tutor/:id", TutorFunctions.updateTutor);
tutorRouter.delete("/tutor/:id", TutorFunctions.deleteTutor);
tutorRouter.get("/tutor/:id", TutorFunctions.getTutorById);
tutorRouter.get("/tutor", TutorFunctions.getTutors);

module.exports = tutorRouter;
