const express = require("express");

const AdminFunctions = require("../../databaseFunctions/AdminFunctions");

const AdminFunctionalRouter = express.Router();

AdminFunctionalRouter.post("/admin", AdminFunctions.createAdmin);
AdminFunctionalRouter.put("/admin/:id", AdminFunctions.updateAdmin);
AdminFunctionalRouter.delete("/admin/:id", AdminFunctions.deleteAdmin);
AdminFunctionalRouter.get("/admin/:id", AdminFunctions.getAdminById);
AdminFunctionalRouter.get("/admins", AdminFunctions.getAdmin);

module.exports = AdminFunctionalRouter;
