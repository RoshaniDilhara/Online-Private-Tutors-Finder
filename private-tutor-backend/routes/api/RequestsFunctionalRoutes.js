const express = require("express");

const RequestFunctions = require("../../databaseFunctions/RequestsFunctions");

const requestsRouter = express.Router();

requestsRouter.post("/request", RequestFunctions.createRequest);
requestsRouter.put("/request/:id", RequestFunctions.updateRequest);
requestsRouter.delete("/request/:id", RequestFunctions.deleteRequest);
requestsRouter.get("/request/:id", RequestFunctions.getRequestById);
requestsRouter.get("/request", RequestFunctions.getRequests);

module.exports = requestsRouter;
