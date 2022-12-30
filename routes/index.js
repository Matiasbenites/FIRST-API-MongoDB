const express = require("express");
const userRoutes = require("./users");
const rolRoutes = require("./roles");
const tasksRoutes = require("./tasks");
const apiRoutes = express.Router();

apiRoutes.use("/users", userRoutes);
apiRoutes.use("/roles", rolRoutes);
apiRoutes.use("/tasks", tasksRoutes);

module.exports = apiRoutes;
