const express = require("express");

const SubjectFunctions = require("../../databaseFunctions/SubjectFunctions");

const sbjRouter = express.Router();

sbjRouter.post("/subject", SubjectFunctions.createSubject);
sbjRouter.put("/subject/:id", SubjectFunctions.updateSubject);
sbjRouter.delete("/subject/:id", SubjectFunctions.deleteSubject);
sbjRouter.get("/subject/:id", SubjectFunctions.getSubjectById);
sbjRouter.get("/subject", SubjectFunctions.getSubjects);

module.exports = sbjRouter;
