const express = require("express");
const userRoutes = require("./users");
const rolRoutes = require("./roles");
const tasksRoutes = require("./tasks");
const apiRoutes = express.Router();

apiRoutes.get("/users", userRoutes);
apiRoutes.get("/roles", rolRoutes);
apiRoutes.get("/tasks", tasksRoutes);

module.exports = apiRoutes;
