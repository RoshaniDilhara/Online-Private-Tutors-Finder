const express = require("express");

const AppoinmentFunctions = require("../../databaseFunctions/AppoinmentFunctions");

const AppoinmentRouter = express.Router();

AppoinmentRouter.post("/appoinment", AppoinmentFunctions.createAppoinment);
AppoinmentRouter.put("/appoinment/:id", AppoinmentFunctions.updateAppoinment);
AppoinmentRouter.delete(
  "/appoinment/:id",
  AppoinmentFunctions.deleteAppoinment
);
AppoinmentRouter.get("/appoinment/:id", AppoinmentFunctions.getAppoinmentById);
AppoinmentRouter.get("/appoinment", AppoinmentFunctions.getAppoinments);

module.exports = AppoinmentRouter;
